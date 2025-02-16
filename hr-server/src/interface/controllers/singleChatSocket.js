import { updateUserById } from "../../application/services/UserService/UserService";
import { User } from "../../domain/models/UserModel";

class singleChatSocket {
    constructor(socket, io) {
        this.socket = socket;
        this.io = io;


        // @event for handle Chat Message

        this.socket.on("register", this.register.bind(this));
    }
    async register(userId) {

        const data ={
            socketId:this.socket.id,
            lastSeen:Date.now(),
            status:'online'
        }
        await updateUserById(userId,data);
        this.emitStatus("online");

    }
    async unRegister() {
        const data = {
          socketId: this.socket.id,
          lastSeen: Date.now(),
          status: "offline",
        };
    
        await User.findOneAndUpdate({ socketId: this.socket.id }, data);
        this.emitStatus("offline");
    
        this.socket.off("sendMessage", this.sendMessage);
        this.socket.off("deleteMessage", this.deleteMessage);
        this.socket.off("selectContact", this.selectContact);
        this.socket.off("register", this.register);
      }
    async sendMessage(data) {
        const { me, to, message, replyMessage } = data;
        const { file } = message;
    
        var fileData = {
          size: null,
          type: null,
          name: null,
        };
    
        const receiver = await User.findById(to);
        const sender = await User.findById(me);
    
        receiver.allChats = receiver.allChats.filter(
          (chat) => chat.toString() !== me
        );
        receiver.allChats.unshift(me);
        await receiver.save();
    
        sender.allChats = sender.allChats.filter((chat) => chat.toString() !== to);
        sender.allChats.unshift(to);
        await sender.save();
    
        const receiverSocketId = receiver ? receiver.socketId : null;
    
        const chat = await ChatModel.findOne({
          chatWithin: { $all: [me, to] },
        });
        if (file.type !== "text") {
            fileData = uploadFile(file.data, me, "user");
      
            const folder = {
              file: "files",
              image: "images",
              video: "videos",
              audio: "audios",
              recording: "recordings",
            };
      
            sender.files.push({
              url: `user-${sender.id}/${folder[file.type]}/${fileData.name}`,
              size: fileData.size,
              type: file.type,
              name: fileData.name,
              chat: "single",
              chatId: me + to,
            });
      
            await sender.save();
          }
          if (!chat) {
            const newMessage = await ChatModel.create({
              chatWithin: [me, to],
            });
      
            newMessage.messages.push({
              message: {
                file: {
                  type: fileData.type ? file.type : "text",
                  name: fileData.name,
                  size: fileData.size,
                },
                text: message.text,
                links: message.links,
              },
              sender: me,
              receiver: to,
              replyMessage,
            });
            await newMessage.save();

            const populatedChat = await newMessage.populate({
              path: "messages.sender messages.receiver messages.replyMessage.to",
              select:
                "fullName username avatarColor isAvatar profile.privacy.profilePhoto",
              options: { strictPopulate: false },
            });
      
            this.io
              .to(receiverSocketId)
              .emit("receiveMessage", populatedChat.messages[0]);
            this.io
              .to(this.socket.id)
              .emit("receiveMessage", populatedChat.messages[0]);
            this.io
              .to(receiverSocketId)
              .emit("NewMessageNotification", populatedChat.messages[0]);
      
            return null;
          }
          chat.messages.push({
            message: {
              file: {
                type: fileData.type ? file.type : "text",
                name: fileData.name,
                size: fileData.size,
              },
              text: message.text,
              links: message.links,
            },
            sender: me,
            receiver: to,
            replyMessage,
          });
      
          await chat.save();
      
          const populatedChat = await chat.populate({
            path: "chatWithin messages.sender messages.receiver messages.replyMessage.to",
            select:
              "fullName username avatarColor isAvatar profile.privacy.profilePhoto",
            options: { strictPopulate: false },
          });
      
          const newMessage =
            populatedChat.messages[populatedChat.messages.length - 1];
      
          this.io.to(receiverSocketId).emit("receiveMessage", newMessage);
          this.io.to(this.socket.id).emit("receiveMessage", newMessage);
          this.io.to(receiverSocketId).emit("NewMessageNotification", newMessage);
    }
    async sendIceCandidate(data) {
        const { to, candidate, from } = data;
        const { socketId } = await User.findById(to);
        this.io.to(socketId).emit("OnIncomingIceCandidate", { from, candidate });
      }
} 
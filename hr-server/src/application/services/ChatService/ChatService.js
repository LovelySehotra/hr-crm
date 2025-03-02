import { ChatModel } from "../../../domain/models/ChatModel.js";
import { User } from "../../../domain/models/UserModel.js"
import AppError from "../../../interface/utils/AppError.js";


export const  currentChatData =  async (me,to) => {      
    console.log(me,to)
        try {
          const chat = await ChatModel.findOne({
            chatWithin: { $all: [me, to] },
          });
      
          var media = {
            images: [],
            videos: [],
            audios: [],
          };
      
          var files = [];
          var voices = [];
      
        //   chat?.messages.map((msg) => {
        //     if (msg.message.file.type === "image") {
        //       media.images.push(
        //         `${config.server.host}/api/default/getMedia/user-${msg.sender._id}/images/${msg.message.file.name}`
        //       );
        //     }
        //     if (msg.message.file.type === "video") {
        //       media.videos.push(
        //         `${config.server.host}/api/default/getMedia/user-${msg.sender._id}/videos/${msg.message.file.name}`
        //       );
        //     }
        //     if (msg.message.file.type === "audio") {
        //       media.audios.push(
        //         `${config.server.host}/api/default/getMedia/user-${msg.sender._id}/audios/${msg.message.file.name}`
        //       );
        //     }
        //     if (msg.message.file.type === "file") {
        //       files.push({
        //         name: msg.message.file.name,
        //         url: `${config.server.host}/api/default/getMedia/user-${msg.sender._id}/files/${msg.message.file.name}`,
        //         size: msg.message.file.size,
        //         date: msg.timestamp,
        //         format: msg.message.file.name.split(".")[1],
        //       });
        //     }
        //     if (msg.message.file.type === "recording") {
        //       voices.push({
        //         name: msg.message.file.name,
        //         url: `${config.server.host}/api/default/getMedia/user-${msg.sender._id}/recordings/${msg.message.file.name}.mp3`,
        //         size: msg.message.file.size,
        //         date: msg.timestamp,
        //       });
        //     }
        //   });
      
          const userTo = await User.findById(to, {
            _id: 1,
            username: 1,
            fullName: 1,
            isAvatar: 1,
            avatarColor: 1,
            "profile.about": 1,
            "profile.privacy.about": 1,
            "profile.privacy.profilePhoto": 1,
          });
          const user = await User.findById(me, { "profile.blockedUsers": 1 });

          if (!user) {
            throw new Error("User not found");
          }
          
          const { profile: { blockedUsers } = {} } = user;
        //   const {
        //     profile: { blockedUsers },
        //   } = await User.findById(me, {
        //     "profile.blockedUsers": 1,
        //   });
      
          const isBlocked = blockedUsers?.includes(to);
      
          const links = chat?.messages.flatMap((msg) =>
            msg.message.links.map((link) => link)
          );
      
          const modifiedData = {
            media,
            files,
            voices,
            links,
            userTo,
            isBlocked,
          };
      
          return (modifiedData);
        } catch (error) {
          console.log(error);
          throw new AppError("Internal serve error", 500);
        }
      };
      


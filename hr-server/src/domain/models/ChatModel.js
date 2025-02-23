import mongoose, { Schema } from "mongoose";
const ChatSchema = new Schema({
    chatWithin: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    messages: [
      {
        timestamp: { type: Date, default: Date.now },
        message: {
          file: {
            type: {
              type: String,
            },
            name: {
              type: String,
            },
            size: {
              type: Number,
            },
          },
          text: {
            type: String,
          },
          links: [
            {
              type: String,
            },
          ],
        },
        sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
        receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
        replyMessage: {
          to: { type: Schema.Types.ObjectId, ref: "User" },
          message: {
            file: {
              type: {
                type: String,
              },
              name: {
                type: String,
              },
              size: {
                type: Number,
              },
            },
            text: {
              type: String,
            },
          },
        },
      },
    ],
    isMessageSeen: { type: Boolean, default: false },
  });
  export const ChatModel = mongoose.model("Chat", ChatSchema);
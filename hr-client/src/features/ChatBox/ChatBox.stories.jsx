import ChatBox from "./ChatBox.jsx";



export default {
  component: ChatBox,
};

export const main = {
  args: {
    initialMessages = [
        {
          sender: "John",
          message: "Hello!",
          timestamp: "10:00 AM",
        },
        {
          sender: "Jane",
          message: "Hi there!",
          timestamp: "10:05 AM",
        },
      ];
  },
};
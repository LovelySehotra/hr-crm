// import React, { useEffect, useState } from 'react'
// import ChatSIdeBar from '../../components/ChatSideBar/ChatSIdeBar'
// import ChatListItem from '../../components/ChatListItem/ChatListItem'
// import ChatHeader from '../../components/ChatHeader/ChatHeader'
// import './Chat.css'
// import ChatBox from '../../features/ChatBox/ChatBox'
// import { useDispatch, useSelector } from 'react-redux'
// import { getUserDetail } from '../../redux/slices/AuthSlice'
// import socket from '../../config/Socket'
// import { getAllChatsByUser, getCurrentChatData, setCurrentChat } from '../../redux/slices/ChatSlice'
// import { getAllCandidates } from '../../redux/slices/CandidateManageSlice'


// const Chat = () => {
//   const dispatch = useDispatch()
//   // const [allChat, setAllChat] = useState([])
//   const [currentChatData, setCurrentChatData] = useState(undefined)
//   const [isSelected, setIsSelected] = useState(false)

//   const SActiveChat = useSelector((state) => state.Chat);
//   const SUserProfile = useSelector((state) => state.auth.userInfo);
//   console.log("active", SActiveChat)
//   //get current user 
//   const getUser = async () => {
//     try {

//       const data = await dispatch(getUserDetail()).unwrap();
//       if (data) console.log(data)
//       if (!socket || !socket.connected) {
//         console.error("Socket is not connected!");
//         return;
//       }
//       socket.emit("register", data._id);
//       socket.emit("status", {
//         userId: data._id,
//         status: "online",
//       });
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   const getAllUsers = async () => {
//     try {
//       const data = await dispatch(getAllCandidates()).unwrap()

//       const { payload } = await dispatch(getAllChatsByUser()).unwrap()
//       if (payload) {
//         setAllChat(payload)
//       }
//     } catch (error) {

//     }

//   }
//   // send message 
//   const sendMessage = (message) => {
//     if (message === "") return;
//     const Message = {
//       me: SUserProfile?._id,
//       to: SActiveChat.currentChat?._id,
//       message: {

//         text: message,
//         links: extractLinks(message),
//       },

//     };
//     console.log("here", Message)
//     socket.emit("sendMessage", Message);

//   }
//   const extractLinks = (text) => {
//     const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;

//     const urls = text.match(urlRegex);

//     return urls || [];
//   };
//   // handle current chat state
//   const handleSetCurrentChat = async(chat) => {
//     let chatObj = {
//       _id: chat?.user?._id,
//       fullName: chat?.user?.fullName,
//       isAvatar: chat?.user?.isAvatar,
//       status: "offline",
//       lastSeen: "",
//     }
//     dispatch(setCurrentChat(chatObj))
//     if(SActiveChat.currentChat){
//       setIsSelected(true)
//     }


//     // console.log(SUserProfile?._id,chat?.user?._id)
//     // const data = await handleGetCurrentChatData(   SUserProfile?._id,
//     //    chat?.user?._id)

//     //   setCurrentChatData(data)

//   }
//   // get current chat data from server: 
//   const handleGetCurrentChatData = async (me, to) => {
//     const currentChatData = await dispatch(getCurrentChatData({
//       me, to,
//     })).unwrap()
//     console.log("currentData",currentChatData)
//     return currentChatData
//   }
//   useEffect(() => {
//     if (isSelected) {
//       socket.emit("selectContact", {
//         me: SUserProfile?._id,
//         to: SActiveChat?.currentChat._id,
//         socketId: socket.id,
//       });
//       // setTimeout(() => {
//       //   RChatBody.current?.scrollTo(0, RChatBody.current.scrollHeight);
//       // }, 100);
//     }
//     return () => {
//       socket.off("selectContact");
//     };
//   }, [SUserProfile,isSelected]);
//   useEffect(() => {
//     getUser()
//     dispatch(getAllChatsByUser())
//     // getAllUsers()
//   }, [dispatch])
//   console.log(SActiveChat)
//   return (
//     <div>
//       <ChatSIdeBar>
//         <div className='sectionOne'>
//           <div className='subSection'>

//             <ChatHeader backgroundColor=' rgb(32, 44, 51)' />

//             <div className='chatlistBox'>
//               {
//                 SActiveChat && SActiveChat?.allChats?.chats?.length ? SActiveChat?.allChats?.chats.map((chat) => <ChatListItem onClick={() => handleSetCurrentChat(chat)} name={chat.user.fullName} lastMessage={chat?.message.text} />)
//                   : <div className='noChat' >No chat</div>
//               }

//             </div>
//           </div>
//           <div className='chatBoxSection'>
//             <ChatBox sendMessage={(data) => sendMessage(data)} selectedContact={true} />
//           </div>
//         </div>
//       </ChatSIdeBar>

//     </div>
//   )
// }

// export default Chat



// import React from 'react'
// import ChatSIdeBar from '../../components/ChatSideBar/ChatSIdeBar'
// export default function Chat() {
//   return (
  
//   <ChatSIdeBar>

//   </ChatSIdeBar>
//   )
// }


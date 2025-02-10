import React from 'react'
import Plus from "../../assets/Chat/Plus.png"
import AddChat from "../../assets/Chat/AddChat.png"
import More from "../../assets/Chat/More.png"
import "./ChatHeader.css"
const ChatHeader = ({variant,label="Chat Header",onAdd,onMore,backgroundColor,color="white"}) => {
    
  return (
    <div>
      <div style={{backgroundColor:backgroundColor}} className='chatHeader'>
        <h3 style={{color:color}}>{label}</h3>
        <div className='chatHeaderIcon'>
            <img src={Plus} alt="" onClick={onAdd}/>
           { variant !=="channel" && <img src={More} alt="" onClick={onMore} />}
        </div>
      </div>
    </div>
  )
}

export default ChatHeader

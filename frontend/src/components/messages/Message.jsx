import React from 'react'
import { useAuthContext } from '../../Context/authContext'
import useConversation from '../../zustand/useConversation'
import {extractTime} from '../../util/extractTime'
const Message = ({ message }) => {

  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()

  const extractedTime = extractTime(message.createdAt)
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleBGColor = fromMe ? 'bg-blue-500' : ''
  const shakeClass = message.shouldShake ? "shake" : ""

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt='Tailwind chat bubble' />
        </div>
      </div>
      <div className={`chat-bubble text-white  ${bubbleBGColor} ${shakeClass} `}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{extractedTime}</div>
    </div>
  )
}

export default Message
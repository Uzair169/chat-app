import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';
const SearchInput = () => {

  const [search, setSearch] = useState("")
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    if (search.length < 3) {
      return toast.error("Search must be at least 3 characters long")
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if (conversation) {
      setSelectedConversation(conversation)
      setSearch("")

    } else {
      toast.error('No such user found')
    }

  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input type="text" placeholder='Search' className='input input-bordered rounded-full' value={search} // bind the input field to the search state
        onChange={(e) => setSearch(e.target.value)} />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <CiSearch className='w-6 h-6 ' />
      </button>
    </form>
  )
}

export default SearchInput
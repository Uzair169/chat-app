import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../Context/authContext'

const useLogin = () => {

    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async (username, password) => {
        const success = HandleInputErrors(username, password)
        if (!success) return

        setLoading(true)
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, login }
}

export default useLogin

function HandleInputErrors(username, password) {
    if (!username || !password ) {
        toast.error('Please fill in all the details')
        return false
    }

    return true
}
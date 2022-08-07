import React, { useState } from 'react'
import AuthContext from './authContext'
import { useNavigate } from 'react-router-dom'

function AuthContextProvider({ children }) {
    const unAuthState = {
        authorized: false,
        company_id: 0,
        username: '',
        token: '',
    }

    const localAuthStr = localStorage.getItem('auth')
    let localAuth = {
        authorized: false,
        company_id: 0,
        username: '',
        token: '',
    }

    if (localAuth) {
        try {
            localAuth = JSON.parse(localAuthStr)
            if (localAuth.username && localAuth.token) {
                localAuth = { ...localAuth, authorized: true }
            }
        } catch (ex) {}
    }

    const [comAuth, setComAuth] = useState(localAuth)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('ComAuth')
        setComAuth({ ...unAuthState })
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{ ...comAuth, setComAuth, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

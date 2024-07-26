import React, { createContext, useState } from 'react'



export const AuthContext = createContext()


export default function AuthContextProvider({ children }) {

    const [isAuth, setisAuth] = useState(false)
    const [token, settoken] = useState("")

    console.log(isAuth)
    return (
        <AuthContext.Provider value={{ isAuth, setisAuth, token, settoken }}>
            {children}
        </AuthContext.Provider>
    )
}
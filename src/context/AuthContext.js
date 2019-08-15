import { createContext, useState } from "react"
import React from "react"

const defaultUser = {
  name: "Visitor",
  token: null,
  role: "visitor",
  isAuthenticated: true,
}

const AuthContext = createContext({})

function AuthProvider({children}) {

  const [user,setUser] = useState(defaultUser)

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
export { AuthProvider };

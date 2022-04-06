import {useContext, createContext, useEffect, useState} from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    
    const localStorageLoginData = JSON.parse(localStorage.getItem("login"))
    const [user, setUser] = useState(localStorageLoginData?.user);
    const [token, setToken] = useState(localStorageLoginData?.token);
    
    useEffect(() => {
        const fetchToken = JSON.parse(localStorage.getItem("login"));
        if (fetchToken) {
          setToken(fetchToken.tokens);
        }
      }, []);

    return (
        <AuthContext.Provider value={{user, setUser, token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthProvider, useAuth}

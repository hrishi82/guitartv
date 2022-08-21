import {useContext, createContext, useEffect, useState} from "react"
import {SignupServices} from "../services/services"

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

      const signupUser = async (email, password, name) => {
        try {
          const resp = await SignupServices({ email, password, name });
          if (resp.status === 201) {
            localStorage.setItem(
              'login',
              JSON.stringify({
                token: resp.data.encodedToken,
                user: resp.data.createdUser,
              })
            );
            setUser(resp.data.createdUser);
            setToken(resp.data.encodedToken);
          }
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <AuthContext.Provider value={{user, setUser, token, setToken, signupUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthProvider, useAuth}

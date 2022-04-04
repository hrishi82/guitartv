import {useContext, createContext, useEffect, useReducer} from "react"
import axios from "axios"
import {dataReducerFn} from "../reducer/dataReducerFn"
import {GetData} from "../services/services"
import {useAuth} from "../context/authContext"

const DataContext = createContext()

const DataProvider = ({children}) => {

    const {token} = useAuth();

    const initialData= {
        videoData: [],
        allCategories: [],
        likedVideos: [],
        watchLater: [],
        playlists: [],
        filters:{
            categories:[],
            search: ""
        }
    }
    const [state, dispatch] = useReducer(dataReducerFn, initialData)

    useEffect(()=>{
        (async () =>{
            let response = await GetData()
            if (response.status === 200 || response.status === 201){
                dispatch({type: "GET_ALL_VIDEO_DATA", payload: response.data.videos})
            }
        })()
    }, [token])
    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext)


export {useData, DataProvider}

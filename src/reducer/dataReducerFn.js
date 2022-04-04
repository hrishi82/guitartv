import { useEffect } from "react/cjs/react.production.min"

export const dataReducerFn = (state, action) =>{
    switch(action.type){
        case "GET_ALL_VIDEO_DATA":{

            const cat = action.payload.reduce((acc, curr)=>acc.includes(curr.categoryName)? acc: [...acc, curr.categoryName], [])

            return {...state, videoData: action.payload , allCategories: cat}
        }

        case "SET_LIKED_VIDEOS":{
            return {...state, likedVideos: action.payload}
        }
        default:
            return state
    }
}

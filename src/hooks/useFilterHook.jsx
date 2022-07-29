import { useData } from "../context/dataContext"
import {filterByGenre} from "../utils/utils"

export const useFilterHook = () =>{

    const {state} = useData()

    let data = [...state.videoData]

    data = filterByGenre(state, data)


    return {filteredData: data}

}

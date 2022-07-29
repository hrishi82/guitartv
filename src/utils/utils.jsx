

export const filterByGenre = (state, data) =>{
    let videoData = [...data]
    if (state.filters.genres.length !== 0){
        return videoData.filter(el=>state.filters.genres.includes(el.genre))
    }
    return videoData
}

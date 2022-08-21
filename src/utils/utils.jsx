import { faker } from "@faker-js/faker";

export const filterByGenre = (state, data) =>{
    let videoData = [...data]
    if (state.filters.genres.length !== 0){
        return videoData.filter(el=>state.filters.genres.includes(el.genre))
    }
    return videoData
}

export const createRandomUser = () => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  };
  
import { CategoryCard } from "./CategoryCard";
import { useData } from "../../../context/dataContext";
import { useState, useEffect } from "react";


export const Genres = () => {

    const {state} = useData()

    const [collectionData, setCollectionData] = useState([]);

    useEffect(() => {
      let newArr = state.allGenres.map((el) => {
        if (el === "Djent") {
          return {
            genre: el,
            genreCover:
              "https://res.cloudinary.com/dac2rwutk/image/upload/v1659124492/ff99b3f190ffcd49dc427ccb5b3b38948c6791e3_chqojy.jpg",
            genreDescription: "Headbangers, rejoice!",
          };
        }else if (el === "Rock") {
          return {
            genre: el,
            genreCover:
              "https://res.cloudinary.com/dac2rwutk/image/upload/v1659124490/ryan-ancill-vT8mC3T6faE-unsplash_xctlr5.jpg",
            genreDescription:
              "Whether it be Iron Maiden or Guns n Roses, we got you covered!",
          };
        } else if (el === "Blues") {
          return {
            genre: el,
            genreCover:
              "https://res.cloudinary.com/dac2rwutk/image/upload/v1659124491/jacek-dylag-71k2FbrLMjA-unsplash_tonjwc.jpg",
            genreDescription:
              "Slide in the world of blues with a wonderfully curated selection of tasteful music",
          };
        } else if (el === "Progressive") {
          return {
            genre: el,
            genreCover:
              "https://res.cloudinary.com/dac2rwutk/image/upload/v1659124492/Dream-Theater-13_sncnvq.jpg",
            genreDescription: "Technical difficulties",
          };
        } else if (el === "Math rock") {
          return {
            genre: el,
            genreCover:
              "https://res.cloudinary.com/dac2rwutk/image/upload/v1659124490/m_uhw4t4.jpg",
            genreDescription: "New kid in town, fancy kid in town",
          };
        }
      });
      setCollectionData(newArr);
    }, [state.allGenres]);

  return (
    <>
      <h1 className="category-topic-heading text-center">GENRES</h1>
      <section className="collection-cards-container">
        {collectionData.map(el => {return <CategoryCard key={el.genre} data={el}/>})}
      </section>
    </>
  );
};

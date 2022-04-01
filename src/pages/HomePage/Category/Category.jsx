import {CategoryCard} from "./CategoryCard"
export const Category = () =>{
    return(
        <>
        <h1 className="category-topic-heading">Categories</h1>
        <section className="collection-cards-container">
        <CategoryCard/>
        <CategoryCard/>
        </section>
        </>

    ) 
}

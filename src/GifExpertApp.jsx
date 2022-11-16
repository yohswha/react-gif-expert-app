import { useState } from "react";
import { AdCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["one Punch"]);

    const addNewCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);

    }
    return (
        <>
            {/* titulo*/}
            <div>GifExpertApp</div>

            {/* Imput*/}
            <AdCategory
                onNewCategory={(event) => addNewCategory(event)}
            />


            {/* Listado de Gifs*/}
                {categories.map(category => (
                    <GifGrid 
                    key={category} 
                    category={category}/>
                ))
                }
            {/* Gif item*/}


        </>
    );
}

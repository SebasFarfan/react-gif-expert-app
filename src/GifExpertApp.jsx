import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, 'Valorant']);
    // setCategories((cat) => [...cat, "Valorant"]);
    // console.log(categories);
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories])
  };

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory 
        // setCategories={setCategories} 
        onNewCategory={(value)=>onAddCategory(value)}
      />
      {/* Listas de Gif */}
      {/* item gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* <ol> */}
        {categories.map((category) => (
          // return <li key={category}>{category}</li>;
          <GifGrid key={category} category={category}/>
        ))}
      {/* </ol> */}
    </>
  );
};

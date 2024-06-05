import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);
  // console.log({images, isLoading});
  

  return (
    <>
      <h3>{category}</h3>
      {/* <p>Hola Mundo</p> */}
      {
        isLoading && (<h2>Cargando....</h2>)
      }
      <div className="card-grid">
        {/* {
          images.map(image =>(
            <li key={image.id}>{image.title}</li>

          ))
        } */}
        {images.map((image) => (
          <GifItem key={image.id} {...image}/>
        ))}
      </div>
    </>
  );
};

import React, {createContext, useState} from 'react';

export const ImageCacheContext = createContext();

export const ImageCacheProvider = (props) => {
    const [images, setImages] = useState([]);

  return (
    <ImageCacheContext.Provider value={[images,setImages]}>
      {props.children}
    </ImageCacheContext.Provider>
  );
};


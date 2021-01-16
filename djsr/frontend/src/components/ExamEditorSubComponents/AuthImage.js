import React, { useState, useEffect, useContext } from "react";
import axiosInstance from "../axiosAPI";
import { ImageCacheContext } from "./ImageCache";

const AuthImage = (props) => {
  const { src, ...rest } = props;
  const [images, setImages] = useContext(ImageCacheContext);
  const [blob, setBlob] = useState(null);
  useEffect(() => {
    // if (!!blob) {
    //     URL.revokeObjectURL(blob);
    // }
    if (!!images[src]) {
      setBlob(images[src]);
      return () => {};
    }
    axiosInstance
      .get(`/user/image/${src}`, {
        method: "GET",
        responseType: "blob",
      })
      .then((response) => {
        let imgBlob = new Blob([response.data]);
        const imgUrl = URL.createObjectURL(imgBlob);
        setImages((imgCache) => {
          imgCache[src] = imgUrl;
          return imgCache;
        });
        setBlob(imgUrl);
      });
    return () => {
      if (!!blob) {
        // console.log("revoking img",src)
        // URL.revokeObjectURL(blob);
      }
    };
  }, [src]);
  return !!blob ? (
    <div style={{ width: "100%", height: "5cm" }}>
      <img src={blob} {...rest} />
    </div>
  ) : (
    <div style={{ width: "100%", height: "5cm" }}></div>
  );
};

export default AuthImage;

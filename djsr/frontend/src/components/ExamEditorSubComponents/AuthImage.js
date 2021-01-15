import React, {useState,useEffect} from 'react';
import axiosInstance from "../axiosAPI";

const AuthImage = (props) => {
    const {src, ...rest}=props
    const [blob,setBlob]=useState(null);
    useEffect(()=>{
        if (!!blob) {
            URL.revokeObjectURL(blob);
        }
        axiosInstance.get(`/user/image/${src}`,{
        method: "GET",
        responseType: "blob",
      }).then((response)=>{
          let imgBlob = new Blob([response.data]);
          const imgUrl=URL.createObjectURL(imgBlob);
            setBlob(imgUrl)
        })
        return ()=>{if (!!blob) {
            console.log("revoking img",src)
            URL.revokeObjectURL(blob);
        }}
    },[src]);
    return (!!blob) ? (<img src={blob} {...rest}/> ) : null
};

export default AuthImage;
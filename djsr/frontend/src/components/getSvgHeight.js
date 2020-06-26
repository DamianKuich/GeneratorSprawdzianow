import xmlParser from "react-xml-parser"

export const getSvgSize = (svg)=>{
    const parsedSvg= xmlParser(svg);
    return {x:10,y:40}
}
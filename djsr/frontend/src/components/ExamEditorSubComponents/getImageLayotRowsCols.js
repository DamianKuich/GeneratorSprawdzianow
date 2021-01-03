const getColRows = (layout)=>{
    switch (layout){
        case "2x1":
            return {rows:1,cols:2};
        case "1x2":
            return {rows:2,cols:1};
        case "1x1":
            return {rows:1,cols:1}
        default:
            return {rows:1,cols:1}
    }
}

export default getColRows
import * as yup from"yup";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const SUPPORTED_FORMATS = [
      "image/jpg",
      "image/jpeg",
    "image/png",
    ];

export const imageValidationSchema= yup
        .mixed()
        .test(
          "fileSize",
          "File size error",
          value => value && value.size <= MAX_FILE_SIZE
        )
        .test(
          "fileFormat",
          "File format error",
          value => value && SUPPORTED_FORMATS.includes(value.type)
        )
const imageValidate= (image)=>{
    try {
        return imageValidationSchema.validateSync(image)
    }
    catch (e){
        return e
    }

}
export default imageValidate
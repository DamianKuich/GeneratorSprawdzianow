import { axiosInstanceNoAuth } from "./axiosAPI";

export const texToSvg = async (latex, onEnd) => {
  let r = await axiosInstanceNoAuth.post(`/latex/svg/`, {
    latex: latex,
  });
  let data = r.data;
  return data.join("");
};
export default texToSvg;

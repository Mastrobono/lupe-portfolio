import { AOSAnimations, AOSAttributes } from "@/types";

function useGetAosOpt(aosAnimation: AOSAnimations) {
  const aosOpt: AOSAttributes = {
    "data-aos": aosAnimation,
    "data-aos-easing": "linear",
    "data-aos-duration": "1000",
    "data-aos-offset": "-300px",
  };
  return aosOpt;
}

export default useGetAosOpt;

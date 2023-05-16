function useGetAosOpt(aosAnimation: string) {
  const aosOpt = {
    "data-aos": aosAnimation,
    "data-aos-easing": "linear",
    "data-aos-duration": "1000",
    "data-aos-offset": "-300px",
  };
  return aosOpt;
}

export default useGetAosOpt;

import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_MENU_API + resId);
    const jsonData = await data.json();

    setResInfo(jsonData?.data);
  };
  return resInfo;
};




export default useResturantMenu
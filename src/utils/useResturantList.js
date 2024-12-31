import { useEffect, useState } from "react";
import { SWIGGY_RESTURANT_API } from "./constants";

const useResturantList = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestursnt, setFilteredResturant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTURANT_API);

    const jsonData = await data.json();

    console.log(jsonData);

    const resData =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestraunt(resData);
    setFilteredResturant(resData);
  };

  return [listOfRestaurants, filteredRestursnt];
};

export default useResturantList;

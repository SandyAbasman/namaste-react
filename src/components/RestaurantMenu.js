import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const resInfo = useResturantMenu(id);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const toBeMapped =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  console.log(resInfo);

  return (
    <div>
      <h1 className="text-5xl text-red-500">
        {resInfo?.cards[2]?.card?.card?.info.name}
      </h1>
      <p>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")}</p>
      <p>{resInfo?.cards[2]?.card?.card?.info?.avgRating}</p>

      {toBeMapped.map((item) => (
        <div className="flex flex-row">
          <h2>{item?.card?.info?.name}</h2> - <p>{item?.card?.info?.price}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;

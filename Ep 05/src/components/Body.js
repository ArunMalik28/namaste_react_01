import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState } from "react";




const Body = () => {

    const [listOfRest, setListOfRest] = useState(resList);

    return (
        <div>
            <div className="c-search">
                <h3>search</h3>
                <button className="btn" onClick={
                    () => {
                        console.log("btn clicked");

                        resNewList = listOfRest.filter(
                            (res) => res.info.avgRating > 4.4
                        );

                        console.log(resList);

                        setListOfRest(resNewList);
                    }}
                >Top Rated Rst
                </button>
            </div>
            <div className="c-card-container">

                {listOfRest.map((restaurant) => (
                    <RestaurantCard key={ restaurant.info.id} resData={restaurant} />
                ))}

                
            </div>
        </div>
    );
}


export default Body;








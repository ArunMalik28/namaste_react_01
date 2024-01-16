import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    const [listOfRest, setListOfRest] = useState([]);

    const [tempListRest, setTempListRest] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        reactCall();
    }, []);

    reactCall = async () => {

        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4274252&lng=77.11178269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await response.json();

        setListOfRest(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        
        setTempListRest(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)

        console.log(json);
    }

    // if (listOfRest.length === 0)
    // {
    //     return <Shimmer /> ;
    // }

    return listOfRest.length === 0 ? <Shimmer /> : (
        <div>
            <div className="c-search">
                <h3>search</h3>

                <input type="text" className="search-box" value={searchText}
                    onChange={
                        (e) => {
                            setSearchText(e.target.value)
                        }
                    } 
                />
                
                <button onClick={() => {
                    const resSecondNewList = listOfRest.filter(
                        (res) => res.info.name.includes(searchText)
                    )

                    setTempListRest(resSecondNewList);
                    
                }}>Search</button>

                <button className="btn" onClick={
                    () => {
                        console.log("btn clicked");

                        resNewList = listOfRest.filter(
                            (res) => res.info.avgRating > 4.4
                        );

                        console.log(resList);

                        setTempListRest(resNewList);
                    }}
                >Top Rated Rst
                </button>
            </div>
            <div className="c-card-container">

                {tempListRest.map((restaurant) => (
                    <RestaurantCard key={ restaurant.info.id} resData={restaurant} />
                ))}
                
            </div>
        </div>
    );
}


export default Body;








import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {

    return (
        <div className="c-card">
            <img src={ CDN_URL + props.resData.info.cloudinaryImageId}></img>
            <div className="c-text">

                <h6>{props.resData.info.name}</h6>
                <h6>{props.resData.info.cuisines.join(",")}</h6>
                <h6>{props.resData.info.avgRating} stars</h6>
                <h6>{props.resData.info.locality + ", " + props.resData.info.areaName}</h6>
                
            </div>

        </div>
    )
}

export default RestaurantCard;


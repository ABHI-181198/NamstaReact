import { IMAGE_URL } from "../../utils/constants";

const RestaurantCard=(props)=>{
    //  const{img,resName,price,stars,time}=props;//Destructure The Props
    const{resData}=props;
    const{info}=resData;
    const dict={
        key:0,
        count:0,
    }
    let counterMapper=[];
    const arrayList=[1,1,1,2,3,44,3,3,3,5,6,7,8,9,10,4,7,8];

      console.log("OBJEct Kiitu Here",props,resData,info,info.sla?.deliveryTime,"--->>>>",props.variable);
      return (
      <div className="restaurant-card">
          <img 
          className="card-image"
          src={IMAGE_URL+info.cloudinaryImageId}>
          </img>
          <h3 className="res-name">{info.name}
          </h3>
          <h4>{info.cuisines.join(" , ")}</h4>
          <h4>{info.costForTwo}</h4>
          <h5>Rating : {info.avgRating}</h5>
          <h4>Delivery Time Estd: {info.sla?.deliveryTime} Mins</h4>
      </div>
      )
  }
  export default RestaurantCard;
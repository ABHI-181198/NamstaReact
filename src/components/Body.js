import RestaurantCard from "./RestaurantCard";
import {restaurants} from "../../utils/mockData";
import { useState } from "react";

const Body=()=>{
     const[topRatedList,setTopRatedList]=useState(restaurants);
     // restaurants are the List of Objects
     const handleClick=(e)=>{
           const filterList=restaurants.filter((elem)=>{
            const{info}=elem;
            const{avgRating}=info;
           // console.log("Inside Top RatedList",info,avgRating);
            return avgRating>4;})
            setTopRatedList(filterList);// Whenever the useState Variable updates React Render That Component
     }
    return (
    <div className="body">
        <div className="filter">
            <button 
            onClick={handleClick}
            className="filter-btn">
            Top Rated</button>
        </div>
        <div className="res-container">
        {topRatedList.map((elem)=>
        <RestaurantCard key={elem.info.id} resData={elem}/>
        )}          
        </div>
    </div>
    )
}
export default Body;







///////////////////////////////////////////////////////// My Logic to Implement the Same ///////////////////////////////////


// import RestaurantCard from "./RestaurantCard";
// import {restaurants} from "../../utils/mockData";
// import { useState } from "react";


// const Body=()=>{
//      const[topRated,setTopRated]=useState(true);
//      const topRatedList=restaurants.filter((elem)=>{
//         const{info}=elem;
//         const{avgRating}=info;
//         console.log("Inside Top RatedList",info,avgRating);
//         return avgRating>4;})
//         console.log("Inside On Click",topRated,topRatedList);
//      console.log(topRated);
//      const handleClick=(e)=>{
//             setTopRated(false);
//      }
//     return (
//     <div className="body">
//         <div className="filter">
//             <button 
//             onClick={handleClick}
//             className="filter-btn">
//             Top Rated</button>
//         </div>
//         <div className="res-container">
//         {topRated?restaurants.map((elem)=>
//             <RestaurantCard
//             key={elem.info.id}
//             resData={elem}/>
//             )
//                 :topRatedList.map((elem)=>
//                 <RestaurantCard
//                 key={elem.info.id}
//                 resData={elem}
//                 />) 
//         }                       
//         </div>
//     </div>
//     )
// }
// export default Body;
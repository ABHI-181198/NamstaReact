import RestaurantCard from "./RestaurantCard";
// import {restaurants} from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    console.log("Body render");
     const[topRatedList,setTopRatedList]=useState([]);
     const[search,setSearch]=useState("");
     const[noData,setNoData]=useState(false);
     const[filteredList,setFilteredList]=useState([]);
     // restaurants are the List of Objects
     const handleClick=(e)=>{
           const filterList=topRatedList.filter((elem)=>{
            const{info}=elem;
            const{avgRating}=info;
           // console.log("Inside Top RatedList",info,avgRating);
            return avgRating>4;})
            setTopRatedList(filterList);// Whenever the useState Variable updates React Render That Component
    }

    //  function Loading(){
    //     return(
    //         <>
    //         <div>
    //             Loading...!
    //         </div>
    //         </>
    //     )
    //  }

    const NoDataFound=()=>{
        return(
            <>
            <div>
                <h1>No Search Result Found</h1>
            </div>
            </>
        )
    }
     
     console.log("Before Use effect Called");
     // use Effect are always after 1st render of React and after useEffect again React Re-Render the component.
     useEffect(()=> {
        fetchData();
        console.log("Use Effect Is Called");
     },[])

     const hello="Hi All This Is Abhishek Singh Checking props Here!!!";

     console.log("After use effect called");
     fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/api/seo/getListing?lat=19.224272&lng=73.1484649")
        const json=await data.json();
        console.log("data",data,"json",json);
        console.log(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setTopRatedList(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     }
    return (
    topRatedList?.length===0?(<Shimmer/>):
    <div className="body">
        <div className="filter">
            <button 
            onClick={handleClick}
            className="filter-btn">
            Top Rated</button>
        </div>
        <div>
            <h1>Search Here!</h1>
            <input type={"text"} placeholder="search" onChange={(e)=>{
                
                console.log(e.target.value);
                setSearch(e.target.value.toLowerCase());
            }}>
            </input>
            <button onClick={()=>{
                const searchList=topRatedList.filter((elem)=>{
                    const{info}=elem;
                    const{name}=info;
                    const targetName=name.toLowerCase();
                    console.log("LowerCase",name,targetName,"Search=>>",search,"Condition",targetName.includes(search));
                    
                    return search!=="" && targetName.includes(search)
                })
                if(searchList.length>0)
                setFilteredList(searchList);
                else{
                    setNoData(true);
                }
                console.log("Search Filter",searchList);
            }}>Find</button>
        </div>
        <div className="res-container">
        {noData?<NoDataFound/>:filteredList.map((elem)=>
        <RestaurantCard variable={hello} key={elem.info.id} resData={elem}/>
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
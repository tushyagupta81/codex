import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios'

const CommunityCard = () => {
    const [communities, setCommunities] = useState([]);

    // useEffect(() => {
    //   axios.get("/api/communities")
    //     .then((res) => setCommunities(res.data))
    //     .catch((err) => console.error(err));
    // }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-md font-semibold">Your Communities</h3>
      {communities.map((community) => (
        <p key={community.id}>{community.name}</p>
      ))}
    </div>
  )
}

export default CommunityCard

// import { useState, useEffect } from "react";
// import { sampleCommunities } from "../data/sampleData"; // Adjust path as needed

// const CommunityCard = () => {
//   const [communities, setCommunities] = useState([]);

//   useEffect(() => {
//     // Simulating API call delay
//     setTimeout(() => {
//       setCommunities(sampleCommunities);
//     }, 500); // 500ms delay to mimic API response time
//   }, []);

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h3 className="text-md font-semibold">Your Communities</h3>
//       {communities.length > 0 ? (
//         communities.map((community) => (
//           <p key={community.id}>{community.name}</p>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default CommunityCard;


import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function TweetCard({ Tweet }) {
  const user = useContext(UserContext);

  return (
    <div className="TweetList">
      <div className="Tweet">
        <div className="Date">{Tweet.createdAt}</div>

        <div className="Message"> {Tweet.tweet}</div>

        <div className="Info">
          <img className="Pic" src={Tweet.avatar} alt="pics of User" />
          <p className="Name">{Tweet.name}</p>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;

// <div className="max-w-sm w-full lg:max-w-full lg:flex">

// <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
//   <div>

//     <div className="text-gray-900 font-medium text-xl mb-2">{Tweet.tweet}</div>
//   </div>

//   <div className="flex items-center">
//     <img
//       className="w-10 h-10 rounded-full mr-4"
//       src={Tweet.avatar}
//       alt="Avatar of User"
//     />

//     <div className="text-sm">
//       <p className="text-gray-900 leading-none">{Tweet.name}</p>
//       <p className="text-gray-600">{Tweet.createdAt}</p>
//     </div>
//   </div>
// </div>
// </div>

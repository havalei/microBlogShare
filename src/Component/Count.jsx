import React, { useContext, useEffect, useState } from "react";
import { TweetContext } from "../Context/TweetContext";
import { UserContext } from "../Context/UserContext";
import { CountContext } from "../Context/CountContext";

function Count() {
  const { tweetsList } = useContext(TweetContext);
  const { count, setCount } = useContext(CountContext);
  const { user } = useContext(UserContext);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const myList = tweetsList.filter((tweet) => tweet.name === user);
    setMyList(myList);
    setCount(myList.length);
  }, [tweetsList, user]);

  return <p> {count}</p>;
}

export default Count;

import React, { useEffect, useState, useReducer } from "react";
import TweetCard from "./TweetCard";
import { useContext } from "react";
import { TweetContext } from "../Context/TweetContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { ListReducer } from "../Reducer/ListOfTen.js";
import { LogedContext } from "../Context/LogedContext";
import Login from "./Login";

function TweetsList() {
  const { tweetsList, setTweetsList } = useContext(TweetContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedData, setSortedData] = useState([]);
  const [listOfTenTweets, dispatch] = useReducer(ListReducer, []);
  const { Loged } = useContext(LogedContext);

  async function fetchTweets() {
    try {
      const response = await fetch(
        `https://64cf7ff0ffcda80aff51ee5e.mockapi.io/tweet`,
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const sortedData = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setSortedData(sortedData);
        setTweetsList(sortedData);
      }
    } catch (error) {
      console.log("we have an error: ", error);
    }
  }

  useEffect(() => {
    fetchTweets(currentPage);

    const intervalToFetch = setInterval(() => fetchTweets(), 10000);

    return () => clearInterval(intervalToFetch);
  }, []);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
    const NewListOfTen = MakeaListOfTen(currentPage);
    listOfTenTweets.concat(NewListOfTen);
    console.log("list of Ten Tweets", listOfTenTweets);
  };

  const MakeaListOfTen = (currentPage) => {
    dispatch({
      type: "LISTOFTEN",
      payload: { currentPage: currentPage, allTweets: tweetsList },
    });
    console.log("list of ten : ", listOfTenTweets);
    console.log("length :", listOfTenTweets.length);
  };

  useEffect(() => {
    MakeaListOfTen(currentPage);
  }, [tweetsList]);

  return (
    <>
      {Loged && (
        <InfiniteScroll
          dataLength={listOfTenTweets.length}
          next={handleLoadMore}
          hasMore={true}
          // loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>This is it! Ouf! The world is now quite</b>
            </p>
          }
        >
          <div>
            {!!listOfTenTweets.length &&
              listOfTenTweets.map((tweet) => (
                <div className="m-1" key={tweet.id}>
                  <TweetCard Tweet={tweet} />
                </div>
              ))}
            {!listOfTenTweets.length && <div>No tweets to show</div>}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

export default TweetsList;

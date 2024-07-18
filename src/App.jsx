import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/Loader";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const getposts = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_start=${posts.length}`
    );

    data.length === 0 ? setHasMore(false) : "";

    setPosts([...posts, ...data]);
  };

  useEffect(() => {
    getposts();
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl mb-6 font-bold mt-10">
        React Infinite Scoll Component
      </h1>

      <ul>
        <InfiniteScroll
          dataLength={posts.length}
          next={getposts}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {posts.map((post, index) => (
            <li key={index} className="bg-gray-200 p-4 m-2">
              <b>{post.id}. </b> {post.title}
            </li>
          ))}
        </InfiniteScroll>
      </ul>
    </div>
  );
};

export default App;

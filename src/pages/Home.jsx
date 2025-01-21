import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import service from "../appwrite/config";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  // const [status, setStatus] = useState();
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    service.getPosts().then((uposts) => {
      console.log(uposts);
      if (uposts) {
        // setStatus("Wecome user");
        setPosts(uposts.documents);
        console.log("Posts : ", posts);
      }
    });
  }, [userData]);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                {/* {status} */}
                {userData ? "No posts" : "Login to read posts"}
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
              {/* <PostCard post={post} /> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;

import { useState, useEffect } from "react";
import Post from "./Post.jsx";
import classes from "./PostList.module.css";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:8080/posts");
        const resData = await response.json();
        setPosts(resData.posts);
      } catch (error) {
        console.log(error);
      }
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "post",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "#2f2fa1" }}>
          <h2>"New Post" 버튼을 눌러서 작성하세요.</h2>
          <p>감사합니다.</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "#2f2fa1" }}>
          <p>로딩하는 중...</p>
        </div>
      )}
    </>
  );
}

export default PostList;

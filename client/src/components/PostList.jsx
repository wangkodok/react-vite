import { useLoaderData } from "react-router-dom";
import Post from "./Post.jsx";
import classes from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();

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
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "#2f2fa1" }}>
          <h2>"New Post" 버튼을 눌러서 작성하세요.</h2>
          <p>감사합니다.</p>
        </div>
      )}
    </>
  );
}

export default PostList;

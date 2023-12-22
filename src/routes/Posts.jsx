import { Outlet } from "react-router-dom";
import PostList from "../components/PostList.jsx";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  try {
    // const response = await fetch("http://localhost:8080/posts");
    const response = await fetch(
      "https://react-server-wangkodok.koyeb.app/posts"
    );
    const resData = await response.json();
    return resData.posts;
  } catch (error) {
    console.log(error);
  }
}

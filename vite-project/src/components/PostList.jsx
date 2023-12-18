import Post from "./Post.jsx";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="홍길동" body="남자입니다." />
      <Post author="홍길순" body="여자입니다." />
    </ul>
  );
}

export default PostList;

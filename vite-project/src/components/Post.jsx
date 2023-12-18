import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className="post">
      <div
        style={{ color: "#2f2fa1", textAlign: "center" }}
        className={classes.post}
      >
        <h1>{props.author}</h1>
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default Post;

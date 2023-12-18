import classes from "./Post.module.css";

function Post(props) {
  return (
    <li className="post">
      <div style={{ color: "#2f2fa1" }} className={classes.post}>
        <h1 className={classes.author}>{props.author}</h1>
        <p className={classes.body}>{props.body}</p>
      </div>
    </li>
  );
}

export default Post;

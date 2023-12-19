import classes from "./Post.module.css";

function Post({ author, body }) {
  return (
    <li className="post">
      <div style={{ color: "#2f2fa1" }} className={classes.post}>
        <h1 className={classes.author}>{author}</h1>
        <p className={classes.body}>{body}</p>
      </div>
    </li>
  );
}

export default Post;

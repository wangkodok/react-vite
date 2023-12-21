import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post({ id, author, body }) {
  return (
    <li className="post">
      <Link to={id}>
        <div style={{ color: "#2f2fa1" }} className={classes.post}>
          <h1 className={classes.author}>{author}</h1>
          <p className={classes.body}>{body}</p>
        </div>
      </Link>
    </li>
  );
}

export default Post;

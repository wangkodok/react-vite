function Post(props) {
  return (
    <div>
      <h1>{props.author}</h1>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;

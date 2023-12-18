const names = ["홍길동", "홍길순"];

function Post() {
  const resultTitle = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <h1>{resultTitle}</h1>
      <p>설명</p>
    </div>
  );
}

export default Post;

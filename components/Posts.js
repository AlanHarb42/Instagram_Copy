import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "1",
      username: "AlanHarb",
      userImg:
        "https://pbs.twimg.com/profile_images/1456266135301607431/QcByil4d_400x400.jpg",
      img: "https://images.pexels.com/photos/301489/pexels-photo-301489.jpeg",
      caption: "This is a caption :)",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;

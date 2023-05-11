import React from "react";
import Post from "./Post";

const Publications = () => {
  const ANAKIN_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfhdf1CazcWlz0EB-5Km3N9mzdIIRpBIb0diapB_s_DrZGenq3xjkRLQ2vo8MbRGmiDbs&usqp=CAU";
  const RAY_IMAGE = "https://flipscreenblog.files.wordpress.com/2020/01/rey-star-wars-the-rise-of-skywalker-4k-39.jpg?w=1100";

  const LUKE_IMAGE = "https://uploads.spiritfanfiction.com/historias/capas/202203/imagine-luke-skywalker-23679605-060620220918.jpg";
  const LUKE_IMAGE_POST = "https://staticfanpage.akamaized.net/wp-content/uploads/sites/34/2022/12/Luke-Skywalker.jpg";

  const KENOBI_IMAGE = "https://s1.abcstatics.com/media/play/2020/04/03/228908-kxP--1200x630@abc.jpg";
  const KENOBI_IMAGE_POST = "https://assets-prd.ignimgs.com/2022/05/04/obi-wan-kenobi-button-1651679125683.jpg";

  return (
    <div>
      <Post
        author={{
          name: "Anakin Skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26 лют."}
        likes={887}
        shares={146}
        comments={482}
      />
      <Post
        author={{
          name: "Luke Skywalker",
          photo: LUKE_IMAGE,
          nickname: "@the_last_jedi",
        }}
        content="May the Force be with you"
        image={LUKE_IMAGE_POST}
        date={"4 трав."}
        likes={1435}
        shares={279}
        comments={752}
      />
      <Post
        author={{
          name: "Obi-Wan Kenobi",
          photo: KENOBI_IMAGE,
          nickname: "@hello_Kenobi",
        }}
        content="Hello there!"
        image ={KENOBI_IMAGE_POST}
        date={"10 квіт."}
        likes={213}
        shares={37}
        comments={105}
      />
    </div>
  );
};

export default Publications;

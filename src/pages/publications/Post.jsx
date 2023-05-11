import React from 'react';
import './post.css';

function Post(props) {
  return (
    <div className="post">
      <div className="author">
        <img className="author-img" src={props.author.photo} alt={props.author.name} />
        <h2>{props.author.name}</h2>
        <i className="fa-regular fa-circle-check"></i>
        <p>{props.author.nickname}</p>
        <p>{props.date}</p>
      </div>
      <div>
        <p>{props.content}</p>
        {props.image && <img className="post-img" src={props.image} alt="post" />}
      </div>
      <div className="interaction">
        <div>
          <i className="fa-regular fa-comment icon"></i>
          <span>{props.comments}</span>
        </div>
        <div>
          <i className="fa-regular fa-heart icon"></i>
          <span>{props.likes}</span>
        </div>
        <div>
          <i className="fa-solid fa-retweet icon"></i>
          <span>{props.shares}</span>
        </div>
        <div>
          <i className="fa-solid fa-download icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Post;

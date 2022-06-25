import { useEffect } from "react";
import { useState } from "react";

const Card = ({ searchItem }) => {
  const [comment, setComment] = useState("");

  const onSendComment = () => {
    window.localStorage.setItem(searchItem.id, comment);
  };

  useEffect(() => {
    const savedComment = window.localStorage.getItem(searchItem.id);
    setComment(savedComment);
  }, []);

  return (
    <div className="Card">
      <h3>{searchItem.name}</h3>
      <p>{searchItem.stargazers_count}</p>
      <input
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
        type={"Search"}
      />
      <button onClick={onSendComment}>Comment</button>
    </div>
  );
};

export default Card;

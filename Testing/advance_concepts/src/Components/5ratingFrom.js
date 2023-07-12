import React from "react";

export default function RatingForm() {
  const [score, setScore] = React.useState("10");
  const [comment, setComment] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (score < 5 && comment.length <= 10) {
      alert("Please leave a explained comment please");
      return;
    }

    setComment("");
    setScore("10");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>FeedBack form</h2>
        <div>
          <label htmlFor="Score">Score {score}</label>
          <input
            type="range"
            id="Score"
            name="Score"
            min="0"
            max="10"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );    
}

import React from "react";
import "./style.css";

function StoryPage() {
  return (
    <div>
      <input
        type="text"
        placeholder="Title..."
        value="Title"
        className="title-1"
      />
      <textarea className="text-area" placeholder="Write a story..." />
    </div>
  );
}
export default StoryPage;

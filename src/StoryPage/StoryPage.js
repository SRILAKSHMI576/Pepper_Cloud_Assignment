import React from "react";
import "./style.css";

function StoryPage() {
  return (
    <div>
      <p className="title-1">Title</p>
      <input type="file">Photo</input>
      <textarea className="text-area" placeholder="Write a story..." />
    </div>
  );
}
export default StoryPage;

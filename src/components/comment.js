import React, { useState } from "react";

function App() {
  const [comments, setComments] = useState([
    {
      username: "John Doe",
      time: "2 hours ago",
      text: "This is a great article. I learned a lot!",
    },
    {
      username: "Jane Smith",
      time: "1 hour ago",
      text: "Thanks for sharing this information.",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    // Send comment to backend API (example URL)
    const response = await fetch("https://your-backend-api.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Current User", // Replace with actual username
        text: newComment,
        time: new Date().toLocaleTimeString(), // Set the current time
      }),
    });

    if (response.ok) {
      const addedComment = await response.json();

      // Update the comment list
      setComments([...comments, addedComment]);
      setNewComment(""); // Clear the input field
    } else {
      console.error("Failed to submit comment");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 bg-white border-t-2 ">
      <div className="flex justify-between mt-1">
        <p className="font-bold text-2xl">Comments</p>
        <p>(4)</p>
      </div>
      <div className="border-b pb-4 mb-4 mt-2">
        <p className="text-gray-700 text-sm">
          Please follow our community guidelines when commenting.
        </p>
      </div>
      <div>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            username={comment.username}
            time={comment.time}
            text={comment.text}
          />
        ))}
      </div>
      <form onSubmit={handleCommentSubmit} className="mt-6">
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write a comment..."
          rows="4"
        />
        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send Comment
        </button>
      </form>
    </div>
  );
}

function Comment({ username, time, text }) {
  return (
    <div className="flex mb-4 p-4 gap-3 bg-gray-100 rounded-sm w-full">
      <div className="text-xl font-extrabold w-14 h-14 flex items-center justify-center rounded-lg shadow">
        P
      </div>

      <div className="flex justify-center h-full gap-2 flex-col mb-2 w-full">
        <div className="flex items-center justify-between w-full ">
          <h3 className="font-semibold text-md">{username}</h3>{" "}
          <span className="text-gray-500 text-sm">{time}</span>
        </div>
        <p className="text-gray-700 text-sm">{text}</p>
      </div>
    </div>
  );
}

export default App;

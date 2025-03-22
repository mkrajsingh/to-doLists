import React from "react";
import "./Sidebar.css"; // Make sure you create this CSS file

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__branding">
        <img
          src="https://img.icons8.com/ios-filled/50/8A2BE2/task.png"
          alt="Task Icon"
          className="sidebar__logo"
        />
        <h1 className="sidebar__title">TaskBuddy</h1>
        <p className="sidebar__tagline">
          Streamline your workflow and track progress effortlessly with our
          all-in-one task management app.
        </p>

        <button className="google-signin-btn">
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="Google Icon"
            className="google-signin-icon"
          />
          <span>Continue with Google</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

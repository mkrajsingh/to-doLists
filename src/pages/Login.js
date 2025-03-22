import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1 className="brand">📋 TaskBuddy</h1>
        <p className="tagline">
          Streamline your workflow and track progress effortlessly with our
          all-in-one task management app.
        </p>
        <button className="google-btn">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Logo"
            className="google-logo"
          />
          Continue with Google
        </button>
      </div>
      <div className="login-right">
        {/* Just an image preview to simulate task UI */}
        <img
          src="/task-preview.png"
          alt="Task Preview"
          className="task-preview"
        />
      </div>
    </div>
  );
};

// import React, { useState, useEffect } from "react";

function Stuff() {
  // const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  // const [formMessage, setFormMessage] = useState("");

  // useEffect(() => {
  //   document.body.classList.toggle("dark-mode", darkMode);
  //   localStorage.setItem("darkMode", darkMode);
  // }, [darkMode]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormMessage("Thank you for your submission!");
  // };

  return (
    <main>
      <h1>Welcome to My Website</h1>

      {/* <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" required></textarea>

        <button type="submit">Submit</button>
      </form>

      <p>{formMessage}</p> */}
    </main>
  );
}

export default Stuff;
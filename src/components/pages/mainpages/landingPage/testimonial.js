import React, { useEffect } from "react";
import "./landingPage.css";

const Testimonial = () => {
  useEffect(() => {
    const apiUrl = "https://api.github.com/users/hacktivist123/repos";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));

    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    return (
      <ul>
        <h2 className="list-head">Available Public Repositories</h2>
        {repos.map((repo) => {
          return (
            <li key={repo.id} className="list">
              <span className="repo-text">{repo.name} </span>
              <span className="repo-description">{repo.description}</span>
            </li>
          );
        })}
      </ul>
    );
  });
};

export default Testimonial;

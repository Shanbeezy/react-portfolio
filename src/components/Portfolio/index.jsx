import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Marvel Movie Ratings 🎬',
      description: 'JavaScript/CSS/HTML',
      link: "https://shanbeezy.github.io/marvel-movie-ratings/",
      repo: "https://github.com/Shanbeezy/marvel-movie-ratings"
    },
    {
      name: 'Anime Music Quiz 🎵',
      description: 'Full-Stack/Node/Express/Handlebars/MySQL',
      link: "https://evening-tor-85224-6a8158656676.herokuapp.com/",
      repo: "https://github.com/Shanbeezy/anime-music-quiz"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

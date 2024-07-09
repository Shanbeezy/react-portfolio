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
    {
      name:'Coding Quiz',
      description: 'HTML/CSS/JavaScript',
      link: 'https://shanbeezy.github.io/code-quiz/',
      repo: 'https://github.com/Shanbeezy/code-quiz'
    },
    {
      name:'Regex Tutorial',
      description: 'Gist',
      link: 'https://gist.github.com/Shanbeezy/c05418fa5681a7913d76ce6e04c60db3',
      repo: 'https://gist.github.com/Shanbeezy'
    },
    {
      name:'Tech Blog',
      description: 'CSS/JavaScript//Handlebars/MVC/Sequelize/Express',
      link: 'https://limitless-lowlands-50507-a158e7683238.herokuapp.com/',
      repo: 'https://github.com/Shanbeezy/tech-blog'
    },
    {
      name:'Weather Dashboard',
      description: 'HTML/CSS/API',
      link: 'https://shanbeezy.github.io/weather-dashboard/',
      repo: 'https://github.com/Shanbeezy/weather-dashboard'
    },
    {
      name:'Work Day Scheduler',
      description: 'HTML/CSS/jQuery',
      link: 'https://shanbeezy.github.io/work_day_scheduler/',
      repo: 'https://github.com/Shanbeezy/work_day_scheduler'
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

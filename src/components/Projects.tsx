const Projects = () => {
  const projects = [
    {
      title: "Communion Hub",
      description: "A comprehensive MERN Stack web application designed for community management and communication. Features real-time messaging, user authentication, and administrative controls.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      category: "Web Application",
      status: "Completed",
      detailsLink: "https://github.com/monalsutar/CommunionHub-MERN",   // 👈 full details
      repoLink: "https://github.com/monalsutar/CommunionHub-MERN"    // 👈 source code or another link
    },
    {
      title: "Bill Desk",
      description: "A mobile application developed with Flutter for managing bills and expenses. Includes features for bill tracking, payment reminders, and financial analytics.",
      techStack: ["Flutter", "Dart", "Firebase"],
      category: "Mobile Application",
      status: "Completed",
      detailsLink: "https://youtu.be/FxK-z2N-MYk",   // 👈 full details
      repoLink: "https://github.com/monalsutar/BillDesk"
    },
    {
      title: "Keeper Notes Website",
      description: "The Keeper App is a React-based note-taking application inspired by Google Keep, allowing users to add, view, and delete notes. It features a clean and responsive UI for managing daily tasks and reminders.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      category: "Web Application",
      status: "Completed",
      detailsLink: "https://youtu.be/YV6HwWc2NCQ?si=dY92rW7ntn7hVLTh",   // 👈 full details
      repoLink: "https://github.com/monalsutar/Keeper"
    },
    {
      title: "E-Waste Management Website",
      description: "An environmental initiative web platform for managing electronic waste. Provides information on proper e-waste disposal and connects users with recycling centers.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "Web Application",
      status: "Completed",
      detailsLink: "https://monalsutar.github.io/Website-for-E-Waste-Management/",   // 👈 full details
      repoLink: "https://github.com/monalsutar/Website-for-E-Waste-Management"
    },
    {
      title: "Student Registration System",
      description: "The Student Registration and Login Project is a MERN stack app with React frontend and MongoDB backend. It supports secure student registration, login, form validation, and authentication.",
      techStack: ["MongoDB", "Express.js", "Node.js"],
      category: "Web Application",
      status: "Completed",
      detailsLink: "https://github.com/monalsutar/Login_Form_MongoDB",   // 👈 full details
      repoLink: "https://github.com/monalsutar/Login_Form_MongoDB"
    }
  ];

  // 🎮 New Section: Games Developed using AI
  const games = [
    {
      title: "Car Game",
      
      image: "https://static.vecteezy.com/system/resources/previews/016/772/817/non_2x/formula-racing-sport-car-reach-on-race-circuit-the-finish-line-cartoon-illustration-to-win-the-championship-in-flat-style-hand-drawn-templates-design-vector.jpg", // 👉 put your image in public/images/
      playLink: "https://car-game-w2dz.onrender.com", // your deployed game link
    },
    {
      title: "Memory Game",
      
      image: "https://miro.medium.com/0*kQtZdJ365jG563Yg.jpg",
      playLink: "https://memory-game-6y9f.onrender.com", // replace with hosted link if deployed
    },
    {
      title: "Tic Tac Toe",
      
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqtJGwEXzcpvMxCZn-93XnnwUbp4iIkrl2w&s",
      playLink: "https://tic-tac-toe-game-monal.onrender.com", // replace with hosted link if deployed
    },
  ];

  const getTechStackColor = (tech: string) => {
    const colorMap: { [key: string]: string } = {
      'MongoDB': 'bg-green-500/10 text-green-400 border-green-500/20',
      'Express.js': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'React.js': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'Node.js': 'bg-green-600/10 text-green-400 border-green-600/20',

      'Flutter': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      'Dart': 'bg-blue-600/10 text-blue-400 border-blue-600/20',
      'Firebase': 'bg-orange-500/10 text-orange-400 border-orange-500/20',

      'HTML': 'bg-red-500/10 text-red-400 border-red-500/20',
      'CSS': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'JavaScript': 'bg-yellow-600/10 text-yellow-400 border-yellow-600/20',
      'PHP': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',

    };
    return colorMap[tech] || 'bg-primary/10 text-primary border-primary/20';
  };

  return (
    <section id="projects" className="section bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development,
            mobile applications, and innovative problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-professional group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 ${getTechStackColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Actions 
              <div className="flex gap-3 pt-4 border-t border-border">
                <button className="flex-1 py-2 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium">
                  View Details
                </button>
                <button className="p-2 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>

                */}

              {/* Project Actions */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={project.detailsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium text-center"
                >
                  View Details
                </a>

                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>



            </div>
          ))}
        </div>


        {/* 🎮 Games Section */}
        <div className="text-center mt-20 mb-12">
          <h2 className="heading-lg mb-6">Games Developed using AI</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of AI-powered games I’ve built to combine creativity,
            logic, and fun interactive experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="card-professional group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Game Image */}
              <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Game Title */}
              <h3 className="text-xl font-semibold text-center group-hover:text-primary transition-colors duration-300 mb-5">
                {game.title}
              </h3>

              

              {/* Play Button */}
              <a
                href={game.playLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium text-center"
              >
                🎮 Play Now
              </a>
            </div>
          ))}
        </div>


        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/monalsutar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
const Experience = () => {
  const experiences = [
    {
      title: "MERN Developer Intern",
      company: "CodeXLabz Technologies",
      type: "Remote",
      period: "January 2025 - June 2025",
      description: "Working on full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      current: false
    },
    {
      title: "Android Developer",
      company: "Google Developers Students Club (GDSC RIT)",
      type: "On-site",
      period: "2023 - 2025",
      description: "Leading mobile app development initiatives and mentoring fellow students in Android development. Organizing workshops and technical events for the developer community.",
      technologies: ["Android SDK", "Java", "Kotlin", "Firebase"],
      current: false
    },
    {
      title: "Web Development Intern",
      company: "TechnoHacks",
      type: "Remote",
      period: "September 2023 - October 2023",
      description: "Developed responsive web applications using modern frontend technologies. Worked on user interface design and implemented interactive features.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      current: false
    },
    {
      title: "Android Developer Intern",
      company: "AICTE & CodeClause",
      type: "Remote",
      period: "2023",
      description: "Contributed to Android application development projects. Gained hands-on experience with mobile app architecture and user experience design.",
      technologies: ["Android Studio", "Java", "XML"],
      current: false
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Professional journey through internships and roles that have shaped my expertise 
            in software development and technology leadership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="card-professional ml-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>{exp.company}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm bg-primary/10 px-2 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                    {exp.current && (
                      <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-xs font-semibold border border-green-500/20">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="mt-16">
          <h3 className="heading-sm text-center mb-8">Leadership & Community</h3>
          <div className="max-w-2xl mx-auto">
            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                CSESA Core Committee Coordinator
              </h4>
              <p className="text-muted-foreground">
                Leading technical initiatives and coordinating events for the Computer Science and Engineering Student Association.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "RIT, Islampur",
      period: "2022-2025",
      score: "8.66 CPI",
      current: false
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "BSIET, Kolhapur",
      period: "2019–2022",
      score: "90.69%",
      current: false
    },
    {
      degree: "SSC",
      institution: "Usharaje High School, Kolhapur",
      period: "2019",
      score: "90%",
      current: false
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/monal-gajanan-sutar-13a9a6235",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/monalsutar",
      icon: "github"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@programming_the_life_monal?si=TsnhFVsMXipXAHOH",
      icon: "youtube"
    }
  ];

  return (
    <section id="about" className="section bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="card-professional">
              <h3 className="heading-sm mb-4 text-primary">Hello! I'm Monal</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A passionate Computer Science student with a keen interest in full-stack development 
                and mobile application development. I specialize in the MERN stack and Application development, 
                creating innovative solutions that bridge the gap between ideas and implementation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in computer science principles and hands-on experience 
                in various technologies, I'm always eager to take on new challenges and contribute 
                to meaningful projects that make a difference.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon === 'linkedin' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {link.icon === 'github' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {link.icon === 'youtube' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="heading-sm mb-8 text-center">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card-professional relative">
                  {edu.current && (
                    <div className="absolute -top-2 -right-2 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Current
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      {edu.score}
                    </span>
                  </div>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["C", "C++", "Java", "HTML", "CSS", "JavaScript"],
      color: "primary"
    },
    {
      category: "Frameworks & Tools",
      skills: ["Android SDK", "Flutter", "Xcode", "Android Studio", "Node.js", "React.js", "Next.js"],
      color: "accent"
    },
    {
      category: "Databases",
      skills: ["SQL", "Firebase", "MongoDB"],
      color: "primary"
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
            that I use to build innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card-professional">
              <div className="mb-6">
                <h3 className="heading-sm mb-2 text-center">
                  {category.category}
                </h3>
                <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag"
                    style={{
                      animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="heading-sm text-center mb-8">Certifications</h3>
          <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-8">


            <div className="card-professional text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Mastering Data Structures and Algorithms using C and C++
              </h4>
              <p className="text-muted-foreground text-sm">Udemy Certification</p>
            </div>

           


            <div className="card-professional text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Next.js: Creating and Hosting a Full-Stack Site
              </h4>
              <p className="text-muted-foreground text-sm">LinkedIn Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
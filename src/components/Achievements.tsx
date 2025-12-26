const Achievements = () => {
  const achievements = [
    {
      title: "1st Prize - Web Designing",
      organization: "Bharati Vidyapeeth COE",
      type: "Competition",
      icon: "trophy",
      color: "text-yellow-400"
    },
    {
      title: "1st Prize - Art Gallery Essay Competition",
      organization: "ISTE RIT",
      type: "Writing Competition",
      icon: "trophy",
      color: "text-yellow-400"
    },
    {
      title: "10th Rank - Webnatic",
      organization: "Walchand College, Sangli",
      type: "Technical Event",
      icon: "medal",
      color: "text-orange-400"
    },
    {
      title: "50 Days Badge - Leetcode",
      organization: "LeetCode Platform",
      type: "Coding Achievement",
      icon: "code",
      color: "text-green-400"
    },
    {
      title: "100 Days Badge - Leetcode",
      organization: "LeetCode Platform",
      type: "Coding Achievement",
      icon: "code",
      color: "text-red-400"
    },
    {
      title: "July 2025 Badge - Leetcode",
      organization: "LeetCode Platform",
      type: "Coding Achievement",
      icon: "star",
      color: "text-yellow-400"
    },
    {
      title: "Oct 2025 Badge - Leetcode",
      organization: "LeetCode Platform",
      type: "Coding Achievement",
      icon: "star",
      color: "text-yellow-400"
    },
    {
      title: "Beyond Resume",
      organization: "KIT College, Kolhapur",
      type: "Recognition",
      icon: "star",
      color: "text-blue-400"
    },
    {
      title: "Code Crush Expert",
      organization: "Walchand College",
      type: "Technical Excellence",
      icon: "lightning",
      color: "text-purple-400"
    },
    {
      title: "Code Spark Expert",
      organization: "DKTE, Ichalkaranji",
      type: "Programming Contest",
      icon: "lightning",
      color: "text-purple-400"
    }
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'trophy':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      case 'medal':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      case 'code':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'star':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      case 'lightning':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
    }
  };

  return (
    <section id="achievements" className="section bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Achievements & Recognition</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Recognition and awards that highlight my commitment to excellence 
            in academics, programming, and technical competitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="card-professional group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full bg-secondary group-hover:scale-110 transition-transform duration-300 ${achievement.color}`}>
                  {getIcon(achievement.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-1">
                    {achievement.organization}
                  </p>
                  <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                    {achievement.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground text-sm">Participations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">160+</div>
              <div className="text-muted-foreground text-sm">Days Coding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">275+</div>
              <div className="text-muted-foreground text-sm">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">3+</div>
              <div className="text-muted-foreground text-sm">Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
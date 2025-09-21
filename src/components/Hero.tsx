import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="section-container text-center z-10">
        <div className="fade-in">
          <div className="mb-6">
            <h1 className="heading-xl mb-4 animate-float">
              Monal Gajanan Sutar
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-delay">
              <span className="text-primary font-semibold">Full Stack Developer</span> | 
              <span className="text-accent font-semibold"> MERN Enthusiast</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 fade-in-delay">
            Passionate Computer Science student crafting innovative digital solutions 
            with modern technologies. Specialized in full-stack development and mobile applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-delay">
            <Button 
              className="btn-primary animate-glow"
              onClick={() => {
                // Download resume functionality
                const link = document.createElement('a');
                link.href = '/public/Monal_Sutar_Resume.pdf'; // You would add the actual resume file
                link.download = 'Monal_Sutar_Resume.pdf';
                link.click();
              }}
            >
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-primary/20 text-6xl animate-float">
          &lt;/&gt;
        </div>
        <div className="absolute bottom-20 right-10 text-accent/20 text-4xl animate-float" style={{animationDelay: '1s'}}>
          { }
        </div>
        <div className="absolute top-1/2 right-20 text-primary/10 text-3xl animate-float" style={{animationDelay: '2s'}}>
          [ ]
        </div>
      </div>
    </section>
  );
};

export default Hero;
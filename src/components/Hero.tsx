
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div 
          ref={elementRef}
          className={`space-y-5 max-w-3xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <p className="text-portfolio-teal font-mono">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-navy dark:text-portfolio-lightestSlate">
            Barshan Majumdar.
          </h1>
          <p className="text-portfolio-slate max-w-lg text-lg mt-5 dark:text-portfolio-lightSlate">
            I'm a Computer Science and Engineering (AI) student passionate about artificial intelligence,
            machine learning, and building exceptional digital experiences. Currently, I'm focused on 
            expanding my knowledge in AI and its real-world applications.
          </p>
          <div className="pt-5">
            <Button 
              asChild
              className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal px-7 py-5 rounded"
            >
              <a href="#projects">Check out my work!</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

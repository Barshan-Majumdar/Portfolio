
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projectsList = [
  {
    title: "AI Resume Checker",
    description: "An AI-powered tool that analyzes and provides feedback on resumes. It helps job seekers improve their resumes by identifying areas for enhancement and suggesting improvements.",
    tags: ["React", "AI", "Resume Analysis", "Netlify"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
    github: "https://github.com/Barshan-Majumdar",
    external: "https://resumechecker-barshan.netlify.app/",
  },
  {
    title: "Codechatter",
    description: "A collaborative platform for developers to discuss code, share snippets, and solve programming challenges together in real-time.",
    tags: ["React", "Lovable", "Real-time", "Collaboration"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    github: "https://github.com/Barshan-Majumdar",
    external: "https://project-codechatter.lovable.app/",
  },
];

const Projects = () => {
  const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: btnRef, isVisible: btnVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="projects" className="content-container dark:bg-gray-900">
      <h2 
        ref={headingRef}
        className={`section-heading scroll-animate fade-in-up ${headingVisible ? 'visible' : ''}`}
      >
        <span className="number-heading">03.</span> Projects
      </h2>

      <div className="grid gap-20">
        {projectsList.map((project, i) => {
          const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
          
          return (
            <div 
              key={project.title} 
              ref={elementRef}
              className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center scroll-animate ${i % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} ${
                i % 2 !== 0 ? 'md:text-right' : ''
              } ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Project Content */}
              <div className={`md:col-span-7 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                <p className="font-mono text-portfolio-teal mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-portfolio-navy dark:text-gray-100 mb-4">{project.title}</h3>
                
                <Card className="bg-gray-50 dark:bg-gray-800 shadow-md p-6 mb-5 z-10 relative">
                  <CardContent className="p-0 text-portfolio-slate dark:text-gray-300">
                    {project.description}
                  </CardContent>
                </Card>
                
                <div className={`flex flex-wrap gap-2 mb-6 ${
                  i % 2 !== 0 ? 'md:justify-end' : ''
                }`}>
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono text-portfolio-slate dark:text-gray-400"
                      style={{ 
                        transitionDelay: isVisible ? `${(i * 100) + (tagIndex * 50)}ms` : '0ms',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`flex gap-4 ${
                  i % 2 !== 0 ? 'md:justify-end' : ''
                }`}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-slate dark:text-gray-400 hover:text-portfolio-teal transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.external} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-slate dark:text-gray-400 hover:text-portfolio-teal transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              {/* Project Image */}
              <div className={`relative md:col-span-5 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <a 
                  href={project.external} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block relative group"
                >
                  <div className="absolute inset-0 bg-portfolio-teal/30 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded shadow-lg"
                    style={{ 
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                      transition: 'opacity 0.5s ease, transform 0.5s ease',
                      transitionDelay: `${i * 100}ms`
                    }}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      
      <div 
        ref={btnRef}
        className={`text-center mt-16 scroll-animate fade-in-up ${btnVisible ? 'visible' : ''}`}
      >
        <Button 
          asChild
          className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal font-mono"
        >
          <a href="https://github.com/Barshan-Majumdar" target="_blank" rel="noopener noreferrer">
            View More Projects
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;

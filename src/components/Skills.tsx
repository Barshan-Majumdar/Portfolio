import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "Python", "HTML", "JavaScript", "TypeScript"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Adobe Photoshop", "Canva", "Remini", "Pixel Lab"]
  },
];

const Skills = () => {
  const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  
  return (
    <section id="skills" className="content-container bg-gray-50 dark:bg-gray-800">
      <h2 
        ref={headingRef}
        className={`section-heading scroll-animate fade-in-up ${headingVisible ? 'visible' : ''}`}
      >
        <span className="number-heading">02.</span> Skills
      </h2>

      <div 
        ref={cardsRef}
        className={`grid md:grid-cols-3 gap-6`}
      >
        {skillCategories.map((category, index) => (
          <Card 
            key={category.title} 
            className={`overflow-hidden border-portfolio-teal/20 hover:shadow-md transition-shadow scroll-animate ${index === 0 ? 'fade-in-left' : index === 1 ? 'fade-in-up' : 'fade-in-right'} ${cardsVisible ? 'visible' : ''} dark:bg-gray-700 dark:border-gray-600`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="bg-portfolio-navy dark:bg-portfolio-teal h-1.5"></div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-navy dark:text-gray-100">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={skill}
                    className={`bg-gray-100 dark:bg-gray-600 text-portfolio-slate dark:text-gray-200 px-3 py-1 text-sm rounded-full scroll-animate scale-in ${cardsVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${(index * 100) + (i * 50)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;

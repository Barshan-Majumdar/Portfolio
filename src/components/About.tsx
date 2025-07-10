
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Book, Briefcase, School } from 'lucide-react';

const About = () => {
  const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="content-container">
      <h2 
        ref={headingRef}
        className={`section-heading scroll-animate fade-in-up ${headingVisible ? 'visible' : ''}`}
      >
        <span className="number-heading">01.</span> About Me
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 items-start mb-16">
        <div 
          ref={contentRef}
          className={`md:col-span-2 text-portfolio-slate space-y-4 scroll-animate fade-in-left ${contentVisible ? 'visible' : ''}`}
        >
          <p>
            Hello! I'm Barshan, a passionate Computer Science and Engineering student specializing in Artificial Intelligence.
            I'm 19 years old, from Barasat, West Bengal, India, and I love exploring the intersection of technology and creativity.
          </p>
          <p>
            Currently pursuing my B.Tech at Brainware University (2024-2028), I'm particularly interested in AI, Machine Learning, 
            Deep Learning, and Image Processing. When I'm not coding, you can find me enjoying photography, biking adventures, 
            or exploring car culture.
          </p>
          
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-4">
            <div className="stagger-1 scroll-animate fade-in-up visible">
              <h3 className="font-bold text-portfolio-navy dark:text-portfolio-lightestSlate">Nationality</h3>
              <p>Indian</p>
            </div>
            <div className="stagger-2 scroll-animate fade-in-up visible">
              <h3 className="font-bold text-portfolio-navy dark:text-portfolio-lightestSlate">Location</h3>
              <p>Barasat, West Bengal, India</p>
            </div>
            <div className="stagger-3 scroll-animate fade-in-up visible">
              <h3 className="font-bold text-portfolio-navy dark:text-portfolio-lightestSlate">Languages</h3>
              <p>English, Bengali, Hindi</p>
            </div>
            <div className="stagger-4 scroll-animate fade-in-up visible">
              <h3 className="font-bold text-portfolio-navy dark:text-portfolio-lightestSlate">Fun Fact</h3>
              <p>Loves long rides and snapping cool shots on the road 📸🏍️</p>
            </div>
          </div>
          
          <p className="pt-2">
            Here are a few technologies I've been working with recently:
          </p>
          
          <div className="grid grid-cols-2 gap-2 pt-2">
            <ul className="space-y-2">
              {['Python', 'C', 'HTML'].map((item, i) => (
                <li key={item} className={`flex items-start scroll-animate fade-in-left stagger-${i+1} visible`}>
                  <span className="text-portfolio-teal mr-2">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {['GitHub', 'VS Code', 'TensorFlow (beginner)'].map((item, i) => (
                <li key={item} className={`flex items-start scroll-animate fade-in-left stagger-${i+4} visible`}>
                  <span className="text-portfolio-teal mr-2">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div 
          ref={imageRef}
          className={`relative group scroll-animate fade-in-right ${imageVisible ? 'visible' : ''}`}
        >
          <div className="relative rounded-md overflow-hidden bg-portfolio-teal/20 w-full max-w-xs mx-auto">
            <div className="w-full h-full absolute top-0 left-0 bg-portfolio-teal/10 z-10 group-hover:bg-transparent transition-colors"></div>
            <img
              src="/lovable-uploads/60f4765f-e4ba-44c8-9948-9b9448f01f7c.png"
              alt="Barshan Majumdar"
              className="w-full object-cover z-0"
            />
          </div>
          <div className="absolute -inset-0.5 rounded-md bg-portfolio-teal/20 opacity-0 group-hover:opacity-100 -z-10 transition-opacity transform translate-x-2 translate-y-2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

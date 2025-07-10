import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation<HTMLFormElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/manjryvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("❌ Message failed. Check your Formspree settings.");
      }
    } catch (error) {
      console.error("Formspree error:", error);
      toast.error("❌ Something went wrong. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="content-container bg-gray-50 dark:bg-gray-800">
      <h2
        ref={headingRef}
        className={`section-heading scroll-animate fade-in-up ${headingVisible ? 'visible' : ''}`}
      >
        <span className="number-heading">04.</span> Contact
      </h2>

      <div
        ref={introRef}
        className={`max-w-xl mx-auto text-center mb-10 scroll-animate fade-in-up ${introVisible ? 'visible' : ''}`}
      >
        <h3 className="text-2xl font-bold text-portfolio-navy dark:text-gray-100 mb-4">Get In Touch</h3>
        <p className="text-portfolio-slate dark:text-gray-300">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`space-y-6 scroll-animate fade-in-up ${formVisible ? 'visible' : ''}`}
        >
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-portfolio-slate/30 focus:border-portfolio-teal focus:ring-portfolio-teal/20 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              style={{ transitionDelay: formVisible ? '100ms' : '0ms' }}
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-portfolio-slate/30 focus:border-portfolio-teal focus:ring-portfolio-teal/20 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              style={{ transitionDelay: formVisible ? '200ms' : '0ms' }}
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="border-portfolio-slate/30 focus:border-portfolio-teal focus:ring-portfolio-teal/20 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              style={{ transitionDelay: formVisible ? '300ms' : '0ms' }}
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal px-8 py-6 dark:hover:bg-portfolio-teal/20"
              style={{
                transitionDelay: formVisible ? '400ms' : '0ms',
                opacity: formVisible ? 1 : 0,
                transform: formVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

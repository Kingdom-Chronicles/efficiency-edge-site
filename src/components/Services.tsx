import React from 'react';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Business Process Automation with AI Agents',
    description:
      'Streamline and optimize your workflows by integrating intelligent AI agents that execute tasks efficiently and autonomously.',
  },
  {
    title: 'SMS Sending Services',
    description:
      'Reach your customers instantly with reliable SMS communication solutions that enhance engagement and marketing outreach.',
  },
  {
    title: 'Mobile and Web Application Development',
    description:
      'Custom-built mobile and web apps tailored to your business needs with cutting-edge technology and scalable solutions.',
  },
  {
    title: 'Software Development Learning',
    description:
      'Empower yourself or your team with expert-led classes designed to teach software development skills and industry best practices.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="container" aria-label="Services we offer">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map(({ title, description }) => (
          <article className="service-card" key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

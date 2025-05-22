import React from 'react';
import masiko from '../assets/masiko.jpg';
import mbahe from '../assets/mbahe.jpg';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Timothy Masiko',
    role: 'Chief AI Strategist',
    photo: masiko,
  },
  {
    name: 'Anthony Isingoma',
    role: 'Lead Software Engineer',
    photo: mbahe,
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="container" aria-label="About our team">
      <h2>About Us</h2>
      <div className="team" role="list">
        {teamMembers.map(({ name, role, photo }) => (
          <div
            className="team-member"
            role="listitem"
            tabIndex={0}
            key={name}
            aria-label={`${name}, ${role}`}
          >
            <div className="member-photo" aria-label={`Photo of ${name}`}>
              <img src={photo} alt={name} />
            </div>
            <p className="member-name">{name}</p>
            <p className="member-role">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

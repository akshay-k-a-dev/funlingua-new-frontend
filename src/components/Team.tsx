import React from 'react';
import { Linkedin, Users, Award, Lightbulb } from 'lucide-react';

const Team = () => {
  const founders = [
    {
      name: "Biju Simon",
      role: "Social Innovator & Founder",
      description: "Visionary leader dedicated to transforming language education through innovative, inclusive approaches.",
      image: "https://github.com/akshay-k-a-dev/funlingua-new-frontend/blob/main/src/assets/Biju%20Simon.JPG?raw=true"
    },
    {
      name: "Immanuel Ditto Lopez",
      role: "Financial Strategist & CFO",
      description: "Strategic financial leader ensuring sustainable growth and accessible education for all learners.",
      image: "https://github.com/akshay-k-a-dev/funlingua-new-frontend/blob/main/src/assets/ImmanuelDitto.jpg?raw=true"
    }
  ];

  const mentors = [
    {
      name: "Joseph Fernandez",
      role: "Strategic Advisor",
      credentials: "Author, Global Consultant",
      expertise: "Strategic planning and international education systems",
      image: "https://github.com/akshay-k-a-dev/funlingua-new-frontend/blob/main/src/assets/Joseph%20Fernandez.jpg?raw=true"
    },
    {
      name: "Sabriye Tenberken",
      role: "Empowerment Leader",
      credentials: "Co-founder of kanthari",
      expertise: "Blind empowerment and inclusive education",
      image: "https://raw.githubusercontent.com/akshay-k-a-dev/funlingua-new-frontend/refs/heads/main/src/assets/Sabriye%20Tenberken.webp"
    },
    {
      name: "Satya Kedar Illa",
      role: "Innovation Mentor",
      credentials: "CEO of ASIA, Ecosystem Builder",
      expertise: "Innovation mentoring and ecosystem development",
      image: "https://github.com/akshay-k-a-dev/funlingua-new-frontend/blob/main/src/assets/Satya%20Illa.jpg?raw=true"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Team & Mentors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals driving FunLingua's mission to transform language learning 
            and empower communities across India.
          </p>
        </div>

        {/* Founders */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="relative mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-orange-500/20 to-purple-600/20 group-hover:opacity-0 transition-opacity"></div>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{founder.name}</h4>
                <p className="text-orange-600 font-semibold mb-4">{founder.role}</p>
                <p className="text-gray-600 leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mentors */}
        <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mentors</h3>
            <p className="text-lg text-white/90">Guided by industry leaders and change-makers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all text-center group">
                <div className="relative mb-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white/20 p-2 rounded-full">
                    <Award className="text-white" size={16} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{mentor.name}</h4>
                <p className="text-orange-200 font-medium mb-2">{mentor.role}</p>
                <p className="text-white/80 text-sm mb-3">{mentor.credentials}</p>
                <p className="text-white/70 text-sm">{mentor.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-8 md:p-12 rounded-2xl border border-orange-200">
            <Lightbulb className="text-orange-500 mx-auto mb-6" size={48} />
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              To empower a confident, English-speaking India where language is a bridge to identity and opportunity, 
              breaking barriers and building bridges for every learner.
            </p>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-dashed border-gray-300 hover:border-orange-500 transition-colors">
            <Users className="text-gray-400 mx-auto mb-4" size={48} />
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Join Our Mission</h4>
            <p className="text-gray-600 mb-6">
              We're looking for passionate language trainers, marketing executives, and creative content creators.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all">
              View Careers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

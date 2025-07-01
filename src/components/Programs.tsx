import React from 'react';
import { Clock, Users, MapPin, Video, Bus, Presentation } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Clock,
      title: "30-Hour Experiential Training",
      description: "Based on the Manglish-Broken English-English model with activity-based learning.",
      features: ["Drama & Roleplay", "Buddy Walks", "Public Functions", "Real-world Tasks"]
    },
    {
      icon: Users,
      title: "Train-the-Trainer",
      description: "Empower local volunteers, homemakers, and students to become confident trainers.",
      features: ["Volunteer Training", "Community Leaders", "Skill Development", "Certification"]
    },
    {
      icon: Presentation,
      title: "Public Finale Events",
      description: "Learner-managed graduation showcases that celebrate transformation.",
      features: ["Student-led Events", "Public Speaking", "Confidence Building", "Recognition"]
    }
  ];

  const trainingModes = [
    {
      icon: MapPin,
      title: "Offline Classes",
      location: "Peyad & Karamana Centers",
      description: "In-person interactive sessions with dedicated trainers."
    },
    {
      icon: Video,
      title: "Online Learning",
      location: "Zoom-based with Buddy System",
      description: "Inclusive digital learning with peer support."
    },
    {
      icon: Users,
      title: "Community Workshops",
      location: "Slums, Tribal Areas, Schools",
      description: "Reaching underserved communities directly."
    },
    {
      icon: Bus,
      title: "FunLingua Bus",
      location: "Mobile Learning Lab (Coming Soon)",
      description: "Bringing quality education to remote areas."
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do Differently
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FunLingua isn't an ordinary language program. It's a creative, confidence-first ecosystem 
            that transforms how people learn and live with English.
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-r from-orange-500 to-purple-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <program.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Training Models */}
        <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Training Models</h3>
            <p className="text-lg opacity-90">Multiple pathways to reach every learner</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingModes.map((mode, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                <mode.icon className="text-white mb-4" size={40} />
                <h4 className="text-xl font-bold mb-2">{mode.title}</h4>
                <p className="text-orange-200 text-sm mb-3">{mode.location}</p>
                <p className="text-white/80 text-sm">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
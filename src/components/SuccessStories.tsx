import React from 'react';
import { Quote, Trophy, Star, TrendingUp } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Sminesh",
      achievement: "From 7.5/25 to 20/25",
      story: "Transformed from a hesitant speaker to a confident communicator through our experiential learning approach.",
      category: "Academic Excellence",
      image: "/src/assets/Sminesh.jpg"
    },
    {
      name: "Monisha",
      achievement: "Finale Winner",
      story: "Led her graduation showcase and now mentors other learners in the community.",
      category: "Leadership",
      image: "/src/assets/Monisha.jpg"
    },
    {
      name: "Vishal",
      achievement: "Finale Winner",
      story: "Overcame stage fear to deliver powerful presentations and secured his dream job.",
      category: "Career Success",
      image: "/src/assets/Vishal.jpg"
    }
  ];

  const programs = [
    {
      title: "DDI Camp Success",
      participants: "13 Grassroots Learners",
      method: "Manglish-to-English",
      activities: ["Blind Walks", "Vlogs", "Stage Shows"],
      outcome: "Complete transformation in confidence and communication skills"
    },
    {
      title: "Salvation Army Program",
      participants: "Children in CCIs",
      method: "Sunday Sessions",
      activities: ["Skits", "Tours", "Child-led Finales"],
      outcome: "Children taking leadership roles and speaking publicly"
    }
  ];

  return (
    <section id="success" className="py-20 bg-gradient-to-br from-orange-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Language. Real People. Real Change.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Sminesh to Monisha and Vishal, learners don't just improve their English—they transform their lives, 
            discover confidence, and break stereotypes.
          </p>
        </div>

        {/* Individual Success Stories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Profile Image */}
              <div className="flex items-center mb-6">
                <div className="relative mr-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-orange-500 to-purple-600 p-2 rounded-full">
                    <Trophy className="text-white" size={16} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{story.name}</h3>
                  <span className="text-orange-600 font-medium text-sm">{story.category}</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white p-4 rounded-lg mb-4">
                <Quote size={20} className="mb-2" />
                <p className="font-semibold">{story.achievement}</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed">{story.story}</p>
              
              {/* Decorative element */}
              <div className="mt-4 flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Program Successes */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Program Highlights</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-gradient-to-b from-orange-500 to-purple-600">
                <div className="flex items-center mb-6">
                  <Star className="text-orange-500 mr-3" size={28} />
                  <h4 className="text-2xl font-bold text-gray-800">{program.title}</h4>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <TrendingUp size={16} className="text-purple-600 mr-2" />
                      <span className="font-semibold text-gray-700">Participants</span>
                    </div>
                    <p className="text-gray-600">{program.participants}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Star size={16} className="text-orange-600 mr-2" />
                      <span className="font-semibold text-gray-700">Method</span>
                    </div>
                    <p className="text-gray-600">{program.method}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-700 mb-3">Key Activities:</h5>
                  <div className="flex flex-wrap gap-2">
                    {program.activities.map((activity, idx) => (
                      <span key={idx} className="bg-gradient-to-r from-orange-100 to-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-green-800 font-medium">{program.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Life?</h3>
            <p className="text-lg mb-6 opacity-90">Join thousands who have discovered their voice with FunLingua</p>
            <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
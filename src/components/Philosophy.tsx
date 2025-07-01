import React from 'react';
import { Heart, Users, Sparkles } from 'lucide-react';

const Philosophy = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Philosophy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                "We believe language is not just learned. It is lived."
              </h3>
            </div>

            <div className="prose prose-lg text-gray-700">
              <p>
                FunLingua stands for transformational, inclusive language learning rooted in everyday life. 
                Our approach is designed for those who've long been silenced by fear, poor access, or 
                traditional rote-based systems.
              </p>
              <p>
                Whether it's a child in a CCI, a homemaker returning to work, or a youth navigating interviews, 
                our program empowers learners to speak up with confidence and purpose.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Heart className="text-orange-600" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Confidence-First</h4>
              </div>
              <p className="text-gray-600">
                We prioritize building confidence over perfect grammar, helping learners find their voice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Inclusive Learning</h4>
              </div>
              <p className="text-gray-600">
                Our programs welcome visually impaired, wheelchair users, and children in care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Sparkles className="text-orange-600" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Fun-Based Learning</h4>
              </div>
              <p className="text-gray-600">
                Through drama, vlogs, buddy walks, and public events, learning becomes joyful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
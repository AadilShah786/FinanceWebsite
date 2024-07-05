import React from 'react';
import expertise from '../../assets/Whyus/Expertise.png';
import perf1 from '../../assets/Whyus/Performance1.png';
import perf2 from '../../assets/Whyus/Performance2.png';
import strategy from '../../assets/Whyus/Strategy.png';
import support from '../../assets/Whyus/Support.png';
import trans from '../../assets/Whyus/Transparency.png';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: 'Expertise',
      description: 'Our team of seasoned investment professionals brings a wealth of experience and expertise in stock analysis, market research, and risk management. We are dedicated to delivering results for our clients through our deep understanding of the market dynamics.',
      image: expertise,
    },
    {
      title: 'Personalized Strategies',
      description: 'We employ cutting-edge investment strategies and techniques to capitalize on market inefficiencies and generate alpha for our investors. Our innovative approach sets us apart in the competitive landscape of stock investing.',
      image: strategy,
    },
    {
      title: 'Transparency',
      description: '4. We believe in transparency and open communication with our investors. You can trust us to provide clear and timely updates on fund performance, investment decisions, and market insights.      ',
      image: trans,
    },
    {
      title: 'Performance',
      description: '[Company Name] has a strong track record of delivering consistent and competitive returns to our investors. Our performance speaks for itself, showcasing our commitment to excellence in stock investing.',
      image: perf2,
    },
    {
      title: 'Support',
      description: 'Dedicated customer support to assist you every step of the way.',
      image: support,
    },
    {
      title: 'Risk Management',
      description: '3. Preserving capital and managing risk are top priorities at [Company Name]. We implement robust risk management protocols to protect our clients\' investments and ensure a balanced risk-return profile.',
      image: perf1,
    },
  ];

  return (
    <div id='Whyus' className=" pt-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Arvind EnterPrises?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={benefit.image} alt={benefit.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

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
      description: 'Our team of seasoned investment professionals has years of experience in navigating the stock market.',
      image: expertise,
    },
    {
      title: 'Personalized Strategies',
      description: 'We tailor investment plans to meet your individual financial goals and risk tolerance.',
      image: strategy,
    },
    {
      title: 'Transparency',
      description: 'We maintain full transparency in all our dealings, ensuring you are always informed about your investments.',
      image: trans,
    },
    {
      title: 'Performance',
      description: 'Our track record speaks for itself with consistent returns and satisfied clients.',
      image: perf2,
    },
    {
      title: 'Support',
      description: 'Dedicated customer support to assist you every step of the way.',
      image: support,
    },
  ];

  return (
    <div className=" py-12">
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

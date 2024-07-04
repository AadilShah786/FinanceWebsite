import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Sign Up',
      description: 'Register on our platform and create your investment profile.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Consultation',
      description: 'Schedule a consultation with our advisors to discuss your financial goals.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Investment Plan',
      description: 'Receive a customized investment plan based on your objectives and risk appetite.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Invest',
      description: 'We invest your funds in carefully selected stocks and manage the portfolio.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Track Performance',
      description: 'Monitor your investments through our user-friendly dashboard and receive regular updates.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Profit',
      description: 'Reap the benefits as your investments grow, with options to reinvest or withdraw your profits.',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center bg-white rounded-lg shadow-lg p-4">
              <img src={step.image} alt={step.title} className="w-24 h-24 object-cover rounded-full mr-4"/>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

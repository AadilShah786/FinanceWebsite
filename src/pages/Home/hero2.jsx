import React from 'react';

function Hero2() {
    const heroData = {
        title: 'Invest Smartly, Profit Confidently',
        subtitle: 'Your Trusted Partner in Stock Market Investments',
        description: 'Experience tailored investment strategies and achieve your financial goals with our expert advisory services.',
        buttonText: 'Join us',
        buttonLink: '#'
    };

    const features = [
        {
            id:1,
            title: 'Awarded Agency',
            description: 'Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.',
            icon: 'fas fa-award',
            bgColor: 'bg-red-400',
        },
        {
            id:2,
            title: 'Free Revisions',
            description: 'Keep your user engaged by providing meaningful information. Remember that by this time, the user is curious.',
            icon: 'fas fa-retweet',
            bgColor: 'bg-blue-400',
        },
        {
            id:3,
            title: 'Verified Company',
            description: 'Write a few lines about each one. A paragraph describing a feature will be enough. Keep your user engaged!',
            icon: 'fas fa-fingerprint',
            bgColor: 'bg-emerald-400',
        },
    ];

    return (
        <>
            <section className="relative bg-blueGray-50">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75" style={{ height: '90vh' }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')` }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-gradient-to-r from-slate-900 to-slate-700"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full px-4 ml-auto mr-auto text-center">
                                <div className=" flex flex-col items-center justify-center">
                                    <h1 className="text-white font-semibold text-3xl sm:text-5xl 
                                    xs:text-4xl">
                                        {heroData.title}
                                    </h1>
                                    <h2 className="text-white text-xl mt-4
                                    xs:text-2xl">
                                        {heroData.subtitle}
                                    </h2>
                                    <p className="mt-4 text-sm sm:text-lg text-gray-300 w-full sm:w-8/12 lg:w-6/12
                                    xs:text-base">
                                        {heroData.description}
                                    </p>
                                    <div className="mt-7">
                                        <a href={heroData.buttonLink} className="bg-blue-600 text-white rounded-xl py-2 px-4 hover:bg-blue-700 transition duration-300">
                                            {heroData.buttonText}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <section className="bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            {features.map((feature, index) => (
                                <div key={index} className={`w-full md:w-4/12 px-4 text-center ${feature.id % 2 === 0 ?'pt-0':'pt-12' }`}>
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${feature.bgColor}`}>
                                                <i className={feature.icon}></i>
                                            </div>
                                            <h6 className="text-xl font-semibold">{feature.title}</h6>
                                            <p className="mt-2 mb-4 text-blueGray-500">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Hero2;

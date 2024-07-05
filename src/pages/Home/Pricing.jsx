import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import EastIcon from '@mui/icons-material/East';

// Sample pricing data (replace with your actual data)
const pricingData = [
    {
        id: 1,
        title: "Basic",
        price: "10",
        features: [
            "Get started with messaging",
            "Flexible team meetings",
            "5 TB cloud storage"
        ]
    },
    {
        id: 2,
        title: "Startup",
        price: "24",
        features: [
            "All features in Basic",
            "Flexible call scheduling",
            "15 TB cloud storage"
        ],
        popular: true
    },
    {
        id: 3,
        title: "Enterprise",
        price: "35",
        features: [
            "All features in Startup",
            "Growth oriented",
            "Unlimited cloud storage"
        ]
    }
];

function Pricing() {
    return (
        <div id="Pricing" className="min-h-screen flex justify-center items-center pt-12">
            <div className="text-center w-full">
                <h2 className="text-3xl font-bold text-center text-gray-800">Flexible Plans</h2>
                <div className="pt-16 flex flex-wrap justify-center">
                    {pricingData.map(plan => (
                        <div
                            key={plan.id}
                            className={`w-full sm:w-2/3 md:w-1/3 lg:w-1/4 p-4 ${plan.id % 2 === 0 ? "transform scale-110" : ""}
                            xs:scale-100`}
                        >
                            <div className={`p-8 ${plan.id % 2 === 0 ? "bg-gray-900 text-white" : "bg-white text-black"} text-center rounded-3xl shadow-xl`}>
                                <h1 className={`font-semibold text-2xl ${plan.id % 2 === 0 ? "text-white" : "text-black"}`}>{plan.title}</h1>
                                <p className="pt-2 tracking-wide">
                                    <span className="text-gray-400 align-top">$ </span>
                                    <span className="text-3xl font-semibold">{plan.price}</span>
                                    <span className="text-gray-400 font-medium">/ user</span>
                                </p>
                                <div className="mt-4 border-1">
                                    <div className="pt-8">
                                        {plan.features.map((feature, index) => (
                                            <p key={index} className="font-semibold text-gray-400 text-left pt-5">
                                                <DoneIcon className="align-middle" />
                                                <span className={`pl-2 ${plan.id % 2 === 0 ? "text-white" : "text-black"}`}>
                                                    {feature}
                                                </span>
                                            </p>
                                        ))}
                                        <a href="#" className="">
                                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                                <span className="font-medium">Choose Plan</span>
                                                <EastIcon className="align-middle text-sm pl-2" />
                                            </p>
                                        </a>
                                    </div>
                                    {plan.popular && (
                                        <div className="absolute top-4 right-4">
                                            <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pricing;

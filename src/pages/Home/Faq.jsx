import React, { useState } from "react";

// Sample FAQ data (replace with your actual data)
const faqData = [
    {
        id: 1,
        question: "How does the product work?",
        answer: "Answer 1"
    },
    {
        id: 2,
        question: "What are the features?",
        answer: "Answer 2"
    },
    {
        id: 3,
        question: "What about integrations?",
        answer: "Answer 3"
    },
    {
        id: 4,
        question: "Is support available?",
        answer: "Answer 4"
    }
];

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div id="Faq" className="pt-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently asked questions</h2>
                    </div>

                    <div className="mx-auto flex max-w-screen-sm flex-col border-t">
                        {faqData.map((item, index) => (
                            <div key={item.id} className="border-b">
                                <div
                                    className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600"
                                    onClick={() => handleToggle(index)}
                                >
                                    <span className="font-semibold transition duration-100 md:text-lg">{item.question}</span>
                                    <span className={`text-indigo-500 transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>

                                {activeIndex === index && (
                                    <p className="mb-4 text-gray-500">{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;

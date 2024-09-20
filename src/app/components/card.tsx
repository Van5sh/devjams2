import React from 'react';

interface CardProps {
    header: string;
    message: string;
}

const Card: React.FC<CardProps> = ({
    header,
    message
}) => {
    return (
        <div className="flex flex-col justify-start items-center h-64 w-full">
            <div className="w-full h-full border-4 border-blue-700 overflow-hidden shadow-lg bg-white p-4 rounded-lg flex flex-col">
                <h2 className="text-xl font-bold text-blue-400 text-center mb-2 ">{header}</h2>
                <div className="flex-grow overflow-y-auto no-scrollbar">
                    <p className="text-pink-500 text-center">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
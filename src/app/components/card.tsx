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
        <div className="flex justify-center items-center min-h-screen ">
            <div className="max-w-sm w-90 h-60 border-4 border-blue-700 overflow-hidden shadow-lg bg-white p-6">
            <h2 className="text-2xl font-bold text-blue-400 text-center mb-2">{header}</h2>
                <p className="h-[55vh] w-[27vw] overflow-auto no-scrollbar text-pink-500 text-center">
                    {message}
                </p>
            </div>
        </div>
    );
}

export default Card;
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
        <div className="flex flex-col justify-start items-center w-full">
            <div className="w-full h-full border-4  border-purple-400 shadow-lg  p-4 rounded-lg flex flex-col">
                <h2 className="text-xl font-bold text-white text-center mb-2 ">{header}</h2>
                <div className="flex-grow overflow-y-auto no-scrollbar">
                    <p className="text-blue-200 text-center">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
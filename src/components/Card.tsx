import { ReactNode } from 'react';

interface CardProps {
  title: string;
  value: ReactNode;
  icon?: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
    <h2 className="text-xl font-bold text-black">{title}</h2> 
    <p className="text-2xl text-black">{value}</p>
    {icon && <img src={icon} alt={title} className="w-12 h-12 mt-4" />}
  </div>
);

export default Card;

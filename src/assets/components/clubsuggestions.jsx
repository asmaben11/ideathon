import { useState } from 'react';
import { Star } from 'lucide-react';

const ClubSuggestions = () => {
  const clubs = [
    {
      id: 1,
      name: "Google Developer Student Club",
      image: "https://api.dicebear.com/6.x/shapes/svg?seed=gdsc",
      description: "A community of developers, designers and tech enthusiasts who collaborate on projects and learn together.",
      members: 156,
      rating: 4.8
    },
    {
      id: 2,
      name: "Robotics Club",
      image: "https://api.dicebear.com/6.x/shapes/svg?seed=robotics", 
      description: "Building and programming robots, participating in competitions and exploring automation technologies.",
      members: 89,
      rating: 4.5
    },
    {
      id: 3,
      name: "AI/ML Club",
      image: "https://api.dicebear.com/6.x/shapes/svg?seed=aiml",
      description: "Exploring artificial intelligence and machine learning through hands-on projects and research.",
      members: 134,
      rating: 4.7
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating)
            ? 'fill-secondary text-secondary'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="w-full">
      {clubs.map((club) => (
        <div key={club.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow mb-6">
          <div className="flex">
            <img
              src={club.image}
              alt={`${club.name} thumbnail`}
              className="w-48 h-48 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="font-programme text-xl text-primary font-medium mb-3">{club.name}</h3>
              <p className="text-gray-600 mb-4">{club.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500">{club.members} members</span>
                <div className="flex space-x-1">
                  {renderStars(club.rating)}
                </div>
              </div>

              <button 
                className="w-full bg-secondary text-white font-programme py-2 rounded-lg hover:bg-secondary/90 transition-colors"
                onClick={() => console.log(`View details for ${club.name}`)}
              >
                View Club Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClubSuggestions;

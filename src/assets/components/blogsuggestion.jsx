import { useState } from 'react';
import { Heart } from 'lucide-react';

const BlogSuggestion = () => {
  const [likes, setLikes] = useState([false, false, false]);

  const toggleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  const posts = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah",
      date: "May 15, 2024",
      description: "Just published my latest article on React hooks and state management. Check it out if you're interested in modern React development practices!"
    },
    {
      id: 2, 
      name: "Mike Chen",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Mike",
      date: "May 14, 2024",
      description: "Exploring the intersection of AI and web development. Some fascinating insights on how machine learning is shaping our digital future."
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Emma",
      date: "May 13, 2024",
      description: "New blog post about creating accessible web applications. Let's make the web a better place for everyone!"
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-4 w-full">
      {posts.map((post, index) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <img 
              src={post.avatar} 
              alt={`${post.name}'s avatar`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-programme text-primary font-medium">{post.name}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4 line-clamp-3">{post.description}</p>
          
          <button 
            onClick={() => toggleLike(index)}
            className="flex items-center space-x-2 text-gray-600 hover:text-secondary transition-colors"
          >
            <Heart 
              className={`w-5 h-5 ${likes[index] ? 'fill-secondary text-secondary' : ''}`}
            />
            <span>{likes[index] ? 'Liked' : 'Like'}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogSuggestion;

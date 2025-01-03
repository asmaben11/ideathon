import { useState } from 'react';
import { Heart, MessageCircle, Share2, Star, ArrowLeft } from 'lucide-react';

export default function BlogsPage() {
    const [liked, setLiked] = useState(false);

    const mainBlog = {
        title: "Getting Started with React: A Comprehensive Guide",
        author: "Sarah Chen",
        authorRole: "Technical Lead @ GDSC",
        date: "2024-01-20",
        readTime: "8 min read",
        content: `React has revolutionized the way we build user interfaces. In this comprehensive guide, we'll explore the fundamental concepts of React and how to get started with your first React application.

        First, let's understand what React is and why it's so popular. React is a JavaScript library developed by Facebook that allows developers to create reusable UI components. Its virtual DOM implementation and component-based architecture make it highly efficient and maintainable.

        Key concepts we'll cover:
        1. Components and Props
        2. State Management
        3. Lifecycle Methods
        4. Hooks
        5. React Router

        Let's dive deeper into each concept...`,
        image: "https://picsum.photos/1200/600",
        likes: 234,
        comments: 45
    };

    const suggestedBlogs = [
        {
            id: 1,
            title: "Introduction to TypeScript with React",
            author: "Mike Johnson",
            date: "2024-01-18",
            readTime: "6 min read",
            preview: "Learn how TypeScript can enhance your React development experience with static typing...",
            image: "https://picsum.photos/400/300",
            likes: 156
        },
        {
            id: 2,
            title: "Building Scalable APIs with Node.js",
            author: "Lisa Wong",
            date: "2024-01-15",
            readTime: "10 min read",
            preview: "Discover best practices for creating robust and scalable backend services...",
            image: "https://picsum.photos/401/300",
            likes: 189
        },
        {
            id: 3,
            title: "Modern CSS Techniques",
            author: "Alex Thompson",
            date: "2024-01-12",
            readTime: "7 min read",
            preview: "Explore the latest CSS features and techniques for modern web development...",
            image: "https://picsum.photos/402/300",
            likes: 142
        }
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < Math.floor(rating) ? 'fill-secondary text-secondary' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <div className="min-h-screen w-screen bg-gray-50 pt-20 pb-12">
            {/* Back Button */}
            <button 
                onClick={() => window.history.back()}
                className="fixed top-24 left-8 flex items-center gap-2 text-gray-600 hover:text-secondary"
            >
                <ArrowLeft className="w-6 h-6" />
                <span>Back</span>
            </button>

            {/* Main Blog */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                    src={mainBlog.image} 
                    alt={mainBlog.title}
                    className="w-full h-[400px] object-cover"
                />
                
                <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <img 
                            src="https://api.dicebear.com/6.x/avataaars/svg?seed=author"
                            alt="Author"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h3 className="font-programme font-medium text-primary">{mainBlog.author}</h3>
                            <p className="text-sm text-gray-500">{mainBlog.authorRole}</p>
                        </div>
                    </div>

                    <h1 className="text-3xl font-programme font-bold text-primary mb-4">{mainBlog.title}</h1>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <span>{mainBlog.date}</span>
                        <span>•</span>
                        <span>{mainBlog.readTime}</span>
                        <div className="flex ml-4">
                            {renderStars(4.5)}
                        </div>
                    </div>

                    <div className="prose max-w-none mb-8">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {mainBlog.content}
                        </p>
                    </div>

                    <div className="flex items-center gap-6 border-t pt-6">
                        <button 
                            className="flex items-center gap-2 text-gray-600 hover:text-secondary"
                            onClick={() => setLiked(!liked)}
                        >
                            <Heart className={`w-6 h-6 ${liked ? 'fill-secondary text-secondary' : ''}`} />
                            <span>{mainBlog.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-secondary">
                            <MessageCircle className="w-6 h-6" />
                            <span>{mainBlog.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-secondary">
                            <Share2 className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Suggested Blogs */}
            <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-2xl font-programme font-bold text-primary mb-6">Suggested Reads</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {suggestedBlogs.map(blog => (
                        <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img 
                                src={blog.image} 
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-programme font-medium text-primary mb-2">{blog.title}</h3>
                                <p className="text-sm text-gray-500 mb-3">{blog.preview}</p>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">{blog.readTime}</span>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Heart className="w-4 h-4" />
                                        <span>{blog.likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

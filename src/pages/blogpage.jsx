import { useState } from 'react';
import { Star, Heart, MessageCircle, Share2, ArrowLeft } from 'lucide-react';

export default function BlogPage() {
    const [liked, setLiked] = useState(false);
    
    const clubProfile = {
        name: "Google Developer Student Club",
        image: "https://api.dicebear.com/6.x/shapes/svg?seed=gdsc",
        posts: 42,
        followers: 1200,
        members: 156,
        rating: 4.8,
        description: "Welcome to the Google Developer Student Club! We are a community of students passionate about technology and development. Our mission is to help students bridge the gap between theory and practice. We organize workshops, hackathons, and coding sessions to help students learn and grow in their technical journey.",
        achievements: [
            "Organized 15+ successful technical workshops",
            "Hosted 3 major hackathons", 
            "Connected 500+ students with industry experts",
            "Completed 10 community projects"
        ],
        upcomingEvents: "Join us for our upcoming Android Development Bootcamp starting next week! Learn from experts and build real-world applications."
    };

    const blogPosts = [
        {
            id: 1,
            content: "Just wrapped up another amazing workshop on Android Development! Thanks to everyone who participated. Looking forward to our next session! #AndroidDev #GDSC. During the workshop, we covered fundamental Android concepts including Activities, Fragments, Layouts, and Material Design principles. Our hands-on session allowed participants to build a fully functional weather app from scratch. Special thanks to our industry mentors who provided valuable insights on best practices and real-world application development scenarios.",
            image: "https://picsum.photos/800/500",
            likes: 89,
            comments: 12,
            date: "2024-01-15T10:30:00",
            author: "GDSC Lead",
            description: "This workshop focused on building a complete Android application from scratch, covering everything from UI design to API integration. Participants learned about Android architecture components, lifecycle management, and modern development practices."
        },
        {
            id: 2,
            content: "Exciting news! We're hosting a hackathon next month. Stay tuned for registration details. 🚀 #GDSCHackathon. This 48-hour coding marathon will feature multiple tracks including Web Development, Mobile Apps, AI/ML, and IoT. We've partnered with leading tech companies to provide mentorship and amazing prizes for winners. Whether you're a beginner or an experienced developer, this hackathon has something for everyone!",
            image: "https://picsum.photos/800/501",
            likes: 156,
            comments: 24,
            date: "2024-01-10T15:45:00",
            author: "Event Coordinator",
            description: "Get ready for an immersive hackathon experience with workshops, mentoring sessions, and networking opportunities. Participants will have access to various APIs and development tools from our sponsors."
        }
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${
                    index < Math.floor(rating)
                        ? 'fill-secondary text-secondary'
                        : 'text-gray-300'
                }`}
            />
        ));
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="bg-background min-h-screen w-screen p-4 md:p-8">
            {/* Back Button */}
            <button 
                onClick={() => window.history.back()}
                className="fixed top-4 left-4 flex items-center gap-2 text-gray-600 hover:text-secondary"
            >
                <ArrowLeft className="w-6 h-6" />
                <span>Back</span>
            </button>

            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 mx-auto w-[60%]">
                <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex flex-col items-center space-y-4 md:w-1/4">
                        <img
                            src={clubProfile.image}
                            alt={clubProfile.name}
                            className="w-32 h-32 rounded-full object-cover"
                        />
                        <div className="flex gap-4 justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                                    <div className="font-bold text-lg text-primary">{clubProfile.posts}</div>
                                </div>
                                <div className="text-xs text-gray-600">Posts</div>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                                    <div className="font-bold text-lg text-primary">{clubProfile.followers}</div>
                                </div>
                                <div className="text-xs text-gray-600">Followers</div>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                                    <div className="font-bold text-lg text-primary">{clubProfile.members}</div>
                                </div>
                                <div className="text-xs text-gray-600">Members</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h1 className="font-programme text-2xl font-bold text-primary mb-2">{clubProfile.name}</h1>
                        <div className="flex items-center gap-1 mb-4">
                            {renderStars(clubProfile.rating)}
                        </div>
                        <p className="text-gray-700 mb-6">{clubProfile.description}</p>
                        <div className="mb-6">
                            <h3 className="font-programme font-semibold text-primary mb-2">Key Achievements</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {clubProfile.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-programme font-semibold text-primary mb-2">Upcoming Events</h3>
                            <p className="text-gray-700">{clubProfile.upcomingEvents}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Posts */}
            <div className="space-y-6 mx-auto w-[60%]">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={clubProfile.image}
                                    alt={clubProfile.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h3 className="font-programme font-medium text-primary">{post.author}</h3>
                                    <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
                            <p className="text-gray-600 mb-4 italic">{post.description}</p>
                        </div>
                        
                        <img
                            src={post.image}
                            alt="Post"
                            className="w-full h-auto"
                        />
                        
                        <div className="p-4">
                            <div className="flex items-center gap-6 mb-4">
                                <button 
                                    className="flex items-center gap-2 text-gray-600 hover:text-secondary"
                                    onClick={() => setLiked(!liked)}
                                >
                                    <Heart className={`w-6 h-6 ${liked ? 'fill-secondary text-secondary' : ''}`} />
                                    <span>{post.likes}</span>
                                </button>
                                <button className="flex items-center gap-2 text-gray-600 hover:text-secondary">
                                    <MessageCircle className="w-6 h-6" />
                                    <span>{post.comments}</span>
                                </button>
                                <button className="flex items-center gap-2 text-gray-600 hover:text-secondary">
                                    <Share2 className="w-6 h-6" />
                                </button>
                            </div>
                            
                            {/* Comment Input */}
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Add a comment..."
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                                />
                                <button className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90">
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

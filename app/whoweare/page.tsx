'use client';

import { useState, useEffect } from 'react';
import { Star, Heart, Sparkles, Award, Users, Smile } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  colorClass: string;
  bgColorClass: string;
  lightBgClass: string;
  emoji: string;
  specialties: string[];
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    description: "With 8 years of experience in children's education and arts, Sarah brings magical creativity to every project. She loves painting, storytelling, and making kids smile with her endless energy and innovative ideas!",
    image: "https://picsum.photos/300/300?random=31",
    colorClass: "text-celesta-purple",
    bgColorClass: "bg-celesta-purple",
    lightBgClass: "bg-purple-100",
    emoji: "🎨",
    specialties: ["Art Direction", "Creative Planning", "Kids Workshops"]
  },
  {
    id: 2,
    name: "Mike Thompson",
    role: "Play Area Supervisor",
    description: "Mike is our fun-loving play area expert who ensures every child feels safe and included. With his background in child psychology and 6 years of experience, he creates the perfect environment for friendship and adventure!",
    image: "https://picsum.photos/300/300?random=32",
    colorClass: "text-celesta-green",
    bgColorClass: "bg-celesta-green",
    lightBgClass: "bg-green-100",
    emoji: "🎪",
    specialties: ["Child Safety", "Group Activities", "Fun Games"]
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Kids Stylist",
    description: "Emma transforms haircuts into magical experiences! With her gentle approach and 5 years specializing in children's styling, she makes every child feel like royalty with beautiful, age-appropriate styles and lots of giggles.",
    image: "https://picsum.photos/300/300?random=33",
    colorClass: "text-celesta-blue",
    bgColorClass: "bg-celesta-blue",
    lightBgClass: "bg-blue-100",
    emoji: "✨",
    specialties: ["Kids Haircuts", "Special Styling", "Gentle Care"]
  },
  {
    id: 4,
    name: "David Chen",
    role: "Party Coordinator",
    description: "David is the master of celebrations! He has organized over 200 unforgettable birthday parties and knows exactly how to make each child's special day absolutely perfect with themed decorations, games, and pure joy.",
    image: "https://picsum.photos/300/300?random=34",
    colorClass: "text-celesta-red",
    bgColorClass: "bg-celesta-red",
    lightBgClass: "bg-red-100",
    emoji: "🎂",
    specialties: ["Event Planning", "Theme Design", "Entertainment"]
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Art Instructor",
    description: "Lisa guides young artists on their creative journey with patience and inspiration. With her Fine Arts degree and 7 years teaching experience, she helps children discover their unique artistic voice and build confidence.",
    image: "https://picsum.photos/300/300?random=35",
    colorClass: "text-celesta-yellow",
    bgColorClass: "bg-celesta-yellow",
    lightBgClass: "bg-yellow-100",
    emoji: "🖌️",
    specialties: ["Fine Arts", "Skill Development", "Creative Expression"]
  },
  {
    id: 6,
    name: "Alex Rivera",
    role: "Camp Director",
    description: "Alex brings adventure to every summer with exciting camp programs! With outdoor education certification and 4 years of camp experience, he creates safe, educational, and thrilling adventures that kids remember forever.",
    image: "https://picsum.photos/300/300?random=36",
    colorClass: "text-celesta-green",
    bgColorClass: "bg-celesta-green",
    lightBgClass: "bg-green-100",
    emoji: "🏕️",
    specialties: ["Outdoor Education", "Team Building", "Adventure Planning"]
  },
  {
    id: 7,
    name: "Maya Patel",
    role: "Customer Experience Manager",
    description: "Maya ensures every family has an amazing experience from start to finish. With her warm personality and 3 years in customer service, she makes sure every visit is smooth, enjoyable, and exceeds expectations!",
    image: "https://picsum.photos/300/300?random=37",
    colorClass: "text-celesta-purple",
    bgColorClass: "bg-celesta-purple",
    lightBgClass: "bg-purple-100",
    emoji: "💝",
    specialties: ["Customer Care", "Family Support", "Experience Design"]
  },
  {
    id: 8,
    name: "Jake Wilson",
    role: "Safety Coordinator",
    description: "Jake keeps everyone safe while the fun happens! With first aid certification and 5 years in child safety, he ensures our environment is secure so parents can relax and kids can play freely and confidently.",
    image: "https://picsum.photos/300/300?random=38",
    colorClass: "text-celesta-blue",
    bgColorClass: "bg-celesta-blue",
    lightBgClass: "bg-blue-100",
    emoji: "🛡️",
    specialties: ["Safety Protocols", "First Aid", "Risk Management"]
  }
];

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // This mobile auto-flip logic can stay the same
  useEffect(() => {
    if (isMobile && !isFlipped) {
      const timer = setTimeout(() => {
        setIsFlipped(true);
        setTimeout(() => {
          setIsFlipped(false);
        }, 5000);
      }, 3000 + index * 1000);
      return () => clearTimeout(timer);
    }
  }, [isMobile, isFlipped, index]);

  const handleCardClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsFlipped(false);
    }
  };

  return (
    // The perspective is still needed on the parent for the 3D effect
    <div 
      className="w-full max-w-sm mx-auto h-96 [perspective:1000px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      {/* 
        This is now the SINGLE card element. 
        It handles the rotation and transition. 
        We removed the complex absolute positioning.
      */}
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        } ${member.lightBgClass} rounded-3xl p-4 shadow-xl border-4 border-white`}
      >
        {isFlipped ? (
          // BACK CONTENT: Displayed when isFlipped is true
          // The key is adding `rotate-y-180` here to un-flip the text
          <div className="w-full h-full rotate-y-180">
            <div className="w-full h-full bg-white rounded-2xl p-6 flex flex-col justify-center">
              <div className="text-center mb-4">
                <span className="text-4xl mb-2 block">{member.emoji}</span>
                <h3 className={`text-2xl font-bold ${member.colorClass} mb-1`}>
                  {member.name}
                </h3>
                <div className={`inline-block px-3 py-1 ${member.bgColorClass} text-white rounded-full text-sm font-semibold mb-4`}>
                  {member.role}
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                {member.description}
              </p>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-600 text-center">SPECIALTIES:</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              {isMobile && (
                <div className="text-center mt-4">
                  <div className="text-xs text-gray-500">
                    Tap again to see photo
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // FRONT CONTENT: Displayed when isFlipped is false
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-3/4 object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="text-3xl bg-white/90 rounded-full p-2 shadow-md">
                {member.emoji}
              </span>
            </div>
            <div className="p-4 text-center">
              <h3 className={`text-xl font-bold ${member.colorClass} mb-1`}>
                {member.name}
              </h3>
              <p className="text-gray-600 font-semibold">
                {member.role}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Floating decoration components
const FloatingIcons = () => {
  const icons = [
    { Icon: Star, delay: '0s', position: { left: '10%', top: '20%' } },
    { Icon: Heart, delay: '1s', position: { left: '85%', top: '15%' } },
    { Icon: Sparkles, delay: '2s', position: { left: '15%', top: '60%' } },
    { Icon: Users, delay: '3s', position: { left: '80%', top: '70%' } },
    { Icon: Award, delay: '4s', position: { left: '50%', top: '10%' } },
    { Icon: Smile, delay: '5s', position: { left: '50%', top: '80%' } },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, position }, index) => (
        <Icon
          key={index}
          className="absolute text-white/20 animate-float"
          style={{
            ...position,
            animationDelay: delay,
          }}
          size={24}
        />
      ))}
    </div>
  );
};

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-celesta overflow-hidden">
        <FloatingIcons />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center space-x-4">
            <span className="text-6xl animate-bounce-gentle">👥</span>
            <span className="text-6xl animate-bounce-gentle animation-delay-200">💫</span>
            <span className="text-6xl animate-bounce-gentle animation-delay-400">🌟</span>
          </div>
          <h1 className="text-responsive-xl font-bold text-white mb-6 animate-fade-in-up text-shadow-lg">
            Who We Are
          </h1>
          <p className="text-responsive text-white/95 mb-8 animate-fade-in-up animation-delay-200 font-semibold">
            🌈 Meet our amazing team of dedicated professionals who make magic happen every day! 🌈
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-gray-100 mb-12">
            <div className="flex justify-center mb-4">
              <span className="text-5xl">❤️</span>
            </div>
            <h2 className="text-responsive-lg font-bold text-celesta-purple mb-4">
              Our Passionate Team
            </h2>
            <p className="text-responsive text-gray-700 leading-relaxed">
              We're a diverse group of creative professionals, educators, and child care experts who share one mission: 
              creating joyful, safe, and unforgettable experiences for children and families. Each team member brings 
              unique skills, boundless energy, and genuine love for what we do! 
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-celesta-blue">50+</div>
                <div className="text-sm text-gray-600">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-celesta-green">1000+</div>
                <div className="text-sm text-gray-600">Happy Families Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-celesta-red">8</div>
                <div className="text-sm text-gray-600">Amazing Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div key={member.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <TeamCard member={member} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-purple-blue relative overflow-hidden">
        <FloatingIcons />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center space-x-4">
            <span className="text-5xl animate-bounce-gentle">🤝</span>
            <span className="text-5xl animate-bounce-gentle animation-delay-200">💝</span>
            <span className="text-5xl animate-bounce-gentle animation-delay-400">🌟</span>
          </div>
          
          <h2 className="text-responsive-lg font-bold text-white mb-6 text-shadow">
            Ready to Meet Our Amazing Team? 🌈
          </h2>
          <p className="text-responsive text-white/95 mb-8 font-semibold">
            Come visit us and experience the warmth, creativity, and expertise our team brings to every interaction! ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-celesta-purple hover:bg-gray-100 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl border-4 border-white">
              <Users size={24} />
              Visit Our Location
            </button>
            <button className="inline-flex items-center gap-3 px-8 py-4 border-4 border-white text-white hover:bg-white hover:text-celesta-purple rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              <Heart size={24} />
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
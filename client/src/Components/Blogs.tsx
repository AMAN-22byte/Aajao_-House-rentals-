import React from 'react';

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Top 10 Hidden Travel Gems in India',
    date: 'September 12, 2025',
    summary:
      'Discover lesser-known yet breathtaking destinations across India – from the valleys of Ziro in Arunachal to the beaches of Gokarna.',
    author: 'Priya Sharma',
  },
  {
    title: 'Hosting Tips for Indian Homes',
    date: 'August 30, 2025',
    summary:
      'Make your guests feel at home with these simple yet effective tips tailored for Indian households, including hospitality etiquette, local cuisine, and cultural tips.',
    author: 'Rahul Mehta',
  },
  {
    title: 'How to Earn by Listing Your Property in Tier-2 Cities',
    date: 'August 20, 2025',
    summary:
      'With increasing tourism in smaller cities like Udaipur and Varanasi, now is the best time to become a host. Here’s how you can get started.',
    author: 'Sneha Kulkarni',
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container px-6 py-12 max-w-5xl mx-auto text-black bg-[#ffffff]">
      <h1 className="text-4xl font-bold mb-10">Latest Blogs</h1>
      <div className="grid gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="p-6 rounded-xl bg-[#969cf4] shadow-lg hover:bg-[#b69af4] transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-2">By {post.author} | {post.date}</p>
            <p className="text-gray-800">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

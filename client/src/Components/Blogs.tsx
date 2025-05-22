// import React from 'react';
import {Link} from 'react-router-dom'

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  author: string;
  img:string;
  dir:string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Top 10 Hidden Travel Gems in India',
    date: 'September 12, 2025',
    summary:
      'Discover lesser-known yet breathtaking destinations across India – from the valleys of Ziro in Arunachal to the beaches of Gokarna.',
    author: 'Priya Sharma',
    img:'https://images.hdqwalls.com/download/travel-hd-2880x1800.jpg',
    dir:'/Blogs/blog1'
  },
  {
    title: 'Hosting Tips for Indian Homes',
    date: 'August 30, 2025',
    summary:
      'Make your guests feel at home with these simple yet effective tips tailored for Indian households, including hospitality etiquette, local cuisine, and cultural tips.',
    author: 'Rahul Mehta',
    img:'https://globalgrasshopper.com/wp-content/uploads/2011/01/Gadi-Sagar.jpg',
    dir:'/Blogs/blog2'
  },
  {
    title: 'How to Earn by Listing Your Property in Tier-2 Cities',
    date: 'August 20, 2025',
    summary:
      'With increasing tourism in smaller cities like Udaipur and Varanasi, now is the best time to become a host. Here’s how you can get started.',
    author: 'Sneha Kulkarni',
    img:'https://demo.tagdiv.com/newspaper_travel_pro/wp-content/uploads/2019/05/14.jpg',
    dir:'/Blogs/blog3'
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container px-2 py-12 max-w-4xl mx-auto text-black bg-[#ffffff]">
      <h1 className="text-4xl font-bold mb-10">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-70">
        {blogPosts.map((post, index) => (
          <div key={index} className="p-6 rounded-xl w-90 h-125  bg-[#969cf4] shadow-lg hover:bg-[#b69af4] transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-2">By {post.author} | {post.date}</p>
            <img src={post.img} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-800">{post.summary}</p>
            <Link to={post.dir}><button className="mb-4 mt-3 bg-blue-500 text-white py-1.5 px-1.5 rounded-md hover:bg-blue-600 transition duration-300 align-bottom">Read More...</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Privacy = () => {
     const articles = [
    {
      category: "Legal terms",
      title: "Privacy Policy",
      description: "Please review our Privacy Policy.",
      link: "/privacy"
    },
    {
      category: "How-to",
      title: "Verifying your identity on Aajao",
      description: "At Aajao, trust is the cornerstone of our community – where millions of people across the world place trust in each other as they travel or host services, experiences or homes.",
      link: "#"
    },
    {
      category: "Legal terms",
      title: "Terms of Service",
      description: "Please review our Terms of Service.",
      link: "#"
    }
  ];

  return (
    <>
    {/* <Header/> */}
    <div className="max-w-3xl mx-auto py-8 ">
    <h3 className=' text-gray-400 font-bold my-2'>Legal terms</h3>
    <h1 className='font-extrabold text-4xl my-2' >Aajao Privacy</h1>
    <p className='my-2'>Our Privacy Policy explains what personal information we collect, how we use personal information, how personal information is shared, and privacy rights.</p>
    <h3 className='underline font-bold my-2'>Privacy Policy</h3>
    <p className='my-2'>Please review the supplemental privacy policies linked within the privacy policy documents, such as for certain Aajao services, that may be applicable to you.</p>
    <h3 className='my-2 underline'>Supplemental Privacy Policy Documents</h3>
    {/* <li> */}
        <li>Outside the United States Supplement</li>
        <li>United States Privacy Supplement</li>
        <li>Cookie Policy</li>
        <li>Enterprise Customers and Aajao for Work</li>
        <li>Privacy Supplement for China Users</li>

        
      <h2 className="text-2xl font-semibold mb-6 mt-3">Related articles</h2>
      <div className="space-y-6">
        {articles.map((article, idx) => (
          <div key={idx} className="border-t pt-6">
            <p className="text-sm text-gray-500">{article.category}</p>
            <a
              href={article.link}
              className="text-lg font-medium text-black hover:underline block"
            >
              {article.title}
            </a>
            <p className="text-gray-600 mt-1">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
    {/* </li> */}
    {/* <Footer/> */}
    </>
  )
}

export default Privacy
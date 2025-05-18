// import React from 'react';

const Agreements = () => {
  return (
    <div className="agreements-container px-6 py-12 max-w-4xl mx-auto text-black bg-[#ffffff]">
      <h1 className="text-4xl font-bold mb-8">Host Responsibilities and Agreements – India</h1>

      <section className="mb-8">
        <p>Effective as of September 2025</p>
        <p>This page outlines the terms, responsibilities, and expectations for hosts listing their property or service on our platform in India. By listing your space or experience, you agree to comply with these host terms and Indian laws.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Becoming a Host</h2>
        <p>To become a host, you must be at least 18 years old and provide valid identification. You agree to provide accurate information about your listing, availability, pricing, and policies.</p>
        <p className="mt-2">All properties listed must comply with Indian local zoning regulations, safety standards, and applicable licenses (e.g., homestay approvals, GST registration if applicable).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Host Responsibilities</h2>
        <ul className="list-disc pl-6">
          <li>Ensure the space or service is safe, clean, and accurately described.</li>
          <li>Communicate promptly with guests and address their concerns.</li>
          <li>Comply with cancellation policies and respect booking commitments.</li>
          <li>Do not discriminate against guests on the basis of religion, caste, gender, or ethnicity in accordance with Indian anti-discrimination laws.</li>
          <li>Ensure check-in and check-out experiences are smooth and professional.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Taxes and Legal Compliance</h2>
        <p>As a host in India, you are solely responsible for determining and fulfilling your tax obligations, including GST if your earnings exceed the threshold set by the Indian government. We may issue tax statements or collect applicable taxes as required by Indian law.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Insurance and Liability</h2>
        <p>We strongly encourage hosts to obtain appropriate insurance coverage for their property and activities. You are liable for any injuries, damages, or legal issues that arise during a guest’s stay or participation in your experience unless explicitly covered by a separate agreement or platform protection policy.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Removal or Suspension</h2>
        <p>We reserve the right to suspend or permanently remove a host listing if it violates our community guidelines, receives repeated complaints, or fails to meet minimum standards of hospitality or safety.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Governing Law and Jurisdiction</h2>
        <p>These agreements are governed by the laws of the Republic of India. Any disputes will be handled by courts in New Delhi unless otherwise agreed in writing.</p>
      </section>

      <p className="text-sm text-gray-400 mt-8">
        For any questions or legal clarifications, contact us at 
        <a href="mailto:legal@aajao.in" className="text-blue-400 underline ml-1">legal@aajao.in</a>.
      </p>
    </div>
  );
};

export default Agreements;

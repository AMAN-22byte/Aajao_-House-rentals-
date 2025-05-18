import React from 'react';

const Cancel = () => {
  return (
    <div className="cancel-policy-container px-6 py-12 max-w-4xl mx-auto text-black bg-[#ffffff]">
      <h1 className="text-4xl font-bold mb-8">Cancellation Policy – India</h1>

      <section className="mb-8">
        <p>Effective as of September 2025</p>
        <p>
          This Cancellation Policy outlines the terms under which guests and hosts in India may cancel reservations and receive refunds. It is designed to protect both parties and ensure fairness and transparency.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. For Guests</h2>
        <p>When you make a reservation on our platform, you agree to the cancellation terms set by the host. These terms are clearly stated before booking and may fall under the following categories:</p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Flexible:</strong> Full refund for cancellations made up to 24 hours before check-in.</li>
          <li><strong>Moderate:</strong> Full refund for cancellations made up to 5 days before check-in.</li>
          <li><strong>Strict:</strong> 50% refund for cancellations made at least 7 days before check-in. No refund after that.</li>
        </ul>
        <p className="mt-2">Refunds, if applicable, will be processed back to the original payment method within 7–10 business days, per Indian banking regulations.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. For Hosts</h2>
        <p>Hosts are encouraged to clearly define their cancellation policies to set guest expectations. Repeated last-minute cancellations by hosts may result in penalties, including temporary suspension or removal from the platform.</p>
        <p className="mt-2">Hosts in India are required to comply with the guidelines issued by local authorities and regulatory bodies regarding consumer protection.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Extenuating Circumstances</h2>
        <p>In the event of unavoidable emergencies (such as natural disasters, government-imposed lockdowns, or public health emergencies), we may waive cancellation penalties. Documentation may be required to support the claim.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. How to Cancel</h2>
        <p>To cancel a reservation, go to your account dashboard and select the reservation you want to cancel. The refund amount and any applicable penalties will be shown based on the host’s policy and the time of cancellation.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Support for Indian Users</h2>
        <p>If you face any issues while cancelling or have questions about your refund, you can contact our India Support Team via the app, website, or by emailing <a href="mailto:support@aajao.in" className="text-blue-400 underline">support@ourplatform.in</a>.</p>
        <p className="mt-2">Our team is available 24/7 and support is provided in multiple Indian languages including Hindi, Tamil, Bengali, and Telugu.</p>
      </section>

      <p className="text-sm text-gray-400 mt-8">For more details on host-specific terms, refer to our <a href="/terms" className="underline text-blue-400">Terms of Service</a>.</p>
    </div>
  );
};

export default Cancel;

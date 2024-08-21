import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-700 mb-2">
        <strong>Effective Date:</strong> 20 Aug 2024
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-700">
          Welcome to StrongPasswordGenerator.online! We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information is collected when you visit our website and how it is used.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <h3 className="text-xl font-medium mb-1">2.1 Automatically Collected Information</h3>
        <p className="text-gray-700">
          <strong>Google AdSense:</strong> We use Google AdSense to display ads on our website. Google, as a third-party vendor, uses cookies to serve ads based on your previous visits to our website or other websites. These cookies allow Google and its partners to serve ads to you based on your browsing activities.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use the Information</h2>
        <p className="text-gray-700">
          <strong>Advertising:</strong> The information collected by Google AdSense is used to provide personalized ads that are relevant to you. We do not have access to or control over the cookies used by Google AdSense.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Third-Party Services</h2>
        <p className="text-gray-700">
          <strong>Google AdSense:</strong> For more information on how Google collects and processes data through AdSense, please review Google's Privacy Policy: <a href="https://policies.google.com/privacy" className="text-blue-600 underline">Google Privacy Policy</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Your Choices</h2>
        <p className="text-gray-700">
          <strong>Managing Cookies:</strong> You can manage your preferences for personalized ads by visiting <a href="https://adssettings.google.com/authenticated" className="text-blue-600 underline">Google Ad Settings</a>. Additionally, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices" className="text-blue-600 underline">www.aboutads.info</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

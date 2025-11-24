import Layout from "../components/Layout";

const TermOfUse = () => {
  return (
    <Layout title="Terms of Use - Annship">
      <div className="bg-secondary py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Terms of Use</h1>
        <p className="text-slate-400 mt-4">Last updated: November 22, 2025</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead">
            Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the Annship website and services operated by Annship Logistics ("us", "we", or "our").
          </p>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h3>2. Use of Services</h3>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that all information provided for shipping is accurate and complies with all applicable laws and regulations.
          </p>

          <h3>3. Accounts</h3>
          <p>
            When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>

          <h3>4. Intellectual Property</h3>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Annship Logistics and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            In no event shall Annship Logistics, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h3>6. Changes</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h3>7. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at legal@annship.com.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TermOfUse;

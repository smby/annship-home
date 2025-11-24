import Layout from "../components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout title="Privacy Policy - Annship">
      <div className="bg-secondary py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Privacy Policy</h1>
        <p className="text-slate-400 mt-4">Last updated: November 22, 2025</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead">
            Annship Logistics ("we", "us", or "our") operates the Annship website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <h3>1. Information Collection and Use</h3>
          <p>
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>
          <h4>Types of Data Collected</h4>
          <ul>
            <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City.</li>
            <li><strong>Usage Data:</strong> We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
          </ul>

          <h3>2. Use of Data</h3>
          <p>
            Annship Logistics uses the collected data for various purposes:
          </p>
          <ul>
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h3>3. Transfer of Data</h3>
          <p>
            Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
          </p>

          <h3>4. Security of Data</h3>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h3>5. Service Providers</h3>
          <p>
            We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@annship.com.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

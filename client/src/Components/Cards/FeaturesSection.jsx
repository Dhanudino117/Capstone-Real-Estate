import { FaSearch, FaShieldAlt, FaHandshake } from "react-icons/fa";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="max-w-sm p-8 rounded-2xl shadow-md mx-4 mb-10 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-200">
        <Icon className="text-xl text-gray-500" />
      </div>
      <h1 className="mt-4 text-lg font-semibold text-gray-900">{title}</h1>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="flex flex-col items-center mx-4">
      {" "}
      {/* Changed to flex-col for vertical stacking */}
      <div className="flex flex-col md:flex-row justify-center gap-8 p-6">
        {" "}
        {/* Adjusted for responsiveness */}
        <FeatureCard
          icon={FaSearch}
          title="Curated Selection"
          description="We carefully evaluate each property to ensure it meets our high standards for quality and value."
        />
        <FeatureCard
          icon={FaShieldAlt}
          title="Secure Transactions"
          description="Our platform ensures that all transactions are safe and verified for a hassle-free experience."
        />
        <FeatureCard
          icon={FaHandshake}
          title="Trusted Partners"
          description="We collaborate with reliable real estate agents to provide you with the best options available."
        />
      </div>
    </div>
  );
};

export default FeaturesSection;

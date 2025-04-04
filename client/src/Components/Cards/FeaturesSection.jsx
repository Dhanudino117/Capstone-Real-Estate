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


export default FeatureCard
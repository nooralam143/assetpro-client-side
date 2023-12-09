import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PriceCard = ({ title, price, features}) => {

  return (
    <div className="flex-1 bg-white rounded-lg p-6 m-4 shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-indigo-600 mb-4">{price}</p>
      <ul className="text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg className="w-4 h-4 mr-2 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link to={{ pathname: "/signup-admin", state: { package: title } }}>
      <button className="bg-indigo-600 text-white py-2 px-4 mt-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800">
        Choose Plan
      </button>
      </Link>
    </div>
  );
}

export default PriceCard;

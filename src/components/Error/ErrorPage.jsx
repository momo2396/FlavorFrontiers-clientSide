import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0 bg-cover bg-center"
      style={{
        backgroundImage: `url("https://i.ibb.co/my4Whs0/spaghetti-bolognese.jpg")`,
      }}
    >
      <Helmet>
        <title>Error Page-FlavorFrontiers</title>
      </Helmet>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center bg-white py-20 bg-opacity-60">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-red-800">
          404
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-red-800 mt-2 opacity-50">
          Page Not Found
        </p>
        <Link
          to="/"
          className="mt-20 flex items-center space-x-2 bg-red-800 hover:bg-red-700 text-gray-100 px-4 py-2 rounded transition duration-150"
          title="Return Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

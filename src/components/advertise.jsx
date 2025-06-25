import { Link } from "react-router-dom";

const Advertise = () => {
  return (
    <section className="w-full flex justify-center items-center py-12 px-4 bg-gradient-to-br from-blue-700 to-indigo-900">
      <div className="max-w-3xl w-full glass shadow-xl rounded-2xl p-8 flex flex-col items-center">
        <h2 className="font-extrabold text-3xl md:text-4xl text-white mb-4 underline decoration-8 decoration-blue-400 text-center">
          Become a Technician
        </h2>
        <p className="text-white text-lg mb-6 text-center">
          Are you a tech expert? Join our team and help clients solve their tech issues remotely. Expand your network, earn more, and be part of a growing community.
        </p>
        <Link to="/join-team">
          <span className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-200">
            Join Now
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Advertise;

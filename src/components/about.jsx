import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 px-4 bg-blur-grain">
      <div className="max-w-5xl w-full glass shadow-xl rounded-2xl p-8 md:p-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 flex flex-col justify-center">
          <h2
            className="font-extrabold text-4xl md:text-5xl mb-4 underline decoration-8 decoration-blue-400"
            style={{ color: "var(--color-text)" }}
          >
            About Us
          </h2>
          <div
            className="text-lg mt-2 leading-relaxed"
            style={{ color: "var(--color-text)" }}
          >
            <p className="mb-4" style={{ color: "var(--color-text)" }}>
              Tired of confusing interfaces and long wait times for remote tech help? At TechnoVerse, we understand the frustration. That's why we created a platform that streamlines remote assistance, making it easier than ever for clients to connect with skilled technicians.
            </p>
            <p className="mb-4" style={{ color: "var(--color-text)" }}>
              Our user-friendly interface facilitates clear communication and secure remote access, so you can get the help you need quickly and efficiently.
            </p>
            <p className="mb-4" style={{ color: "var(--color-text)" }}>
              We build connections! Expand your network as a Technician, reach new clients, and elevate your career by applying for a Technician role here at TechnoVerse.
            </p>
          </div>
          <div className="mt-8">
            <Link to="/join-team">
              <span className="text-primary font-semibold hover:underline text-lg inline-flex items-center gap-2">
                Learn more <span className="ml-1">→</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="about.png" alt="About Us" className="object-cover rounded-xl w-full max-w-xs shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;

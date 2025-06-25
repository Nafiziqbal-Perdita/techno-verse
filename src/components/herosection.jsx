import { Button } from "@material-tailwind/react";
import bgimg from "../assets/remote-access.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Click on Services for a Detailed Overview.",
      "Click on Sign-In to Access Chatrooms.",
      "Please Consider Subscribing to get our Best Services.",
    ],
    loop: 3,
  });

  return (
    <section
      className="relative flex items-center justify-center min-h-[70vh] w-full bg-blur-grain"
      style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-accent/40 backdrop-blur-md z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl px-6 py-16 glass shadow-xl mt-24">
        <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-center tracking-tight kinetic-text" style={{ color: "var(--color-text)" }}>
          <span className="text-primary">TechnoVerse:</span> <span className="text-accent">Remote</span> Assistance
        </h1>
        <p className="text-lg md:text-2xl font-medium text-center max-w-2xl mx-auto mb-4" style={{ color: "var(--color-text)" }}>
          Here at TechnoVerse, we facilitate the meeting between Clients and Adept Technicians.
        </p>
        <div className="typewriter text-lg md:text-xl font-semibold text-center max-w-2xl mx-auto mb-6" style={{ color: "var(--color-text)" }}>
          <span>{text}</span>
          <Cursor />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <Link to="/login">
            <Button className="w-40 h-12 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg hover:scale-105 transition">
              Sign-In
            </Button>
          </Link>
          <Link to="/services">
            <Button className="w-40 h-12 rounded-xl bg-dark border border-primary font-bold shadow-lg hover:bg-primary hover:text-white hover:scale-105 transition btn-services-text">
              Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

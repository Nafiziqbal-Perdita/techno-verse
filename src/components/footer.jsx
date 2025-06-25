import discord from "../assets/discord.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import telegram from "../assets/telegram.svg";
import facebook from "../assets/facebook.svg";

const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discord,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="glass mt-12 py-8 px-4 flex flex-col items-center bg-gradient-to-t from-gray-900 to-blue-900">
      <div className="flex gap-6 mb-4">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={social.iconUrl} alt={social.title} className="w-7 h-7 text-white" />
          </a>
        ))}
      </div>
      <p className="text-white text-sm text-center">
        &copy; {new Date().getFullYear()} TechnoVerse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

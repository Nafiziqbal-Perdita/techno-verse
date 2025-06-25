import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import featureImage from "../assets/feature.svg";

export default function Remote_access() {
  const navigate = useNavigate();
  const [room, setRoom] = useState("");

  const create = async () => {
    const roomID = await nanoid(7);
    sessionStorage.setItem("hasRefreshed", "false");
    navigate(`/remote-access/_session_/${roomID}`);
  };

  const joinRoom = () => {
    if (room.trim() === "") return;
    sessionStorage.setItem("hasRefreshed", "false");
    navigate(`/remote-access/_session_/${room.trim()}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 py-16 px-4">
      <div className="max-w-3xl w-full glass shadow-2xl rounded-2xl p-8 border border-blue-400 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-white mb-6 text-center">Remote Access Tool</h1>
        <p className="text-lg text-blue-200 mb-8 text-center">Securely connect to your devices from anywhere, anytime. Our remote access tool ensures privacy, speed, and reliability for all your support needs.</p>
        <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
          <img src={featureImage} className="rounded-xl shadow-lg max-w-xs" alt="Remote Access" />
          <div className="flex-1 flex flex-col gap-4">
            <ul className="list-disc pl-6 text-white text-lg space-y-2">
              <li>End-to-end encrypted sessions</li>
              <li>One-click connection setup</li>
              <li>Multi-platform support (Windows, Mac, Linux)</li>
              <li>Session recording and audit logs</li>
              <li>Technician and client chat integration</li>
            </ul>
          </div>
        </div>
        {/* Session Controls */}
        <div className="w-full max-w-lg glass bg-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4 border border-blue-400">
          <button
            onClick={create}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 mb-2 md:mb-0"
          >
            New Session
          </button>
          <div className="flex flex-1 gap-2 w-full">
            <input
              type="text"
              placeholder="Enter Room Code"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-blue-200 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
            <button
              onClick={joinRoom}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

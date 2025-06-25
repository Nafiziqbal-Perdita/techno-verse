import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { userLoggedIn, currentUser } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
        setSuccessMessage(
          "Registration successful! Please check your email for verification."
        );
        setIsRegistering(false);
      } catch (error) {
        let errorMessage = error.message.replace("Firebase:", "").trim();
        setErrorMessage(errorMessage);
        setIsRegistering(false);
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="w-full max-w-md glass shadow-2xl rounded-2xl p-8 border border-blue-400">
        <h1 className="text-4xl font-extrabold text-white mb-6 text-center">Create Account</h1>
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-blue-200 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-blue-200 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-blue-200 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>
          <span className="text-red-400 text-sm text-center flex justify-center">{errorMessage}</span>
          <span className="text-green-400 text-sm text-center flex justify-center">{successMessage}</span>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg transition-all duration-200"
            disabled={isRegistering}
          >
            {isRegistering ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-blue-200">Already have an account?</span>
          <Link to="/login" className="text-blue-400 hover:underline ml-2">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

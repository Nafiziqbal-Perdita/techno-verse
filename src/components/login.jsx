import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import { useAuth } from "../contexts/authContext";

const Login = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        let errorMessage = error.message.replace("Firebase:", "").trim();
        setErrorMessage(errorMessage);
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((error) => {
        let errorMessage = error.message.replace("Firebase:", "").trim();
        setErrorMessage(errorMessage);
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={"/profile"} replace={true} />}
      <main className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="w-full max-w-md glass shadow-2xl rounded-2xl p-8 border border-blue-400">
          <h1 className="text-4xl font-extrabold text-white mb-6 text-center">Welcome Back!</h1>
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-blue-200 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
            </div>
            <span className="text-red-400 text-sm text-center flex justify-center">{errorMessage}</span>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg transition-all duration-200"
              disabled={isSigningIn}
            >
              {isSigningIn ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-blue-300" />
            <span className="mx-4 text-blue-200">or</span>
            <div className="flex-grow h-px bg-blue-300" />
          </div>
          <button
            onClick={onGoogleSignIn}
            className="w-full py-3 rounded-lg bg-white text-blue-700 font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-200"
            disabled={isSigningIn}
          >
            <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_17_40)">
                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {isSigningIn ? "Signing In..." : "Continue with Google"}
          </button>
          <div className="mt-6 text-center">
            <span className="text-blue-200">Don't have an account?</span>
            <Link to="/register" className="text-blue-400 hover:underline ml-2">Register</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;

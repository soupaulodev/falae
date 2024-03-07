import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-50">
          Sign in for <span className="text-gray-50">Falaê</span>
        </h1>

        <div className="divider px-3" />

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-100">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input h-10 bg-black/15 text-white bg-clip-padding border-white/15 placeholder:text-white/55 bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:border-gray-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-100">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input h-10 bg-black/15 text-white bg-clip-padding border-white/15 placeholder:text-white/55 bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:border-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm text-gray-200 hover:underline mt-2 px-2 inline-block hover:text-gray-300"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border-none bg-white/25 hover:bg-white/20 bg-opacity-5 text-gray-300 disabled:backdrop-brightness-200 disabled:text-gray-400"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

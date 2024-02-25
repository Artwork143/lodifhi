import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const correctEmail = "Email@com";
  const correctPass = "Password";

  const [border, setBorder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    if (correctEmail === email && correctPass === password) {
      setBorder(true);
      console.log(border);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <input
              className={border ? `border-[2px] border-green-600` : `border-[1.2px] border-red-600`}
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              className={border ? `border-[2px] border-red-600` : `border-[1.2px] border-gray-300`}
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label>Password</label>
          </div>

          <div className="flex items-center justify-between pb-3">
            <button
              className="bg-[#337CCF] hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

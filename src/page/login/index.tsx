import React, { useState } from "react";
import { login } from "./login";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <form action="" className="form form--login">
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              className="form__input"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__group ma-bt-md">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
              className="form__input"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <div className="form__group">
            <button
              className="btn btn--green"
              onClick={async (event) => {
                event.preventDefault();
                const tureOrFalse = await login(password, email);
                tureOrFalse ? navigate("/") : alert("login failed");
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

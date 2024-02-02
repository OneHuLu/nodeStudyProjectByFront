import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "./sign-up";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");

  useEffect(() => {
    document.title = "Natours | CREATE YOUR ACCOUNT";
  }, []);

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">CREATE YOUR ACCOUNT!</h2>
        <form className="form form--login">
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Your name
            </label>
            <input
              type="text"
              id="name"
              required
              className="form__input"
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>
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
          <div className="form__group ma-bt-md">
            <label htmlFor="password" className="form__label">
              Confirm password
            </label>
            <input
              type="password"
              id="passwordConfirm"
              placeholder="••••••••"
              required
              className="form__input"
              onChange={(e: any) => setpasswordConfirm(e.target.value)}
            />
          </div>

          <div className="form__group">
            <button
              className="btn btn--green"
              onClick={async (event) => {
                event.preventDefault();
                const tureOrFalse = await signup(
                  name,
                  email,
                  password,
                  passwordConfirm
                );
                tureOrFalse && navigate("/login");
              }}
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

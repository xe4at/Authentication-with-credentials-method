import { useRouter } from "next/router";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const loginHandler = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!res.error) router.replace("/dashboard");
  };

  return (
    <div>
      <h3>Login Form</h3>
      <input
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default SignIn;

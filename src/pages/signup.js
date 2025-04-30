import { useRouter } from "next/router";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const signUpHandler = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") router.push("/signin");
  };

  return (
    <div>
      <h3>Register From</h3>
      <input
        placeholder="Email "
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Email "
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUpHandler}>Sign Up</button>
    </div>
  );
}

export default SignUp;

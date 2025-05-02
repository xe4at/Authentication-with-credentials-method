import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const logOutHandler = async () => {
    signOut();
  };
  return (
    <>
      <div>
        <h1>Next-Auth Cridentials</h1>
        <button>
          <Link href="/dashboard">Dashboard</Link>
        </button>
        <button>
          <Link href="/signup">Register</Link>
        </button>
        <button>
          <Link href="/signin">Login</Link>
        </button>
        <button onClick={logOutHandler}>Logout</button>
      </div>
    </>
  );
}

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { status } = useSession();
  const logOutHandler = async () => {
    signOut();
  };
  return (
    <>
      <div>
        <h1>Next-Auth Cridentials</h1>
        {status === "authenticated" ? (
          <>
            <button>
              <Link href="/dashboard">Dashboard</Link>
            </button>
            <button onClick={logOutHandler}>Logout</button>
          </>
        ) : null}
        {status === "unauthenticated" ? (
          <>
            <button>
              <Link href="/signin">Login</Link>
            </button>
            <button>
              <Link href="/signup">Register</Link>
            </button>
          </>
        ) : null}
      </div>
    </>
  );
}

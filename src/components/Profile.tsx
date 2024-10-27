"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import "../components/Profile.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

export default function Profile() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="profile">
      {session ? (
        <div className="images">
          <img src={session?.user?.image} alt="avatar" />
          <h2>{session?.user?.name}</h2>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <div className="google-btn">
          <h1>Sign In</h1>
          <button onClick={() => signIn("google")}>
            <FcGoogle />
            <span>Sign In with Google</span>
          </button>
          <button onClick={() => signIn("github")} className="git-btn">
            <FaGithub />
            <span>Sign In with GitHub</span>
          </button>
        </div>
      )}
    </div>
  );
}

"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function page() {
  const router = useRouter();
  const { email } = router.query;
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof email === "string") {
      // You can use the 'email' from the query here.
      console.log("Email from first page:", email);
    }
  }, [email]);
  return (
    <div>
      <h1>Second Page</h1>
      <input type="email" placeholder="Email" value={email} readOnly />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Submit</button>
    </div>
  );
}

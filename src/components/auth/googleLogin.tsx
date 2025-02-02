"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

export default function GoogleLogin() {
  const [feedback, setFeedback] = useState("");

  const login = async () => {
    setFeedback("Email Sent");
    redirect("/orders");
  };
  return (
    <>
      <p>{feedback}</p>
      <Button
        onClick={() => {
          login();
        }}
        className="w-full my-5"
      >
        Sign in With Google
      </Button>
    </>
  );
}

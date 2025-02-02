import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const emailLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFeedback("Email Sent");
    redirect("/orders");
  };
  return (
    <form>
      <h3 className="text-2xl mb-5 text-center">Cybership Login</h3>

      <legend>{feedback}</legend>

      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full"
      />

      <Button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          emailLogin(e)
        }
        className="w-full my-5"
        disabled={email ? false : true}
      >
        Request Login Link
      </Button>
    </form>
  );
}

"use client";

import React from "react";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

export default function Leave() {

  const logout = async () => {
    redirect("/"); 
  };
  return (
    <Button
      onClick={() => {
        logout();
      }}
    >
      {"Logout"}
    </Button>
  );
}

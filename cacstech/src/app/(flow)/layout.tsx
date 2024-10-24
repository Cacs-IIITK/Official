import NavComp from "@/components/Nav";
import React from "react";

export default function FlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      {children}
      <NavComp />
    </div>
  );
}

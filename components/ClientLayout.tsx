"use client";

import Navbar from "./Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>Navbar Working</div>
      {children}
    </>
  );
}
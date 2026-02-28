"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header style={{ padding: "20px", background: "#111", color: "white" }}>
      <div>ManoMandal</div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/breathing">Breathing</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/chat">AI Companion</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
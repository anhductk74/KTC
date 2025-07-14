import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      gap: 24,
      padding: '16px 32px',
      background: 'var(--background)',
      borderBottom: '1px solid #eee',
      marginBottom: 32,
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 500,
      fontSize: 18,
    }}>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/products">Products</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

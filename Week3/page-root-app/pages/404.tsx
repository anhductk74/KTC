import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <span style={{ color: '#0070f3', textDecoration: 'underline', cursor: 'pointer' }}>Go back home</span>
      </Link>
    </div>
  );
} 
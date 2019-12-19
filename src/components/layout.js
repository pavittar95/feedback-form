import React from "react";
import Header from "./header";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
}

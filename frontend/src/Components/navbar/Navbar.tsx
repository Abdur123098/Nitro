"use client";
import React, { useState } from "react";
import "../../Styles/navbar/navbar.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Image
            src={"/imgs/nitrologo.jpg"}
            width={50}
            height={50}
            alt="logo"
          />
        </div>
        <div className="navbar-options">
          <ul className="navbar-items">
            <li>
              <div className="navbar-item">
                <Link href="/Main">Home</Link>
              </div>
            </li>
            <li className="navbar-item">
              <div className="navbar-item">
                <Link href="/Main/Search">Search</Link>
              </div>
            </li>
            <li className="navbar-item">
              <div className="navbar-item">
                <Link href="/Main">Sign In</Link>
              </div>
            </li>
            <li className="navbar-item">
              <div className="navbar-item">
                <Link href="/Main">About us</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

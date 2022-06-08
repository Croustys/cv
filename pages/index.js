import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { startAnim, startInit, exitMotion } from "../lib/motionStates";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <motion.div initial={startInit} animate={startAnim} exit={exitMotion}>
      <div id="root">
        <h1 className="title outline">Barabás Ákos</h1>
        <div className="nav">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="13"></rect>
            <rect id="mid-rect" y="30" width="100" height="13"></rect>
            <rect y="60" width="100" height="13"></rect>
          </svg>
        </div>
        <div className="catch-phrase outline">
          <p className="title-text">
            <span className="fontw brBlock">Web Developer</span>
          </p>
          <div className="container flex">
            <span className="main-text">Sometimes</span>
            <div className="content-container">
              <ul className="content-container-list">
                <li className="content-container-list-item">Frontend</li>
                <li className="content-container-list-item">Backend</li>
                <li className="content-container-list-item">Full Stack</li>
                <li className="content-container-list-item">No Stack</li>
              </ul>
            </div>
          </div>
          <img
            className="profile-pic"
            src="images/profile.jpg"
            alt="Profile Picture"
            title="Profile Picture"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* TODO: next/image tag instead of regular html */

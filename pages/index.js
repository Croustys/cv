import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { startAnim, startInit, exitMotion } from "../lib/motionStates";
import MenuButton from "../components/hamburger";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <motion.div initial={startInit} animate={startAnim} exit={exitMotion}>
      <div id="root">
        <h1 className="title outline">Barabás Ákos</h1>
        <nav>
          <MenuButton
            isOpen={isNavOpen}
            onClick={() => setIsNavOpen((prev) => !prev)}
            strokeWidth="4"
            color="#fff"
            transition={{ ease: "easeOut", duration: 0.2 }}
            width="40"
            height="15"
          />
        </nav>
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

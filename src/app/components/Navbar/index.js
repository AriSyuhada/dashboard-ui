"use client";
import { 
  FaRegComments,
  FaArrowRightFromBracket, 
  FaHouse,
  FaBell,
  FaClock,
  FaUserGroup,
  FaWallet,
  FaGear,
} from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import profilePic from "../../assets/person-images/Person-2.png";

const BUTTONS = [
  FaHouse,
  FaBell,
  FaClock,
  FaUserGroup,
  FaWallet,
  FaGear,
];

export default function Navbar({ className }) {
  const [navId, setNavId] = useState(0);

  const handleOnChangeNav = (id) => {
    setNavId(id);
  }

  return (
    <nav className={`${className} ${styles.container}`}>
      <div className={styles.top_nav_wrapper}>
        <h1>S.</h1>
        <button>
          <FaRegComments size={22} />
        </button>
      </div>
      <div className={styles.middle_nav_wrapper}>
        {
          BUTTONS.map((Icon, id) => (
            <button 
              key={`nav-button-${id}`} 
              className={navId === id ? styles.active : ''}
              onClick={() => handleOnChangeNav(id)}
            >
              <Icon size={18} />
            </button>
          ))
        }
      </div>
      <div className={styles.bottom_nav_wrapper}>
        <button className={styles.profile_picture}>
          <Image 
            src={profilePic}
            alt="User Profile Picture"
            width={48}
            height={48}
          />
        </button>
        <button>
          <FaArrowRightFromBracket size={22} />
        </button>
      </div>
    </nav>
  );
}
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "../../assets/styles/Navbar.css";

import logo from "../../assets/images/logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="مستشفى العلمين النموذجي" />
          {/* <span>مستشفى العلمين النموذجي</span> */}
        </a>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <a href="#hero">الرئيسية</a>

          <a href="#about">عن المستشفى</a>

          <a href="#stats">لتخصصات</a>

          <a href="#capabilities">الإمكانيات</a>

          <a href="#gallery">المعرض</a>

          <a href="#contact">اتصل بنا</a>
        </nav>

        <div className="navbar-actions">
          <a href="#contact" className="btn-primary">
            حجز موعد
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

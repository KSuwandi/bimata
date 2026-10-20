import { useEffect, useState } from "react";
import Brand from "./Brand";
import Icon from "./Icon";

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Solusi", "#layanan"],
    ["Keunggulan", "#keunggulan"],
    ["Cara Kerja", "#proses"],
    ["Coverage", "#coverage"],
    ["Tentang", "#tentang"],
  ];

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Brand />
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Navigasi utama">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-mobile-cta" href="#kontak" onClick={() => setOpen(false)}>
            Minta Penawaran <Icon name="arrow" size={16} />
          </a>
        </nav>
        <a className="button button-nav" href="#kontak">Minta Penawaran <Icon name="arrow" size={16} /></a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

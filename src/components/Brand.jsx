
import logo from "../../LOGO.png";

function Brand({ footer = false }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href="#beranda"
      aria-label="BIMATA Beranda"
    >
      <span className="brand-mark">
        <img
          src={logo}
          alt="Logo BIMATA"
          className="brand-mark-image"
        />
      </span>

      <span className="brand-word">BIMATA</span>
      <span className="brand-sub">
        INTERNET & NETWORK SOLUTION
      </span>
    </a>
  );
}

export default Brand;


function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "brand-footer" : ""}`} href="#beranda" aria-label="BIMATA Beranda">
      <span className="brand-mark">B<span>·</span></span>
      <span className="brand-word">BIMATA</span>
      <span className="brand-sub">INTERNET & NETWORK SOLUTION</span>
    </a>
  );
}

export default Brand;

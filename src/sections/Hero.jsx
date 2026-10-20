import Icon from "../components/Icon";
import NetworkIllustration from "../components/NetworkIllustration";

function Hero() {
  return (
    <section id="beranda" className="hero">
      <div className="hero-background-glow glow-blue" />
      <div className="hero-background-glow glow-cyan" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-pill"><span className="live-dot" /> BUSINESS CONNECTIVITY & NETWORK SOLUTION</div>
          <h1>
            Konektivitas bisnis.
            <br />
            <span>Dirancang</span> sesuai
            <br className="desktop-break" /> kebutuhan.
          </h1>
          <p>
            BIMATA membantu perusahaan dan instansi merencanakan konektivitas melalui jaringan sendiri dan mitra, dengan pemeriksaan kelayakan berdasarkan lokasi serta kebutuhan operasional.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#kontak">Konsultasi Kebutuhan <Icon name="arrow" size={17} /></a>
            <a className="button button-glass" href="#layanan">Lihat Solusi</a>
          </div>
          <div className="hero-proof">
            <span className="proof-icon"><Icon name="globe" size={16} /></span>
            <span><b>Permintaan dari berbagai wilayah Indonesia</b><small>Kelayakan jaringan dikonfirmasi per alamat</small></span>
          </div>
        </div>
        <div className="hero-visual"><NetworkIllustration /></div>
      </div>
      <div className="hero-bottom-line"><div className="container hero-bottom-inner">
        <span>CONNECTIVITY BUILT AROUND YOUR OPERATIONS</span>
        <div><i /> Business <i /> Corporate <i /> Multi-location</div>
      </div></div>
    </section>
  );
}

export default Hero;

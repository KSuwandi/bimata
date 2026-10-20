import Icon from "../components/Icon";

function About() {
  return (
    <section id="tentang" className="about-section">
      <div className="container about-layout">
        <div className="about-visual">
          <div className="about-orb" />
          <div className="about-visual-grid" />
          <div className="about-quote-mark">“</div>
          <div className="about-visual-copy">
            <span>OUR APPROACH</span>
            <h3>Satu kebutuhan.<br />Pilihan konektivitas<br /><em>yang relevan.</em></h3>
          </div>
          <div className="about-visual-lines"><i /><i /><i /><i /><i /></div>
          <div className="about-visual-caption"><span>BIMATA</span><span>CONNECTIVITY / B2B</span></div>
        </div>
        <div className="about-copy">
          <div className="eyebrow eyebrow-light"><span>05</span> TENTANG BIMATA</div>
          <h2>Menghubungkan bisnis<br />melalui pendekatan<br /><em>berbasis kebutuhan.</em></h2>
          <p>
            BIMATA berfokus membantu perusahaan, kantor, dan instansi menemukan pilihan konektivitas yang sesuai. Dengan menggabungkan jaringan sendiri dan mitra, kami memulai dari kebutuhan organisasi, lokasi, dan pemeriksaan kelayakan sebelum pilihan layanan dikonfirmasi.
          </p>
          <div className="about-values">
            <div><span>01</span><b>Memetakan kebutuhan operasional</b></div>
            <div><span>02</span><b>Meninjau opsi jaringan per lokasi</b></div>
            <div><span>03</span><b>Menjelaskan ruang lingkup sebelum implementasi</b></div>
          </div>
          <a className="button button-light" href="#kontak">Diskusikan Kebutuhan <Icon name="arrow" size={17} /></a>
        </div>
      </div>
    </section>
  );
}

export default About;

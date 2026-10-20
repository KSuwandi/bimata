import Brand from "./Brand";
import Icon from "./Icon";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand-col">
          <Brand footer />
          <p>Konektivitas bisnis dan solusi jaringan berdasarkan kebutuhan organisasi, lokasi, serta kelayakan teknis.</p>
        </div>
        <div className="footer-links">
          <h4>JELAJAHI</h4>
          <a href="#layanan">Solusi</a>
          <a href="#keunggulan">Pendekatan BIMATA</a>
          <a href="#proses">Cara Kerja</a>
          <a href="#coverage">Pemeriksaan Lokasi</a>
          <a href="#tentang">Tentang BIMATA</a>
        </div>
        <div className="footer-links">
          <h4>KEBUTUHAN</h4>
          <a href="#layanan">Internet Bisnis & Dedicated</a>
          <a href="#layanan">Koneksi Multi-Lokasi</a>
          <a href="#layanan">Infrastruktur Jaringan</a>
          <a href="#layanan">Koneksi Cadangan</a>
        </div>
        <div className="footer-contact">
          <h4>DISKUSIKAN KEBUTUHAN</h4>
          <p>Ajukan konsultasi awal untuk kantor, perusahaan, dan instansi. Ketersediaan layanan akan diverifikasi berdasarkan lokasi.</p>
          <a className="footer-contact-link" href="#kontak">Minta penawaran <Icon name="arrow" size={15} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} BIMATA. All rights reserved.</span>
        <span>Business Connectivity <i /> Ketersediaan dikonfirmasi per lokasi.</span>
      </div>
    </footer>
  );
}

export default Footer;

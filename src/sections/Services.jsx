import Icon from "../components/Icon";
import { services } from "../data/siteData";

function Services() {
  return (
    <section id="layanan" className="section services-section">
      <div className="container">
        <div className="section-heading heading-row">
          <div>
            <div className="eyebrow"><span>01</span> SOLUSI BIMATA</div>
            <h2>Konektivitas untuk<br /><em>operasional yang bergerak.</em></h2>
          </div>
          <div className="heading-aside">
            <p>Untuk kebutuhan organisasi, kantor, dan jaringan beberapa lokasi. Kami memulai dari memahami kebutuhan dan mengecek pilihan jaringan yang layak.</p>
            <a href="#kontak" className="inline-link">Diskusikan kebutuhan organisasi <Icon name="arrow" size={16} /></a>
          </div>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <a className={`service-card service-${service.tone}`} href="#kontak" key={service.number}>
              <div className="service-card-top">
                <div className="service-icon-wrap"><Icon name={service.icon} size={25} /></div>
                <span className="service-number">{service.number}</span>
              </div>
              <span className="service-tag">{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-card-bottom"><span>Konsultasikan solusi</span><span className="service-arrow"><Icon name="diagonal" size={17} /></span></div>
              <div className="service-deco" />
            </a>
          ))}
        </div>
        <p className="service-footnote"><Icon name="check" size={15} /> Jenis layanan, spesifikasi, harga, dan jadwal bergantung pada kebutuhan serta hasil pemeriksaan kelayakan.</p>
      </div>
    </section>
  );
}

export default Services;

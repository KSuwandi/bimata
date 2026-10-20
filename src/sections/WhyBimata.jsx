import Icon from "../components/Icon";
import { benefits, useCases } from "../data/siteData";

function WhyBimata() {
  return (
    <section id="keunggulan" className="why-section">
      <div className="why-decoration why-decoration-one" />
      <div className="why-decoration why-decoration-two" />
      <div className="container why-content">
        <div className="why-heading">
          <div className="eyebrow eyebrow-light"><span>02</span> PENDEKATAN BIMATA</div>
          <h2>Memilih jalur yang tepat.<br /><span>Bukan sekadar menjual koneksi.</span></h2>
          <p>Setiap organisasi memiliki kebutuhan dan lokasi yang berbeda. BIMATA menggabungkan opsi jaringan sendiri dan mitra untuk dibahas berdasarkan hasil pemeriksaan teknis—tanpa mengasumsikan semua alamat sudah terjangkau.</p>
          <a className="button button-primary" href="#proses">Lihat Cara Kerja <Icon name="arrow" size={17} /></a>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit, i) => (
            <div className="benefit-row" key={benefit.title}>
              <div className="benefit-number">0{i + 1}</div>
              <div className="benefit-icon"><Icon name={benefit.icon} size={22} /></div>
              <div className="benefit-copy"><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
              <div className="benefit-mark"><Icon name="diagonal" size={19} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="container use-cases-wrap">
        <div className="use-cases-heading">
          <span>UNTUK SIAPA BIMATA?</span>
          <p>Mulai percakapan dari konteks operasional Anda.</p>
        </div>
        <div className="use-cases-grid">
          {useCases.map((item) => (
            <div className="use-case" key={item.title}>
              <div className="use-case-icon"><Icon name={item.icon} size={20} /></div>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyBimata;

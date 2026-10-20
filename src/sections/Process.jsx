import Icon from "../components/Icon";
import { processSteps } from "../data/siteData";

function Process() {
  return (
    <section id="proses" className="process-section">
      <div className="container">
        <div className="process-heading">
          <div>
            <div className="eyebrow"><span>03</span> ALUR KERJA</div>
            <h2>Dari kebutuhan awal<br /><em>ke rencana yang jelas.</em></h2>
          </div>
          <p>Permintaan tidak otomatis berarti lokasi sudah terjangkau. Tim perlu mengonfirmasi kelayakan, pilihan layanan, ruang lingkup, dan jadwal sebelum ada komitmen implementasi.</p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <div className="process-card-top"><span>{step.number}</span><Icon name="arrow" size={18} /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="process-note"><Icon name="shield" size={17} /><span>Ruang lingkup layanan dan estimasi akan diberikan setelah tim memahami kebutuhan dan kelayakan di lokasi.</span></div>
      </div>
    </section>
  );
}

export default Process;

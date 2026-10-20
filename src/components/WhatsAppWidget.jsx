import { useState } from "react";
import Icon from "./Icon";
import WhatsAppMark from "./WhatsAppMark";
import { getWhatsAppUrl } from "../config/siteConfig";
import { whatsappTopics } from "../data/siteData";

function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [feedback, setFeedback] = useState("");

  const startChat = (event) => {
    event?.preventDefault();
    const outgoing = message.trim() || "Halo BIMATA, saya ingin berkonsultasi mengenai layanan konektivitas untuk organisasi kami.";
    const whatsappUrl = getWhatsAppUrl(outgoing);
    if (!whatsappUrl) {
      setFeedback("Nomor WhatsApp BIMATA belum dikonfigurasi. Silakan atur nomor resmi di konfigurasi website.");
      return;
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFeedback("Permintaan siap diteruskan. Periksa tab WhatsApp dan tekan Kirim; jika tidak terbuka, izinkan pop-up browser.");
  };

  const chooseTopic = (topic) => {
    setSelectedTopic(topic.label);
    setMessage(topic.message);
    setFeedback("");
  };

  return (
    <div className={`wa-widget ${isOpen ? "wa-widget-open" : ""}`}>
      {isOpen && (
        <section className="wa-panel" role="dialog" aria-label="Chat WhatsApp BIMATA">
          <div className="wa-panel-header">
            <div className="wa-header-orbit wa-orbit-one" />
            <div className="wa-header-orbit wa-orbit-two" />
            <div className="wa-avatar"><WhatsAppMark size={23} /></div>
            <div className="wa-header-copy">
              <strong>BIMATA Business Desk</strong>
              <span><i /> Konsultasi konektivitas organisasi</span>
            </div>
            <button className="wa-close" type="button" aria-label="Tutup chat" onClick={() => setIsOpen(false)}>
              <Icon name="close" size={18} />
            </button>
          </div>

          <div className="wa-chat-body">
            <div className="wa-timestamp">MULAI KONSULTASI</div>
            <div className="wa-message-row">
              <div className="wa-mini-avatar">B</div>
              <div className="wa-message-bubble">
                <span className="wa-greeting">Halo! 👋</span>
                <p>Selamat datang di BIMATA. Apakah Anda membutuhkan konektivitas untuk kantor, cabang, atau proyek?</p>
                <time>Pesan pembuka</time>
              </div>
            </div>
            <div className="wa-topic-heading">Pilih topik untuk memulai</div>
            <div className="wa-topics">
              {whatsappTopics.map((topic) => (
                <button
                  className={`wa-topic ${selectedTopic === topic.label ? "selected" : ""}`}
                  type="button"
                  key={topic.label}
                  onClick={() => chooseTopic(topic)}
                >
                  {topic.label}<span>↗</span>
                </button>
              ))}
            </div>
          </div>

          <form className="wa-composer" onSubmit={startChat}>
            <label className="wa-input-wrap">
              <span className="sr-only">Tulis pesan untuk BIMATA</span>
              <input
                type="text"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  setSelectedTopic("");
                  setFeedback("");
                }}
                placeholder="Tulis kebutuhan Anda..."
                maxLength={500}
              />
            </label>
            <button className="wa-send" type="submit" aria-label="Lanjutkan ke WhatsApp">
              <Icon name="arrow" size={19} />
            </button>
            {feedback && <p className="wa-feedback" role="status">{feedback}</p>}
            <p className="wa-privacy-note">Pesan akan disiapkan di WhatsApp untuk Anda periksa dan kirim.</p>
          </form>
        </section>
      )}

      {!isOpen && <div className="wa-teaser">Butuh konektivitas? <span>Konsultasi dengan BIMATA</span></div>}
      <button
        className="wa-launcher"
        type="button"
        aria-label={isOpen ? "Tutup chat WhatsApp" : "Buka chat WhatsApp BIMATA"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="wa-launcher-glow" />
        {isOpen ? <Icon name="close" size={24} /> : <WhatsAppMark size={27} />}
        {!isOpen && <span className="wa-launcher-dot" />}
      </button>
    </div>
  );
}

export default WhatsAppWidget;

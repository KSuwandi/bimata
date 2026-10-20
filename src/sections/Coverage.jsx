import { useState } from "react";
import Icon from "../components/Icon";
import IndonesiaMap from "../components/IndonesiaMap";
import { getWhatsAppUrl } from "../config/siteConfig";
import { inquiryTypes, provinces } from "../data/siteData";

function Coverage() {
  const [province, setProvince] = useState("");
  const [location, setLocation] = useState("");
  const [need, setNeed] = useState(inquiryTypes[0]);
  const [prepared, setPrepared] = useState(false);
  const [configError, setConfigError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!province || !location.trim()) return;

    const message = [
      "Halo BIMATA, saya ingin mengajukan pemeriksaan kelayakan jaringan untuk kebutuhan organisasi.",
      "",
      `Jenis kebutuhan: ${need}`,
      `Provinsi: ${province}`,
      `Kota/kabupaten/kecamatan/alamat: ${location.trim()}`,
      "",
      "Mohon konfirmasi opsi jaringan dan layanan yang tersedia untuk lokasi ini.",
    ].join("\n");

    const whatsappUrl = getWhatsAppUrl(message);
    if (!whatsappUrl) {
      setConfigError(true);
      setPrepared(false);
      return;
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setConfigError(false);
    setPrepared(true);
  }

  return (
    <section id="coverage" className="coverage-section">
      <div className="container">
        <div className="coverage-heading">
          <div>
            <div className="eyebrow"><span>04</span> PEMERIKSAAN LOKASI</div>
            <h2>Kebutuhan di berbagai wilayah Indonesia.<br /><em>Kita verifikasi bersama.</em></h2>
          </div>
          <p>Ajukan pemeriksaan untuk lokasi kantor, cabang, atau titik operasional di Indonesia. BIMATA akan membahas kelayakan berdasarkan jaringan sendiri, mitra, dan kondisi teknis setempat.</p>
        </div>

        <div className="coverage-layout">
          <IndonesiaMap />
          <div className="coverage-form-card">
            <div className="form-card-heading">
              <div className="form-icon"><Icon name="pin" size={22} /></div>
              <div><h3>Ajukan pemeriksaan</h3><p>Berikan lokasi dan jenis kebutuhan Anda.</p></div>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="coverage-need">Jenis kebutuhan</label>
              <div className="select-wrap">
                <select id="coverage-need" value={need} onChange={(event) => { setNeed(event.target.value); setPrepared(false); setConfigError(false); }}>
                  {inquiryTypes.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
                <span className="select-chevron">⌄</span>
              </div>
              <label htmlFor="coverage-province">Provinsi</label>
              <div className="select-wrap">
                <select id="coverage-province" value={province} onChange={(event) => { setProvince(event.target.value); setPrepared(false); setConfigError(false); }} required>
                  <option value="">Pilih provinsi</option>
                  {provinces.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
                <span className="select-chevron">⌄</span>
              </div>
              <label htmlFor="coverage-location">Kota / kabupaten / kecamatan / alamat</label>
              <input
                id="coverage-location"
                type="text"
                value={location}
                onChange={(event) => { setLocation(event.target.value); setPrepared(false); setConfigError(false); }}
                placeholder="Nama kota dan area atau alamat kantor"
                required
                maxLength={180}
              />
              <button className="button button-primary form-submit" type="submit">Lanjutkan via WhatsApp <Icon name="arrow" size={17} /></button>
            </form>
            {configError ? (
              <div className="coverage-config-error" role="alert">Nomor WhatsApp BIMATA belum dikonfigurasi. Isi <code>WHATSAPP_NUMBER</code> di <code>src/config/siteConfig.js</code> sebelum formulir digunakan.</div>
            ) : prepared ? (
              <div className="coverage-result" role="status">
                <div className="result-check"><Icon name="check" size={17} /></div>
                <div><b>Draf permintaan telah disiapkan</b><p>Periksa tab WhatsApp yang terbuka, lalu kirim pesan untuk meneruskan permintaan kepada tim BIMATA. Jika tab tidak terbuka, izinkan pop-up browser. Lokasi belum diperiksa secara otomatis.</p></div>
              </div>
            ) : (
              <div className="form-hint"><Icon name="shield" size={15} /><span>Form ini menyiapkan pesan WhatsApp. Status jaringan aktual tetap harus dikonfirmasi oleh tim.</span></div>
            )}
          </div>
        </div>
        <div className="coverage-bottom-note"><span><Icon name="globe" size={16} /> Permintaan konsultasi dari seluruh Indonesia</span><span>Pengajuan bukan jaminan bahwa jaringan tersedia di lokasi.</span></div>
      </div>
    </section>
  );
}

export default Coverage;

import { useState } from "react";
import Icon from "../components/Icon";
import { getWhatsAppUrl } from "../config/siteConfig";
import { inquiryTypes, provinces, siteCountOptions } from "../data/siteData";

function Contact() {
  const [form, setForm] = useState({
    organization: "",
    contactName: "",
    need: inquiryTypes[0],
    province: "",
    location: "",
    siteCount: siteCountOptions[0],
    notes: "",
  });
  const [prepared, setPrepared] = useState(false);
  const [configError, setConfigError] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setPrepared(false);
    setConfigError(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const message = [
      "Halo BIMATA, saya ingin berkonsultasi dan meminta penawaran layanan konektivitas untuk organisasi kami.",
      "",
      `Nama organisasi/perusahaan/instansi: ${form.organization.trim()}`,
      `Nama narahubung: ${form.contactName.trim() || "Belum diisi"}`,
      `Kebutuhan: ${form.need}`,
      `Provinsi: ${form.province}`,
      `Kota/area/alamat lokasi: ${form.location.trim()}`,
      `Jumlah lokasi: ${form.siteCount}`,
      `Keterangan tambahan: ${form.notes.trim() || "Belum ada"}`,
      "",
      "Mohon arahan untuk langkah selanjutnya dan konfirmasi kelayakan layanan.",
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
    <section id="kontak" className="contact-section contact-section-b2b">
      <div className="contact-pattern" />
      <div className="container contact-b2b-layout">
        <div className="contact-b2b-copy">
          <div className="contact-bubble"><Icon name="mail" size={20} /> KONSULTASI B2B</div>
          <h2>Mari mulai dari<br /><span>kebutuhan organisasi Anda.</span></h2>
          <p>Sampaikan gambaran kebutuhan dan lokasi. Tim BIMATA dapat meninjau informasi awal untuk menentukan pembahasan berikutnya. Pengajuan ini belum menjadi konfirmasi ketersediaan atau penawaran resmi.</p>
          <div className="contact-points">
            <div><Icon name="check" size={17} /><span><b>Pemetaan kebutuhan</b><small>Jenis koneksi, lokasi, dan jumlah titik.</small></span></div>
            <div><Icon name="check" size={17} /><span><b>Review kelayakan</b><small>Opsi jaringan ditinjau berdasarkan lokasi.</small></span></div>
            <div><Icon name="check" size={17} /><span><b>Diskusi langkah berikutnya</b><small>Ruang lingkup dan proses dapat dibahas bersama.</small></span></div>
          </div>
          <div className="contact-support"><Icon name="shield" size={15} /> Website tidak menyimpan formulir; data akan dimasukkan ke draf pesan WhatsApp saat Anda melanjutkan.</div>
        </div>

        <div className="lead-form-card">
          <div className="lead-form-heading">
            <span>PERMINTAAN KONSULTASI</span>
            <h3>Ceritakan kebutuhan Anda</h3>
            <p>Isi informasi awal berikut. Kolom bertanda * wajib diisi.</p>
          </div>
          <form onSubmit={handleSubmit} className="lead-form">
            <div className="form-field">
              <label htmlFor="organization">Nama perusahaan / instansi *</label>
              <input id="organization" name="organization" value={form.organization} onChange={updateField} placeholder="Nama organisasi Anda" required maxLength={120} />
            </div>
            <div className="form-field">
              <label htmlFor="contactName">Nama narahubung</label>
              <input id="contactName" name="contactName" value={form.contactName} onChange={updateField} placeholder="Nama Anda (opsional)" maxLength={100} />
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="need">Kebutuhan utama *</label>
              <select id="need" name="need" value={form.need} onChange={updateField} required>
                {inquiryTypes.map((item) => <option value={item} key={item}>{item}</option>)}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="province">Provinsi *</label>
              <select id="province" name="province" value={form.province} onChange={updateField} required>
                <option value="">Pilih provinsi</option>
                {provinces.map((item) => <option value={item} key={item}>{item}</option>)}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="siteCount">Jumlah lokasi *</label>
              <select id="siteCount" name="siteCount" value={form.siteCount} onChange={updateField} required>
                {siteCountOptions.map((item) => <option value={item} key={item}>{item}</option>)}
              </select>
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="location">Kota / area / alamat lokasi *</label>
              <input id="location" name="location" value={form.location} onChange={updateField} placeholder="Nama kota dan area kantor/lokasi operasional" required maxLength={180} />
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="notes">Detail kebutuhan (opsional)</label>
              <textarea id="notes" name="notes" value={form.notes} onChange={updateField} placeholder="Contoh: kebutuhan kantor cabang, perkiraan bandwidth, atau target waktu implementasi" rows={3} maxLength={600} />
            </div>
            <button className="button button-primary lead-submit" type="submit">Siapkan Permintaan via WhatsApp <Icon name="arrow" size={17} /></button>
          </form>
          {configError && <p className="lead-config-error" role="alert">Nomor WhatsApp BIMATA belum dikonfigurasi. Isi <code>WHATSAPP_NUMBER</code> di <code>src/config/siteConfig.js</code> sebelum formulir digunakan.</p>}
          {prepared && <p className="lead-success" role="status"><Icon name="check" size={16} /> Draf WhatsApp disiapkan. Periksa tab yang terbuka dan kirim pesan untuk meneruskan permintaan. Jika tab tidak terbuka, izinkan pop-up browser.</p>}
          <p className="lead-privacy">Hindari memasukkan password, data rahasia, atau informasi sensitif pada formulir ini.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

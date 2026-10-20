// Isi dengan nomor WhatsApp resmi BIMATA sebelum mengaktifkan formulir.
// Format: kode negara + nomor, angka saja tanpa tanda +, spasi, atau tanda hubung.
// Nomor sengaja kosong agar permintaan tidak terkirim ke nomor contoh.
export const WHATSAPP_NUMBER = "6281248490441";

export const COMPANY_NAME = "BIMATA";
export const SITE_URL = ""; // Isi setelah domain resmi ditentukan.

export function getWhatsAppUrl(message) {
  if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER)) return "";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

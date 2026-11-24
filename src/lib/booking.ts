// WhatsApp do salão: (17) 99208-2047
export const WHATSAPP_NUMBER = "5517992082047";

export type BookingRequest = {
  name: string;
  services: string[];
  date: string; // yyyy-mm-dd
  period: string;
};

export function formatDateBR(iso: string): string {
  const [y, m, d] = iso.split("-");
  return y && m && d ? `${d}/${m}/${y}` : iso;
}

export function buildBookingMessage(b: BookingRequest): string {
  return [
    `Olá, Hellen Hair! Meu nome é ${b.name.trim()}.`,
    `Gostaria de agendar: ${b.services.join(", ")}.`,
    `Dia: ${formatDateBR(b.date)} — período: ${b.period}.`,
    "Pode confirmar o horário disponível?",
  ].join("\n");
}

export function buildWhatsAppLink(b: BookingRequest, number = WHATSAPP_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(buildBookingMessage(b))}`;
}

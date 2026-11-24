import { describe, expect, it } from "vitest";
import { buildBookingMessage, buildWhatsAppLink } from "@/lib/booking";

const req = { name: " Ana ", services: ["Luzes", "Escova"], date: "2026-12-05", period: "Tarde" };

describe("booking", () => {
  it("monta a mensagem com serviços, data em formato brasileiro e período", () => {
    const msg = buildBookingMessage(req);
    expect(msg).toContain("Meu nome é Ana.");
    expect(msg).toContain("Luzes, Escova");
    expect(msg).toContain("05/12/2026 — período: Tarde");
  });
  it("abre o WhatsApp do número informado", () => {
    expect(buildWhatsAppLink(req, "5517000000000").startsWith("https://wa.me/5517000000000?text=")).toBe(true);
  });
});

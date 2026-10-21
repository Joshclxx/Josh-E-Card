import { profile } from "../profile";
import type { Profile } from "../profile";

function escapeVCard(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

// vCard 3.0 requires CRLF lines; escape fields before joining structured values.
export function createVCard(contact: Profile): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCard(contact.lastName)};${escapeVCard(contact.firstName)};;;`,
    `FN:${escapeVCard(`${contact.firstName} ${contact.lastName}`)}`,
    `TITLE:${escapeVCard(contact.role)}`,
    `EMAIL;TYPE=INTERNET:${escapeVCard(contact.email)}`,
    "END:VCARD",
    "",
  ].join("\r\n");
}

export function downloadContact(): void {
  const file = new Blob([createVCard(profile)], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "joshua-colobong.vcf";
  document.body.append(link);
  link.click();
  link.remove();
  // Defer revocation so browsers can begin consuming the download URL.
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

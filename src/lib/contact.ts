import { profile } from "../profile";
import type { Profile } from "../profile";
import contactPhoto from "../assets/contact-photo.jpg?inline";

function escapeVCard(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

// Fold at 75 UTF-8 bytes without splitting a character; continuation lines start with a space.
function foldVCardLine(line: string): string {
  const encoder = new TextEncoder();
  let folded = "";
  let lineBytes = 0;
  for (const character of line) {
    const characterBytes = encoder.encode(character).length;
    if (lineBytes + characterBytes > 75) {
      folded += "\r\n ";
      lineBytes = 1;
    }
    folded += character;
    lineBytes += characterBytes;
  }
  return folded;
}

// Embed the JPEG bytes so Contacts can import the photo without fetching an external URL.
export function createVCard(contact: Profile, photoBase64: string): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCard(contact.lastName)};${escapeVCard(contact.firstName)};;;`,
    `FN:${escapeVCard(`${contact.firstName} ${contact.lastName}`)}`,
    `TITLE:${escapeVCard(contact.role)}`,
    `EMAIL;TYPE=INTERNET:${escapeVCard(contact.email)}`,
    `TEL;TYPE=CELL:${escapeVCard(contact.mobile)}`,
    `NOTE:${escapeVCard(`WhatsApp: ${contact.mobile}\nViber: ${contact.viber}`)}`,
    `PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}`,
    "END:VCARD",
    "",
  ]
    .map(foldVCardLine)
    .join("\r\n");
}

export function downloadContact(): void {
  // Vite's inline JPEG import is a data URL, available synchronously on the user's click.
  const photoBase64 = contactPhoto.slice("data:image/jpeg;base64,".length);
  const file = new Blob([createVCard(profile, photoBase64)], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "joshua-colobong.vcf";
  try {
    document.body.append(link);
    link.click();
  } finally {
    link.remove();
    // Defer revocation so browsers can begin consuming the download URL.
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

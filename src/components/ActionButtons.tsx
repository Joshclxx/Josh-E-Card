import { useState } from "react";
import { contactHref } from "../profile";
import { downloadContact } from "../lib/contact";

export function ActionButtons() {
  const [message, setMessage] = useState("");

  function saveContact() {
    try {
      downloadContact();
      setMessage(
        "Contact file ready. Open the downloaded .vcf file to save Joshua’s contact.",
      );
    } catch {
      setMessage("The contact file could not be downloaded. Please try again.");
    }
  }

  return (
    <div className="main-actions grid grid-cols-2">
      <button className="action-button secondary-action" onClick={saveContact}>
        Save Contact
      </button>
      <a className="action-button primary-action" href={contactHref}>
        Let’s Connect
      </a>
      <p className="sr-only" role="status">
        {message}
      </p>
    </div>
  );
}

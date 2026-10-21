import { useState } from "react";
import { callHref } from "../profile";
import { downloadContact } from "../lib/contact";

export function ActionButtons() {
  const [message, setMessage] = useState("");

  function saveContact() {
    try {
      downloadContact();
      setMessage(
        "Contact card ready, including Joshua’s profile photo. Open the downloaded file and choose Add to Contacts or Import to save his details. Photo support depends on your Contacts app.",
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
      <a className="action-button primary-action" href={callHref}>
        Call Me
      </a>
      <p className={message ? "contact-save-status" : "sr-only"} role="status">
        {message}
      </p>
    </div>
  );
}

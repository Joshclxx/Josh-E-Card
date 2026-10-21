import { useEffect, useRef, useState } from "react";
import { Check, Copy, Share2, X } from "lucide-react";
import { fullName, profile } from "../profile";

type Feedback = { message: string; manualUrl?: string } | null;

export function ShareButton() {
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [isSharing, setIsSharing] = useState(false);
  const copyInput = useRef<HTMLInputElement>(null);
  const shareButton = useRef<HTMLButtonElement>(null);

  function dismissFeedback() {
    setFeedback(null);
    shareButton.current?.focus();
  }

  useEffect(() => {
    if (feedback?.manualUrl) {
      copyInput.current?.focus();
      copyInput.current?.select();
      return;
    }
    if (!feedback) return;
    const timeout = window.setTimeout(() => setFeedback(null), 6000);
    return () => window.clearTimeout(timeout);
  }, [feedback]);

  async function shareCard() {
    setIsSharing(true);
    setFeedback(null);
    const url = window.location.href;
    try {
      if (navigator.share) {
        try {
          await navigator.share({
            title: `${fullName} | Digital Business Card`,
            text: profile.role,
            url,
          });
          setFeedback({ message: "Card shared successfully." });
          return;
        } catch (error: unknown) {
          if (error instanceof DOMException && error.name === "AbortError")
            return;
        }
      }
      try {
        await navigator.clipboard.writeText(url);
        setFeedback({ message: "Card link copied to clipboard." });
      } catch {
        setFeedback({
          message:
            "Automatic sharing is unavailable. Copy this link to share the card.",
          manualUrl: url,
        });
      }
    } finally {
      setIsSharing(false);
    }
  }

  return (
    <>
      <button
        ref={shareButton}
        className="share-button round-button"
        aria-label="Share Joshua’s business card"
        onClick={() => void shareCard()}
        disabled={isSharing}
      >
        <Share2 aria-hidden="true" />
      </button>
      {feedback && (
        <div className="share-feedback" aria-label="Share card feedback">
          <div className="flex items-start gap-3">
            {feedback.manualUrl ? (
              <Copy className="feedback-icon" aria-hidden="true" />
            ) : (
              <Check className="feedback-icon" aria-hidden="true" />
            )}
            <p role="status" className="flex-1">
              {feedback.message}
            </p>
            <button
              className="dismiss-button"
              aria-label="Dismiss share message"
              onClick={dismissFeedback}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          {feedback.manualUrl && (
            <label className="copy-label">
              Card link — select and copy
              <input
                ref={copyInput}
                type="url"
                readOnly
                value={feedback.manualUrl}
                onFocus={(event) => event.currentTarget.select()}
                onKeyDown={(event) => {
                  if (event.key === "Escape") dismissFeedback();
                }}
              />
            </label>
          )}
        </div>
      )}
    </>
  );
}

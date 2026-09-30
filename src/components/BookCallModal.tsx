import { useState, ReactNode, FormEvent, CSSProperties } from "react";
import { MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const OWNER_EMAIL = "sd.naveedhussain@gmail.com";
// wa.me requires the number in international format, digits only, no + or spaces.
const OWNER_WHATSAPP = "919502686709";

interface BookCallButtonProps {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  onTriggerClick?: () => void;
}

export function BookCallButton({
  className,
  children,
  style,
  onTriggerClick,
}: BookCallButtonProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const resetAndClose = () => {
    setOpen(false);
    // Reset shortly after the close animation so the form doesn't visibly
    // reset while still visible.
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 300);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) return;

    const summary = [
      `New call request from ${name}`,
      `Email: ${email}`,
      `Phone: ${phone.trim()}`,
      "",
      "Message:",
      message.trim() || "No additional details.",
    ].join("\n");

    const mailtoHref = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
      `Call request from ${name}`
    )}&body=${encodeURIComponent(summary)}`;

    const whatsappHref = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(
      summary
    )}`;

    // Open WhatsApp via a real anchor click (more reliably honoured as a
    // direct user-initiated navigation than window.open in some embedded/
    // sandboxed environments) then hand off to the visitor's email client.
    const whatsappLink = document.createElement("a");
    whatsappLink.href = whatsappHref;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
    document.body.appendChild(whatsappLink);
    whatsappLink.click();
    document.body.removeChild(whatsappLink);

    window.location.href = mailtoHref;

    setSubmitted(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) {
          resetAndClose();
        } else {
          setOpen(true);
        }
      }}
    >
      <button
        type="button"
        onClick={() => {
          onTriggerClick?.();
          setOpen(true);
        }}
        className={className}
        style={style}
      >
        {children}
      </button>

      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <CheckCircle2 className="mx-auto text-accent" size={40} />
            <DialogHeader>
              <DialogTitle>Almost done</DialogTitle>
              <DialogDescription>
                WhatsApp opened in a new tab and your email app should be
                opening now, both pre-filled with your details. Just hit send
                in each to complete your request.
              </DialogDescription>
            </DialogHeader>
            <button
              type="button"
              onClick={resetAndClose}
              className="inline-flex items-center justify-center bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest px-5 py-3 hover:opacity-85 transition-opacity"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Book a call</DialogTitle>
              <DialogDescription>
                Share a few details and I&apos;ll follow up to find a time.
                Submitting opens a pre-filled WhatsApp message and email to
                me, both ready for you to send.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="bc-name" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Name *
                </label>
                <input
                  id="bc-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full border border-separator bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="bc-email" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email *
                </label>
                <input
                  id="bc-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border border-separator bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="bc-phone" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Phone *
                </label>
                <input
                  id="bc-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full border border-separator bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-accent"
                  placeholder="+1 555 000 0000"
                />
              </div>

              <div>
                <label htmlFor="bc-message" className="text-xs uppercase tracking-widest text-muted-foreground">
                  What would you like to discuss? (optional)
                </label>
                <textarea
                  id="bc-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="mt-1 w-full border border-separator bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-accent resize-none"
                  placeholder="A short note on what you'd like to cover"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest px-5 py-3 hover:opacity-85 transition-opacity"
              >
                <MessageCircle size={15} /> Send via WhatsApp &amp; Email
              </button>
              <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                <Mail size={12} /> Opens WhatsApp and your email app &mdash; nothing is sent automatically.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

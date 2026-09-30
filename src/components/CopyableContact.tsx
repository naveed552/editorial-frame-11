import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyableContactProps {
  href: string;
  label: string;
  copyValue: string;
  icon: React.ReactNode;
  className?: string;
}

export function CopyableContact({
  href,
  label,
  copyValue,
  icon,
  className = "",
}: CopyableContactProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the link itself still works as a fallback.
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={href}
        className="flex items-center gap-4 text-lg hover-highlight group"
      >
        <span className="text-muted-foreground group-hover:text-accent transition-colors">
          {icon}
        </span>
        <span>{label}</span>
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
        title="Copy to clipboard"
        className="p-1.5 text-muted-foreground hover:text-accent transition-colors"
      >
        {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
      </button>
      {copied && (
        <span className="text-xs text-accent animate-fade-in">Copied!</span>
      )}
    </div>
  );
}

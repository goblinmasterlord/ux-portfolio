import React, { useState } from 'react';
import { Mail, Linkedin, ArrowUpRight, Copy } from 'lucide-react';

const ProtectedContact = () => {
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  const email = {
    username: "marci.mocsonoky",
    domain: "gmail.com"
  };
  
  const linkedin = "https://www.linkedin.com/in/márton-mocsonoky-052091116/";

  const handleEmailClick = (e) => {
    e.preventDefault();
    if (!isEmailRevealed) {
      setIsEmailRevealed(true);
    } else {
      const fullEmail = `${email.username}@${email.domain}`;
      window.location.href = `mailto:${fullEmail}`;
    }
  };

  const handleLinkedinClick = () => {
    window.open(linkedin, '_blank');
  };

  const copyToClipboard = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(`${email.username}@${email.domain}`);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Email Button */}
      <div className="space-y-2">
        <p className="text-sm text-primary/40 ml-1">Email</p>
        <button 
          onClick={handleEmailClick}
          className="group relative w-full flex items-center gap-3 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-all duration-500"
        >
          <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <span className="text-primary/80 flex-grow text-left">
            {isEmailRevealed ? `${email.username}@${email.domain}` : "Click to reveal and send email"}
          </span>
          {isEmailRevealed && (
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
            >
              <Copy className="w-4 h-4" />
              <span className="text-sm">{copiedEmail ? 'Copied!' : 'Copy'}</span>
            </button>
          )}
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
        </button>
      </div>

      {/* LinkedIn Button */}
      <div className="space-y-2">
        <p className="text-sm text-primary/40 ml-1">LinkedIn</p>
        <button 
          onClick={handleLinkedinClick}
          className="group relative w-full flex items-center gap-3 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-all duration-500"
        >
          <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <Linkedin className="w-5 h-5" />
          </div>
          <span className="text-primary/80 flex-grow text-left">
            Connect on LinkedIn
          </span>
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
        </button>
      </div>
    </div>
  );
};

export default ProtectedContact;
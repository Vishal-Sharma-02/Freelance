export const BASE_URL =
  location.hostname === "localhost"
    ? "http://localhost:3000"
    : 
    "https://anaylixbackend.onrender.com";

export const WHATSAPP_MESSAGE =
  "Hello AnaylixHub ✨ I’m interested in your Digital Skill Mastery program. Please share full details.";
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;; // Replace with your WhatsApp number 
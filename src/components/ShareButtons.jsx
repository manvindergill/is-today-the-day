import {
  FaWhatsapp,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function ShareButtons({ result }) {
  const url = window.location.origin;

  const text =
    result === "YES."
      ? "I checked. Today was the day."
      : "I checked. Today was not the day.";

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `${text} ${url}`
  )}`;

  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${text} ${url}`
  )}`;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;

  return (
    <div className="flex items-center justify-center gap-5 mt-8 text-2xl">
      <a href={whatsappUrl} target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>

      <a href={facebookUrl} target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>

      <a href={xUrl} target="_blank" rel="noreferrer">
        <FaXTwitter />
      </a>

      <button
        onClick={() => {
          navigator.clipboard.writeText(
            `${text}\n\n${url}`
          );
          alert("Link copied for Instagram!");
        }}
      >
        <FaInstagram />
      </button>
    </div>
  );
}
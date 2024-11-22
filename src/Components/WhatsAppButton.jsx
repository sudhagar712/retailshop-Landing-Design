import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div>
        <a
      href="https://wa.me/9943863916" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <FaWhatsapp size={32} />
    </a>
    </div>
  )
}

export default WhatsAppButton

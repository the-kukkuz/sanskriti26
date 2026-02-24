"use client";

import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const contactPersons = [
    { name: "Akash Jinish (Sanskriti Head)", phone: "+919072739035" },
    { name: "Parvathy Gopan (Sanskriti Head)", phone: "+918129179168" },
    { name: "Goutham P B (Convenor)", phone: "+918590394832" },
    { name: "Suryalakshmi U S (Organising Secretary)", phone: "+918075897278" }
  ];

  const socialMedia = [
    { platform: "Instagram", icon: <FaInstagram className="text-2xl" />, link: "https://www.instagram.com/sanskriti.mace/" },
    { platform: "WhatsApp", icon: <FaWhatsapp className="text-2xl" />, link: "https://whatsapp.com/channel/0029Vb7Bn2A3rZZihSL7ni0T" }
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-900 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <h1 className="section-heading mb-16 !text-primary">Contact Us</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Left side - Google Map */}
          <div className="w-full lg:w-1/2 h-96 sm:h-[450px] bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://maps.google.com/maps?q=ma college of engineering kothamangalam&t=&z=10&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
          
          {/* Right side - Contact Information */}
          <div className="w-full lg:w-1/2 bg-neutral-800 p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-8 text-primary">For Query</h2>
            
            <div className="space-y-6 mb-10">
              {contactPersons.map((person, index) => (
                <div key={index} className="flex items-center">
                  <p className="text-lg">
                    <span className="font-medium text-primary">{person.name}: </span>
                    <a 
                      href={`https://wa.me/${person.phone.replace(/[^0-9]/g, '')}`}
                      className="text-secondary hover:underline hover:text-opacity-80 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {person.phone}
                    </a>
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <h3 className="text-xl font-medium mb-4 text-primary">Connect With Us</h3>
              <div className="flex items-center justify-center space-x-8">
                {socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    className="text-secondary hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${social.platform}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
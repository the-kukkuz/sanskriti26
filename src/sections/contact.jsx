import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const contactPersons = [
        { name: "Akash Jinish (Sanskriti Head)", phone: "+919072739035" },
        { name: "Parvathy Gopan (Sanskriti Head)", phone: "+918129179168" },
        { name: "Goutham P B (Convenor)", phone: "+918590394832" },
        { name: "Suryalakshmi U S (Organising Secretary)", phone: "+918075897278" }
    ];

    const socialMedia = [
        { platform: "Instagram", icon: <FaInstagram className="text-3xl" />, link: "https://www.instagram.com/sanskriti.mace/" },
        { platform: "WhatsApp", icon: <FaWhatsapp className="text-3xl" />, link: "https://whatsapp.com/channel/0029Vb7Bn2A3rZZihSL7ni0T" }
    ];

    return (
        <section className="min-h-screen w-full bg-purple-deep py-32 px-6 md:px-20" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-7xl mx-auto"
            >
                <h1 className="section-heading mb-24 !text-center md:!text-left !text-gold">Connect Pulse</h1>

                <div className="flex flex-col lg:flex-row gap-20 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 h-[450px] md:h-[600px] bg-purple-dark/10 rounded-[3rem] overflow-hidden border border-gold/10 shadow-3xl relative group"
                    >
                        <div className="absolute inset-0 bg-purple-deep/40 pointer-events-none group-hover:bg-purple-deep/0 transition-all duration-700"></div>
                        <iframe
                            src="https://maps.google.com/maps?q=ma college of engineering kothamangalam&t=&z=10&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "invert(90%) hue-rotate(240deg) brightness(80%) grayscale(0.5)" }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="MACE Location"
                        ></iframe>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 bg-purple-dark/10 p-10 md:p-16 rounded-[3rem] border border-gold/10 shadow-3xl flex flex-col backdrop-blur-3xl"
                    >
                        <h2 className="text-4xl font-bold mb-12 text-gold font-barlow uppercase tracking-tighter">Inquiry Hub</h2>

                        <div className="space-y-10 mb-16">
                            {contactPersons.map((person, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.6 }}
                                    className="flex flex-col md:flex-row md:items-center justify-between border-b border-gold/5 pb-6 group"
                                >
                                    <p className="text-secondary/40 font-barlow font-bold uppercase tracking-[0.2em] group-hover:text-gold transition-all duration-500">
                                        {person.name}
                                    </p>
                                    <a
                                        href={`https://wa.me/${person.phone.replace(/[^0-9]/g, '')}`}
                                        className="text-gold font-courier text-lg mt-3 md:mt-0 hover:text-white transition-all shadow-gold/20"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {person.phone}
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-xs font-bold mb-8 text-secondary/30 uppercase tracking-[0.5em] font-barlow">Digital Resonance</h3>
                            <div className="flex items-center space-x-12">
                                {socialMedia.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        whileHover={{ scale: 1.15, rotate: 5, backgroundColor: "rgba(250, 205, 4, 1)", color: "#0f0525" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-gold transition-all p-5 bg-purple-deep rounded-full border border-gold/10 shadow-xl"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Follow on ${social.platform}`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactPage;

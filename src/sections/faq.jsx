import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    { question: "1. What is Sanskriti‘26?", answer: "Sanskriti‘26 is MACE’s annual arts festival, bringing together music, dance, drama, and endless creativity for an unforgettable celebration." },
    { question: "2. When and where will Sanskriti‘26 take place?", answer: "The festival will be held on 6th, 7th and 8th of March 2026 at Mar Athanasius College of Engineering (MACE), with events happening across various venues on campus" },
    { question: "3. Who can participate in Sanskriti‘26?", answer: "Students from engineering colleges across India are welcome to showcase their talent and compete. Check specific event details for eligibility." },
    { question: "4. How can I register for events?", answer: "Event registrations can be done online through our official portal or via the registration links provided in each event card." },
    { question: "5. Is there a fee for participation?", answer: "Registration fees vary by event. Please check the individual event cards for specific details." },
    { question: "6. What types of events can we expect?", answer: "Sanskriti‘26 features music, dance, theatre, fine arts, photography, literature, fashion, and much more. Something for every soul!" },
    { question: "7. How can I stay updated on Sanskriti‘26?", answer: "Follow our Instagram page @sanskriti.mace and join our WhatsApp channel for the latest bulletins." },
    { question: "8. Will there be proshows?", answer: "Absolutely. Sanskriti is famous for its massive proshows. Stay tuned for the headline reveal!" },
    { question: "9. Who do I contact for queries?", answer: "You can reach out to our team via the contact hub on the website or through our social media platforms." },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-purple-deep py-32 px-6 md:px-8" id="faq">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="section-heading !text-gold mb-24 text-center">Curious Minds</h2>
                <div className="space-y-6">
                    {(showAll ? faqs : faqs.slice(0, 4)).map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-purple-dark/10 border border-gold/5 hover:border-gold/30 rounded-[2rem] overflow-hidden backdrop-blur-3xl transition-all duration-500 shadow-xl"
                        >
                            <button
                                className="w-full text-left p-8 md:p-10 flex justify-between items-center group"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-xl md:text-2xl font-bold text-secondary/60 group-hover:text-gold transition-all duration-500 font-barlow tracking-tight pr-12">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{
                                        rotate: openIndex === index ? 180 : 0,
                                        backgroundColor: openIndex === index ? "rgba(250, 205, 4, 1)" : "rgba(250, 205, 4, 0.05)",
                                        borderColor: openIndex === index ? "rgba(250, 205, 4, 1)" : "rgba(250, 205, 4, 0.2)"
                                    }}
                                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-colors duration-500"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={openIndex === index ? "text-purple-deep" : "text-gold"}
                                    >
                                        <path d="M2 5L8 11L14 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-8 md:px-10 pb-10 pt-0">
                                            <div className="w-full h-px bg-gold/10 mb-8"></div>
                                            <p className="text-secondary/60 font-courier text-lg md:text-xl leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}

                    {!showAll && (
                        <div className="w-full flex items-center justify-center pt-12">
                            <button
                                className="group relative px-12 py-5 bg-purple-dark/20 border border-gold/30 text-gold font-bold font-barlow uppercase tracking-[0.4em] rounded-full hover:bg-gold hover:text-purple-deep hover:scale-105 transition-all duration-500 overflow-hidden"
                                onClick={() => setShowAll(true)}
                            >
                                <span className="relative z-10 text-sm">Deep Reveal</span>
                                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10"></div>
                            </button>
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default FAQ;

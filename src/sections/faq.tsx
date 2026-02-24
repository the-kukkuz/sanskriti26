"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "1. What is Sanskriti‘25?", answer: "Sanskriti‘25 is MACE’s annual arts festival, bringing together music, dance, drama, and endless creativity for an unforgettable celebration." },
  { question: "2. When and where will Sanskriti‘25 take place?", answer: "The festival will be held on 6th, 7th and 8th of March 2025 at Mar Athanasius College of Engineering (MACE), with events happening across various venues on campus" },
  { question: "3. Who can participate in Sanskriti‘25?", answer: "All MACEians are welcome to showcase their talent and compete in a wide range of events. Some events may have specific eligibility criteria—check the event details for more info." },
  { question: "4. How can I register for events?", answer: "Event registrations will be conducted online through our official portal. Follow our WhatsApp channel and Instagram page for updates!" },
  { question: "5. Is there a fee for participation?", answer: "Most events are free to enter, but some might have a minimal registration fee. Details will be provided on the official event page."},
  { question: "6. What types of events can we expect?", answer: "Sanskriti‘25 features music, dance, theatre, fine arts, photography, literature, fashion, and much more. Whether you love performing or creating, there’s something for everyone!"},
  { question: "7. How can I stay updated on Sanskriti‘25?", answer: "Follow our WhatsApp Channel, Instagram, and the official Sanskriti‘25 website for the latest announcements, schedules, and event highlights."},
  { question: "8. Will there be food stalls and merchandise?", answer: "Absolutely! Enjoy a variety of delicious food and grab some exclusive Sanskriti‘25 merch at the festival."},
  { question: "9. Who do I contact for queries?", answer: "For any questions, reach out to the organizing team via our official WhatsApp channel or check our contact page on the website."},
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-neutral-900 p-8">
      <h2 className="section-heading !text-primary mb-4">FAQ</h2>
      <div className="w-full md:w-3/4 mx-auto bg-neutral-900 rounded-lg shadow-md">
        <div className="space-y-4">
          {(showAll ? faqs : faqs.slice(0, 4)).map((faq, index) => (
            <div
              key={index}
              className="border border-secondary bg-white rounded-lg p-5 cursor-pointer shadow-sm"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center text-lg font-medium text-primary">
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-black"
                >
                  ▼
                </motion.span>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-3 text-black overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className=" w-full flex items-center justify-center">
            <button
              className="mt-4 w-40 bg-primary hover:bg-opacity-85 text-white font-semibold text-lg py-2 rounded-lg"
              onClick={() => setShowAll(true)}
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
'use client';

import { motion } from 'framer-motion';

const competitions = [
  {
    id: 2,
    title: 'Band War',
    image: '/inter/Bandwar.jpg',
    description: `The guitars are roaring, the drums are thundering, and the battle is about to erupt! **BANDWAR**, the fiercest showdown of **SANSKRITI’25**, presented by **MACE Music Club**, brings top bands together for an all-out musical war 💥. With electrifying solos 🎸, powerhouse vocals 🎤, and heart-pounding beats 🥁, only one will own the stage!  

📍 **Venue:** OAT  
📅 **Date:** 08-03-2025 

🔥 Grab your spot, scream loud, and witness the madness of BANDWAR! 🎶🎸 Let the music do the talking and the stage set ablaze! 🎉🎤`,
    contact: [
      { name: 'Jerald', phone: '+91 9072708653' },
      { name: 'Rohit', phone: '+91 9074590802' },
    ],
    registrationLink: 'https://forms.gle/kS8VjWBzZnw5g1eq5',
    fee: '₹250/- per head'
  },
  {
    id: 1,
    title: 'ATRANGI',
    image: '/inter/atrangi.jpg',
    description: `💃 Get ready to set the stage on fire! **Divaat**, the fashion club of **MACE**, presents **ATRANGI**, the ultimate fashion face-off at **Sanskriti’25**! ✨ From daring designs to show-stopping couture, experience an electrifying fusion of creativity and confidence. This is not just a competition—it’s a revolution! 🚀💥  

    📍 **Venue:** OAT  
    📅 **Date:** 06-03-2025  

    🔥 Walk the ramp. Command the spotlight. Own the night! Whether you're serving avant-garde looks or redefining elegance, this is your moment to shine! The runway awaits—are you ready to turn heads and steal the show? 👑✨`,
    contact: [
      { name: 'Geethika', phone: '+91 8113823395' },
      { name: 'Ayisha', phone: '+91 8137003124' },
    ],
    registrationLink: 'https://forms.gle/9oPnCpLdGxmCwR4b9',
    fee: '₹2500/-'
  },
  {
    id: 3,
    title: 'Choreonight',
    image: '/inter/Choreonight.jpg',
    description: `The stage is set, the beats are pumping, and the battle is on! **CHOREONIGHT**, presented by **MAD_C - MACE Dance Club**, brings the best dance crews 💥 to compete with jaw-dropping stunts 🤸, powerful moves 💃, and unmatched energy 🔥. From hip-hop 🎧 to contemporary 🌊, every team is ready to own the night! 🏆  

📍 **Venue:** OAT  
📅 **Date:** 06-03-2025 

⏳ Be there, cheer loud, and witness the madness of CHOREONIGHT! 🎶🔥🎉`,
    contact: [
      { name: 'Devaganga', phone: '+91 7356977540' },
      { name: 'Abin', phone: '+91 9074295318' },
    ],
    registrationLink: 'https://forms.gle/aodjp1HM2VqJdTqi6',
    fee: '₹3000/-'
  },
];

export default function Competitions() {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col justify-center gap-6 p-6">
      <h2 className="section-heading !text-primary !text-left">Competitions</h2>
      <div className="w-full flex flex-wrap md:flex-row flex-col justify-center gap-6">
        {competitions.map((competition) => (
          <motion.div 
            key={competition.id} 
            className="bg-neutral-900 rounded-lg shadow-lg p-5 w-[320px] sm:w-[400px] h-full flex flex-col items-stretch"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={competition.image} 
              alt={competition.title} 
              className="w-full object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl font-semibold mb-2 text-primary">{competition.title}</h3>

            {/* Render description with bold text and line breaks */}
            <p 
              className="text-gray-400 mb-2 flex-grow" 
              dangerouslySetInnerHTML={{
                __html: competition.description
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Make **text** bold
                  .replace(/\n/g, '<br>') // Convert new lines to <br>
              }}
            />

            <div className="text-gray-300 font-medium flex-grow">
              <p>Contact:</p>
              {competition.contact.map((person, index) => (
                <p key={index} className="ml-2">{person.name}: {person.phone}</p>
              ))}
            </div>

            <p className="text-gray-300 font-medium my-2">Fee: {competition.fee}</p>

            <a 
                href={competition.registrationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
                >
                Register Now 🚀
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

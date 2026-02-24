import { motion } from 'framer-motion';

const competitions = [
    {
        id: 2,
        title: 'Band War',
        image: '/inter/Bandwar.jpg',
        description: `The guitars are roaring, the drums are thundering, and the battle is about to erupt! **BANDWAR**, the fiercest showdown of **SANSKRITI’26**, presented by **MACE Music Club**, brings top bands together for an all-out musical war 💥. With electrifying solos 🎸, powerhouse vocals 🎤, and heart-pounding beats 🥁, only one will own the stage!  

📍 **Venue:** OAT  
📅 **Date:** 08-03-2026 

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
        description: `💃 Get ready to set the stage on fire! **Divaat**, the fashion club of **MACE**, presents **ATRANGI**, the ultimate fashion face-off at **Sanskriti’26**! ✨ From daring designs to show-stopping couture, experience an electrifying fusion of creativity and confidence. This is not just a competition—it’s a revolution! 🚀💥  

    📍 **Venue:** OAT  
    📅 **Date:** 06-03-2026  

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
📅 **Date:** 06-03-2026 

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
        <section className="bg-purple-deep py-32 px-6 md:px-20" id="competitions">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full"
            >
                <h2 className="section-heading !text-center md:!text-left !text-gold mb-24">Inter-Collegiate Combat</h2>
                <div className="w-full flex flex-wrap justify-center gap-12">
                    {competitions.map((competition, index) => (
                        <motion.div
                            key={competition.id}
                            className="bg-purple-dark/20 border border-gold/10 hover:border-gold/40 rounded-[3rem] overflow-hidden shadow-2xl p-8 w-full max-w-[420px] flex flex-col items-stretch group transition-all duration-700 hover:-translate-y-4 backdrop-blur-xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-[4/5]">
                                <img
                                    src={competition.image}
                                    alt={competition.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/90 via-transparent to-transparent"></div>
                                <div className="absolute top-6 right-6 bg-gold text-purple-deep px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] font-barlow shadow-lg">LIVE '26</div>
                            </div>

                            <h3 className="text-4xl font-bold mb-6 text-gold font-barlow uppercase tracking-tighter group-hover:tracking-normal transition-all duration-500">{competition.title}</h3>

                            <p
                                className="text-secondary/50 mb-8 flex-grow font-inter text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: competition.description
                                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gold">$1</strong>')
                                        .replace(/\n/g, '<br>')
                                }}
                            />

                            <div className="text-secondary font-medium mb-8 bg-purple-deep/50 p-6 rounded-[2rem] border border-gold/10 group-hover:border-gold/30 transition-colors">
                                <p className="text-gold/50 text-xs uppercase tracking-[0.3em] mb-4 font-bold border-b border-gold/10 pb-2">Communication</p>
                                {competition.contact.map((person, index) => (
                                    <p key={index} className="text-sm mt-1 flex justify-between">
                                        <span className="opacity-60">{person.name}</span>
                                        <span className="text-gold/80 hover:text-gold transition-colors">{person.phone}</span>
                                    </p>
                                ))}
                            </div>

                            <div className="flex items-center justify-between mb-8 px-2">
                                <span className="text-secondary/40 text-xs uppercase tracking-[0.2em] font-bold">Registration Entry</span>
                                <span className="text-gold font-bold text-2xl tracking-tighter">{competition.fee}</span>
                            </div>

                            <a
                                href={competition.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-5 text-center rounded-[1.5rem] font-bold font-barlow uppercase tracking-[0.4em] bg-gold text-purple-deep hover:bg-white hover:scale-105 transition-all duration-500 shadow-3xl shadow-gold/20"
                            >
                                Secure Spot
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

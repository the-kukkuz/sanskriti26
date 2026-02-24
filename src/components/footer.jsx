import { motion } from "framer-motion";

export default function Footer() {
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { name: 'Instagram', href: 'https://instagram.com/sanskriti.mace' },
        { name: 'WhatsApp', href: 'https://wa.me/919072708653' },
        { name: 'Registration', href: '/arang' },
    ];

    return (
        <footer className="relative bg-purple-deep pt-24 pb-12 px-6 md:px-20 border-t border-gold/5 overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gold/[0.03] rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Column 1: Brand Info */}
                    <div className="flex flex-col items-start gap-6 lg:col-span-1">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative group"
                        >
                            <img
                                src="/images/S26logo.png"
                                alt="Sanskriti Logo"
                                className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(250,205,4,0.2)] animate-flap"
                            />
                            <div className="absolute inset-0 bg-gold/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>

                        <div>
                            <h2 className="text-gold font-barlow font-bold text-2xl tracking-[0.3em] uppercase mb-2">SANSKRITI '26</h2>
                            <p className="text-secondary/40 text-[10px] font-inter tracking-[0.3em] uppercase">#ArtBeyondAesthetics</p>
                        </div>

                        <p className="text-secondary/60 text-sm font-inter leading-relaxed max-w-xs">
                            The definitive annual celebration of art and culture at
                            <span className="text-secondary px-1 font-semibold">Mar Athanasius College of Engineering</span>.
                        </p>
                    </div>

                    {/* Column 2: Quick Navigation */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-gold/50 text-xs font-bold font-barlow uppercase tracking-[0.4em] mb-2 border-b border-gold/10 pb-2 w-fit">Registry</h4>
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-secondary/40 hover:text-gold hover:translate-x-2 transition-all duration-300 font-inter text-sm flex items-center gap-2"
                                >
                                    <span className="w-1 h-1 bg-gold/20 rounded-full group-hover:bg-gold transition-colors" />
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Pulse / Connect */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-gold/50 text-xs font-bold font-barlow uppercase tracking-[0.4em] mb-2 border-b border-gold/10 pb-2 w-fit">Connect</h4>
                        <nav className="flex flex-col gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary/40 hover:text-gold hover:translate-x-2 transition-all duration-300 font-inter text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Column 4: Newsletter/Call to action? or Location */}
                    <div className="flex flex-col gap-6 bg-purple-dark/20 border border-gold/5 p-8 rounded-[2.5rem] backdrop-blur-sm">
                        <p className="text-[10px] text-gold font-bold font-barlow uppercase tracking-[0.4em] opacity-60">Venue Spotlight</p>
                        <p className="text-secondary/80 text-sm font-inter leading-loose">
                            Mar Athanasius <br />
                            College of Engineering <br />
                            Kothamangalam, Kerala
                        </p>
                        <a
                            href="https://maps.app.goo.gl/9z7wB1vC1o9JvB8e6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-gold hover:text-white transition-colors uppercase font-bold tracking-[0.2em] underline underline-offset-8"
                        >
                            Locate via Orbit
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-gold/5 flex flex-col items-center justify-center">
                    <p className="text-[11px] font-inter uppercase tracking-[0.5em] text-gold/60 animate-text-shimmer text-gold-glow text-center">
                        &#169; Sanskriti '26 Web Team | All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function SocialMedia() {
    const socials = [
        {
            link: "#",
            icon: <FaInstagram className="w-5 md:w-6 h-5 md:h-6" />
        },
        {
            link: "#",
            icon: <FaWhatsapp className="w-5 md:w-6 h-5 md:h-6" />
        },
    ];

    return (
        <section className="z-50 flex flex-col items-center justify-center gap-4 bg-primary w-10 md:w-12 h-20 md:h-24 fixed right-5 top-1/2 -translate-y-1/2">
            {socials.map((social, index) => (
                <Link key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                </Link>
            ))}
        </section>
    );
}

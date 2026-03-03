import { ExpandableCardArang } from "@/components/ExpandableCardArang";
import { Meteors } from "@/components/meteors";
import { StarsBackground } from "@/components/stars-background";
import Navbar from "@/components/Navbar";
import { alaiEvents } from "@/data/events";

export default function Alai() {
    return (
        <>
            <Navbar />
            <section className="min-h-screen overflow-hidden w-full relative p-6 pt-28 md:p-20 md:pt-32 bg-purple-dark flex flex-col items-center justify-center">
                <h1 className="z-10 section-heading !text-center !text-gold mb-10 w-full max-w-7xl font-barlow tracking-tighter">Alai '26</h1>

                <div className="z-10 p-6 md:p-12 bg-purple/10 border border-gold/20 backdrop-blur-md mb-12 rounded-3xl w/full max-w-7xl shadow-2xl">
                    <h3 className="text-2xl md:text-4xl font-bold text-gold mb-6 font-barlow tracking-wide">GENERAL GUIDELINES</h3>
                    <ul className="list-decimal list-inside space-y-4 text-secondary font-courier text-sm md:text-base leading-relaxed">
                        <li>ALAI is an internal festival – only MACE students may register or contribute.</li>
                        <li>Submissions can be creative work, performances, posters, thrift items, stalls, etc., produced by current students.</li>
                        <li>No registration fees apply; just show up at the designated drop‑off point or sign‑up link.</li>
                        <li>All contributions are showcased for the campus community; judgement (if any) stays within college.</li>
                        <li>Drop‑off timings and locations will be announced on the noticeboard and via coordinators.</li>
                        <li>For poster/artwork, please submit high‑resolution digital files or well‑presented hard copies.</li>
                        <li>Thrifted items should be clean and wearable; vendors must bring their own setup.</li>
                        <li>Any questions? Contact the event leads; their numbers are available on the registration form.</li>
                        <li>Decisions of organisers are final and meant to keep the event fair and fun for everyone.</li>
                    </ul>
                </div>

                <div className="z-10 w-full flex justify-center py-10">
                    <ExpandableCardArang events={alaiEvents} />
                </div>

                <Meteors />
                <StarsBackground />

                {/* Decorative purple glows */}
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple/20 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -z-10"></div>
            </section>
        </>
    );
}

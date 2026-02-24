import { ExpandableCardArang } from "@/components/ExpandableCardArang";
import { Meteors } from "@/components/meteors";
import { ShimmerButton } from "@/components/shimmer-button";
import { StarsBackground } from "@/components/stars-background";
import Navbar from "@/components/Navbar";
import { groupEvents, singleEvents } from "@/data/events";
import { useState } from "react";

export default function Arang() {
    const [mode, setMode] = useState(true);

    return (
        <>
            <Navbar />
            <section className="min-h-screen overflow-hidden w-full relative p-6 pt-28 md:p-20 md:pt-32 bg-purple-dark flex flex-col items-center justify-center">
                <h1 className="z-10 section-heading !text-center !text-gold mb-10 w-full max-w-7xl font-barlow tracking-tighter">Arang '26</h1>

                <div className="z-10 p-6 md:p-12 bg-purple/10 border border-gold/20 backdrop-blur-md mb-12 rounded-3xl w-full max-w-7xl shadow-2xl">
                    <h3 className="text-2xl md:text-4xl font-bold text-gold mb-6 font-barlow tracking-wide">GENERAL GUIDELINES</h3>
                    <ul className="list-decimal list-inside space-y-4 text-secondary font-courier text-sm md:text-base leading-relaxed">
                        <li>Participation is open for all engineering colleges. Everyone should bring the ID card of their respective colleges.</li>
                        <li>Both house-wise and individual participation are allowed.</li>
                        <li>No registration fees for MACEians.</li>
                        <li>Participants from various colleges will be judged under the same category.</li>
                        <li>If participants from different houses compete together in a group event, they will not be considered representatives of their respective houses, and no points will be awarded to the house if they secure a prize.</li>
                        <li>Cash awards will be given for each event.</li>
                        <li>No event will be cancelled due to a minimum number of participants.</li>
                        <li>If only one participant is present in an event, the event will still be conducted. If the participant meets the required standards, they will receive half of the designated cash prize.</li>
                        <li>Only one participant from a team needs to register for a group event.</li>
                        <li>Participants must strictly follow the guidelines of the respective events. Failure to meet any required criteria will result in disqualification.</li>
                        <li>Event coordinators are assigned to each event. Participants can approach them for any queries, and their contact details will be shared on the respective event posters.</li>
                        <li>Kalaprathiba and Kalathilakam titles will be awarded to participants who secure the highest number of first prizes (at least 3 first prizes with one being a stage event). Off-stage items (writing competitions, painting, etc.) are also considered. Participation points will not be calculated.</li>
                        <li>Decisions of the judges will be final and cannot be appealed.</li>
                        <li>The venue and time details may change and will be updated by the event coordinators.</li>
                    </ul>
                </div>

                <div className="z-10 my-8 w-full flex justify-center items-center">
                    <ShimmerButton
                        isActive={mode}
                        onClick={() => setMode(true)}
                        borderRadius="1.5rem 0 0 1.5rem"
                    >
                        Individual Events
                    </ShimmerButton>
                    <ShimmerButton
                        isActive={!mode}
                        onClick={() => setMode(false)}
                        borderRadius="0 1.5rem 1.5rem 0"
                    >
                        Group Events
                    </ShimmerButton>
                </div>

                <div className="z-10 w-full flex justify-center py-10">
                    <ExpandableCardArang events={mode ? singleEvents : groupEvents} />
                </div>

                <Meteors />
                <StarsBackground />

                {/* Decorative purple glows */}
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple/20 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -z-10"></div>
            </section>
        </>
    )
}

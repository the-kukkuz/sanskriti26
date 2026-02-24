import React, { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import PixieDustCursor from "@/components/PixieDustCursor";
import About from "@/sections/about";
import Competitions from "@/sections/competitions";
import ContactPage from "@/sections/contact";
import Events from "@/sections/events";
import FAQ from "@/sections/faq";
import Hero from "@/sections/hero";

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="bg-purple-deep min-h-screen text-secondary">
            <PixieDustCursor />
            {loading && <Preloader onFinish={() => setLoading(false)} />}

            {!loading && (
                <>
                    <Navbar />
                    <div className="flex flex-col">
                        <Hero />
                        <About />
                        <Events />
                        <Competitions />
                        <ContactPage />
                        <FAQ />
                        <Footer />
                    </div>
                </>
            )}
        </div>
    );
}

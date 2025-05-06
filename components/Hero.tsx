export default function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden pt-40 pb-20"
            data-aos="zoom-out"
            data-aos-easing="ease"
            data-aos-duration="1000"
        >
            <div className="absolute h-14 w-14 bg-blue-500/20 top-1/2 left-80 -z-10 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]" />
            <div className="absolute h-14 w-14 bg-purple-500/20 top-1/2 right-80 -z-10 rounded-full animate-ping" />
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <div className="flex justify-center mt-6">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl text-white font-medium mb-6">
                                Smart AI <br /> Safer Systems.
                            </h1>
                        </div>
                    </div>
                    <div>
                        <button
                            className="relative flex items-center justify-center gap-2.5 rounded-full text-base font-medium py-3.5 px-6 mt-10 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white transition-all duration-300 ring-4 ring-transparent hover:ring-blue-500/40 hover:from-blue-600 hover:to-purple-700"
                            aria-label="Talk to us"
                        >
                            Talk to us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
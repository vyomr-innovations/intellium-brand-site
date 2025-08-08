/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const partners = [
    {
        name: "Open AI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png",
    },
    {
        name: "DeepSeek",
        logo: "./deepseeklogo.png"
    },
    {
        name: "Loveble Ai",
        logo: "./assets/images/logo/lovableai.svg"

    },
    {
        name: "Anthropic AI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/1200px-Anthropic_logo.svg.png"
    },
    {
        name: "Pinecone",
        logo: "./pinecone_icon.png"
    },
    {
        name: "LangChain",
        logo: "./langchan.png"
    },
    {
        name: "Llama",
        logo: "./llama_icon.png"
    },
    {
        name: "Google Gemini Veo 3",
        logo: "./gemini-veo.png"
    }
];

const PartnerCard = ({
    logo,
    name,
}: {
    logo: string;
    name: string;
}) => {
    return (
        <figure className={cn(
            "w-[200px] md:w-[250px] flex items-center justify-center relative flex-shrink-0 px-8"
        )}>
            <div className="relative h-15 w-full">
                <img
                    className="object-scale-down aspect-video filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300 absolute inset-0 w-full h-full"
                    alt={name}
                    src={logo}
                />
            </div>
        </figure>
    );
};

export function TechPartner() {
    return (
        <section className=" w-full mx-auto bg-[rgba(0,0,0,0.7)] backdrop-blur-md py-24 overflow-hidden flex flex-col items-center justify-center rounded-xl">
            <div className="max-w-lg mx-auto px-8 sm:px-12 lg:px-16 mb-12">
                <h1 className="text-center text-3xl md:text-3xl font-medium text-white">
                    Our Experties
                </h1>
            </div>

            <Marquee pauseOnHover className="[--duration:40s]  mx-6 w-[90%]  ">
                {partners.map((partner) => (
                    <PartnerCard key={partner.name} {...partner} />
                ))}
            </Marquee>
          
        </section>
    );
}

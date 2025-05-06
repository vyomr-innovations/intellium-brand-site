import { LucideIcon, Dribbble, Code2, BadgeDollarSign, Aperture } from "lucide-react";

interface Tool {
    name: string;
    icon: LucideIcon;
    bgColor: string;
    textColor: string;
}

const tools: Tool[] = [
    {
        name: "Social Media",
        icon: Dribbble,
        bgColor: "bg-red-500/20",
        textColor: "text-red-500",
    },
    {
        name: "Coding",
        icon: Code2,
        bgColor: "bg-default-500/20",
        textColor: "text-default-500",
    },
    {
        name: "Marketing",
        icon: BadgeDollarSign,
        bgColor: "bg-indigo-500/20",
        textColor: "text-indigo-500",
    },
    {
        name: "Seo",
        icon: Aperture,
        bgColor: "bg-yellow-500/20",
        textColor: "text-yellow-500",
    },
];

export default function Tools() {
    return (
        <section
            id="tools"
            className="py-20"
            data-aos="zoom-in"
            data-aos-easing="ease"
            data-aos-duration="1000"
        >
            <div className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-medium capitalize text-white mb-4">60+ Powerfull Tools</h2>
                        <p className="text-sm text-default-200 font-medium">
                            Start working with Tailwindcss. It allows you to compose complex designs by combining and customizing utility classes.
                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-6 sm:grid-cols-2 gap-6">
                    {tools.map((tool) => (
                        <div key={tool.name} className="bg-default-950/40 w-50 rounded-xl backdrop-blur-3xl">
                            <div className="p-6 max-w-50">
                                <div className="flex items-center gap-4 mb-4">
                                    <div
                                        className={`inline-flex items-center justify-center h-10 w-10 ${tool.bgColor} ${tool.textColor} rounded-lg`}
                                    >
                                        <tool.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-medium text-default-200">{tool.name}</h3>
                                </div>
                                <a
                                    href="#"
                                    className="inline-flex gap-2 items-center relative text-primary group"
                                >
                                    <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                                    Select & try
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4"
                                    >
                                        <path d="M18 8L22 12L18 16" />
                                        <path d="M2 12H22" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
                    >
                        More Tools
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <path d="M18 8L22 12L18 16" />
                            <path d="M2 12H22" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

import { CanvasRevealEffectDemo } from "./service-card"
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
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-medium capitalize text-white">Our Services</h2>
                </div>
                <CanvasRevealEffectDemo />
            </div>
        </section>
    );
}
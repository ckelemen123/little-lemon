import Carousel from './TestimonialsCarousel'
import TestimonialCard from './Cards/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Csilla Kelemen" description="Here is my quote about the food"/>
                <TestimonialCard name="Aronn Rhinehart" description="Food quote here"/>
                <TestimonialCard name="Julie Jackson" description="Food quote here"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}


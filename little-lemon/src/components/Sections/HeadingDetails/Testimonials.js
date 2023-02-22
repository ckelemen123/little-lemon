import Carousel from './TestimonialsCarousel'
import TestimonialCard from './Cards/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Csilla Kelemen" description="I love the fresh ingredients and friendly staff."/>
                <TestimonialCard name="Aronn Rhinehart" description="This is my go-to restaurant to take my friends, nothing beats their lemon cake."/>
                <TestimonialCard name="Julie Jackson" description="I love the specials and the fresh ingredients."/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}


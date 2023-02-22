import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/greeksalad.jpg';
import Bruschetta from '../../../assets/bruschetta.jpeg';
import LemonDessert from '../../../assets/lemondessert.jpg';
import SpecialCard from './Cards/SpecialsCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$9.99" description="Sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese."/>
                <SpecialCard image={Bruschetta}name="Bruschetta" price="$9.99" description="Bread topped with fresh tomatoes, mozzarella cheese, basil, red onion, olive oil, red wine vinegar, garlic, salt, and black pepper."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$6.99" description="Fluffly vanilla cream cake topped with decadent lemon frosting."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}


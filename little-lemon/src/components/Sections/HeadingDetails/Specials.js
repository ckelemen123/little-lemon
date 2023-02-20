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
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$9.99" description="add ingredients here"/>
                <SpecialCard image={Bruschetta}name="Bruschetta" price="$9.99" description="add ingredients here"/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$6.99" description="add ingredients here"/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}


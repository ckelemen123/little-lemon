import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/greeksalad.jpg';
import Bruschetta from '../../../assets/bruschetta.jpeg';
import LemonDessert from '../../../assets/lemondessert.jpg';
import SpecialCard from './Cards/SpecialsCard';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={GreekSalad} name="Greek Salad" price="$9.99" description="Sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese."/>
            <SpecialCard image={Bruschetta}name="Bruschetta" price="$9.99" description="Bread topped with fresh tomatoes, mozzarella cheese, basil, red onion, olive oil, red wine vinegar, garlic, salt, and black pepper."/>
            <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$6.99" description="Fluffly vanilla cream cake topped with decadent lemon frosting."/>
        </Carousel>
    )
}


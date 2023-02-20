import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/greeksalad.jpg';
import Bruschetta from '../../../assets/bruschetta.jpeg';
import LemonDessert from '../../../assets/lemondessert.jpg';
import SpecialCard from './Cards/SpecialsCard';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={GreekSalad} name="Greek Salad" price="$9.99" description="ingredients"/>
            <SpecialCard image={Bruschetta}name="Bruschetta" price="$9.99" description="ingredients"/>
            <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$6.99" description="ingredients"/>
        </Carousel>
    )
}


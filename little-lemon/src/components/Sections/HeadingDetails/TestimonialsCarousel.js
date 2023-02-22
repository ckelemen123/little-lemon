import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './Cards/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Csilla Kelemen" description="fI love the fresh ingredients and friendly staff."/>
            <TestimonialCard name="Aronn Rhinehart" description="fThis is my go-to restaurant to take my friends, nothing beats their lemon cake."/>
            <TestimonialCard name="Julie Jackson" description="I love the specials and the fresh ingredients."/>
             </Carousel>
    )
}


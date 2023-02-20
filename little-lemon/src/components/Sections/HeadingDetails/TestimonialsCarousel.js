import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './Cards/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Csilla Kelemen" description="food quote here"/>
            <TestimonialCard name="Aronn Rhinehart" description="food quote here"/>
            <TestimonialCard name="Julie Jackson" description="food quote here"/>
             </Carousel>
    )
}


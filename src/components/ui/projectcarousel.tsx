import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import lb1 from '../../../public/leaderboard_desktop_1.png';
import lb2 from '../../../public/leaderboard_desktop_2.png';
import lb3 from '../../../public/leaderboard_desktop_3.png';
import { Image } from 'astro:assets';

export const ProjectCarousel = () => {
    return (
        <Carousel className="w-3/4 md:w-full mt-4 mx-auto">
        <CarouselContent>
            <CarouselItem>
                <img className="m-auto" src="/leaderboard_desktop_1.png" alt="Leaderboard" />
            </CarouselItem>
            <CarouselItem>
                <img className="m-auto" src="/leaderboard_desktop_2.png" alt="Leaderboard" />
            </CarouselItem>     
            <CarouselItem>
                <img className="m-auto" src="/leaderboard_desktop_3.png" alt="Leaderboard" />
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
    )
}


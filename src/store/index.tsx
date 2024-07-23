'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Header, Footer } from "@/common";
import { satisfy, nosifer } from "@/lib/fonts";
import { SWIPER_IMAGE } from '@/lib/swiper-Image';
import { Detalles } from "./components"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function StorePage() {
    return (
        <div className={`${satisfy.variable} ${nosifer.variable} w-full m-auto`}>
            <Header />
            <Swiper
                className="w-full md:!pt-32 !pt-20 !pb-12"
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
            >
                {
                    SWIPER_IMAGE.map(({ id, src }) => {
                        return (
                            <SwiperSlide key={id} className="bg-center bg-cover !w-[350px] !h-[350px]">
                                <img className="block w-full" src={`${src}`} alt={`Nature ${id}`} />
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>
            <div className='w-full flex justify-center'>
                <Image
                    className=''
                    src="/images/marDetalles.png"
                    alt="logo de portada"
                    width={260}
                    height={260}
                />
            </div>
            {/* <p className="font-nosifer p-3 text-center text-4xl">Mardetalles</p> */}
            <Detalles />
        </div>

    )
}
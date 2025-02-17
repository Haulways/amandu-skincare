import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef } from 'react';
import Product from '../Product';

const FilteringProducts = () => {
    const [activeTab, setActiveTab] = useState(0);
    const swiperRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <section className='xui-container xui-py-3'>
            <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-6'>
                <h3 onClick={() => handleTabClick(0)} className={'xui-cursor-pointer xui-font-w-600 xui-font-sz-120 ' + (activeTab === 0 ? 'xui-text-black' : 'color-inactive-grey')}>Best Sellers</h3>
                <h3 onClick={() => handleTabClick(1)} className={'xui-cursor-pointer xui-font-w-600 xui-font-sz-120 ' + (activeTab === 1 ? 'xui-text-black' : 'color-inactive-grey')}>New Arrivals</h3>
                <h3 onClick={() => handleTabClick(2)} className={'xui-cursor-pointer xui-font-w-600 xui-font-sz-120 ' + (activeTab === 2 ? 'xui-text-black' : 'color-inactive-grey')}>Trending Now</h3>
            </div>
            <div className='xui-mt-2'>
                {activeTab === 0 && 
                    <>
                        <Swiper className='product-swiper' modules={[Pagination]} onSwiper={(swiper) => (swiperRef.current = swiper)} slidesPerView={4} spaceBetween={18} autoplay={{delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true }} breakpoints={{320: {slidesPerView: 1, spaceBetween: 18, }, 1024: {slidesPerView: 4}, }}>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                        </Swiper>
                    </>
                }
                {activeTab === 1 && 
                    <>
                        <Swiper className='product-swiper' modules={[Pagination]} onSwiper={(swiper) => (swiperRef.current = swiper)} slidesPerView={4} spaceBetween={18} autoplay={{delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true }} breakpoints={{320: {slidesPerView: 1, spaceBetween: 18, }, 1024: {slidesPerView: 4}, }}>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                        </Swiper>
                    </>
                }
                {activeTab === 2 && 
                    <>
                        <Swiper className='product-swiper' modules={[Pagination]} onSwiper={(swiper) => (swiperRef.current = swiper)} slidesPerView={4} spaceBetween={18} autoplay={{delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true }} breakpoints={{320: {slidesPerView: 1, spaceBetween: 18, }, 1024: {slidesPerView: 4}, }}>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product />
                            </SwiperSlide>
                        </Swiper>
                    </>
                }
                        
            </div>
        </section>
    );
};

export default FilteringProducts;
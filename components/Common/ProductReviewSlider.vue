<template>
    <CommonCSectionWrapper title="Отзывы">
        <div class="h-screen">
            <Swiper class="h-full w-screen" :slides-per-view="3.5" :space-between="30" :breakpoints="{
                0: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2.5, spaceBetween: 25 },
                1000: { slidesPerView: 3.5, spaceBetween: 30 }
            }" pagination>
                <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
                    <div class="bg-white rounded-lg p-4 shadow-sm text-left max-h-52 custom-shadow cursor-pointer">
                        <img :src="testimonial.image" alt="Product Image" class="w-12 h-12 object-cover -mb-12" />
                        <h3 class="text-lg font-bold pl-20">{{ testimonial.title }}</h3>
                        <p class="text-sm text-gray-600 max-w-64 ml-20">
                            {{ testimonial.description }}
                        </p>
                        <div class="flex items-center gap-3 mt-3">
                            <img :src="testimonial.reviewerImage" alt="Reviewer Image"
                                class="w-8 h-8 rounded-full object-cover" />
                            <div>
                                <p class="text-sm font-semibold">{{ testimonial.reviewerName }}</p>
                                <p class="text-xs text-gray-500">
                                    {{ testimonial.date }} - {{ testimonial.time }}
                                </p>
                            </div>
                        </div>
                        <p class="text-sm font-bold text-yellow-400 mt-3">
                            ⭐ ⭐ ⭐ ⭐ {{ testimonial.rating }}
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </CommonCSectionWrapper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
export default {
    components: { Swiper, SwiperSlide },
    data() {
        return {
            testimonials: [
                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },
                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },

                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },

                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },

                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },

                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },

                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },

                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },

                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },


                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },


                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },


                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },

                {
                    image: '/images/ReviewCards/image-title.svg',
                    title: 'Cборка Coco chanel',
                    description: 'Нашел подбор парфюма, духи, гель, шампунь. Просто шикарный подбор, запах очень приятный.',
                    reviewerImage: '/images/ReviewCards/person-img.svg',
                    reviewerName: 'Шохрух Шавкиев',
                    date: '09.01.2023',
                    time: '14:21',
                    rating: 4.5,
                },
            ],
        };
    },
};

</script>

<style>
@import 'tailwindcss/tailwind.css';

.custom-shadow:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
}
</style>

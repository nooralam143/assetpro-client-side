
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../Review/style.css';
import { Scrollbar } from 'swiper/modules';
import { Rating } from 'flowbite-react';

const reviews = [
  {
    id: 1,
    name: 'John D.',
    role: 'IT Manager',
    comment: 'AssetPro has transformed the way we manage our IT assets. The intuitive interface and robust features have made tracking and maintaining our equipment a breeze. The reporting tools are particularly impressive, providing valuable insights for strategic decision-making. Highly recommended for any organization serious about efficient asset management.',
    photo: "/profile1.jpg"
  },
  {
    id: 2,
    name: 'Sarah P.',
    role: 'Operations Director',
    comment: 'AssetPro has significantly improved our operational efficiency. The preventive maintenance scheduling has helped us reduce downtime, and the centralized asset tracking system has made it easy to locate and manage resources across multiple locations. The level of detail in asset data is exactly what we needed. AssetPro is a game-changer for our organization.',
    photo: "/profile2.jpg"
  },
  {
    id: 3,
    name: 'Noor A.',
    role: 'Operations Director',
    comment: 'AssetPro has significantly improved our operational efficiency. The preventive maintenance scheduling has helped us reduce downtime, and the centralized asset tracking system has made it easy to locate and manage resources across multiple locations. The level of detail in asset data is exactly what we needed. AssetPro is a game-changer for our organization.',
    photo: "/profile1.jpg"
  },
  // Add more reviews as needed
];

const ReviewSwiper = () => {
  return (
    <>
      <Swiper
        scrollbar={{ hide: true }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <figure className="mx-auto max-w-screen-md text-center">
              <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <h3 className="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                  Testimonials
                </h3>
                {/* Container for the Testimonials */}
                <div className="flex gap-6 text-center md:flex-row lg:gap-12">
                  {/* First Testimonial */}
                  <div className="mb-12 md:mb-0">
                    <div className="flex flex-col text-left justify-center">
                    <div className="mb-6 flex justify-center">
                      <img
                        src={review.photo}
                        className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                        alt="Testimonial 1"
                      />
                    </div>
                    <h5 className="mb-4 text-xl font-semibold">{review.name}</h5>
                    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                      {review.role}
                    </h6>
                    <div className='mb-4'>
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                      </Rating>
                    </div>
                  </div>
                    </div>
                  <div>
                    <p className="mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      {review.comment}
                    </p>
                  </div>
                </div>
              </div>


            </figure>

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewSwiper;

import { PhoneIcon } from "@heroicons/react/24/solid";
import Button from "./components/Button";
import "./styles.css";
import ImageCard from "./components/ImageCard";
import TestimoniCard from "./components/TestimoniCard";
import Input from "./components/Input";

export default function HomePage() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col items-center self-center px-8 py-20"
      >
        <h1 className="mb-8 pt-0 text-center text-4xl font-semibold md:pt-8">
          Welcome to BarberBob
        </h1>
        <Button>Book your Appointment</Button>
        <span className="my-8 flex gap-2">
          <PhoneIcon className="w-5" />
          <h3 className="text-xl">0822-48141434</h3>
        </span>
        <div className="mb-8 h-[50vw] w-full overflow-hidden rounded-xl lg:h-[470px] lg:w-[910px]">
          <img
            src="./images/kid.jpg"
            alt="Kid on the barbershop"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mx-auto lg:max-w-[720px] lg:px-[30px]">
          <p className="mb-2.5">
            Unleash your potential and look your absolute best with the expert
            grooming services at BarberBob. Our dedicated and professional
            capster is here to help you achieve the ultimate handsome, tailored
            to your unique style.
          </p>
          <p className="mb-2.5">
            Step into our shop and experience a transformation like no other. We
            are committed to providing a relaxed atmosphere where you can unwind
            while receiving top-notch haircuts and grooming.
          </p>
          <p className="mb-2.5">
            Book your appointment today and discover why BarberBob is the go-to
            destination for those who value style, precision, and an
            unforgettable barber experience.
          </p>
        </div>
      </section>
      <section id="about" className="w-full bg-gray-100 px-8 py-20">
        <div className="mx-auto lg:max-w-[720px] lg:px-[30px]">
          <h1 className="mb-5 text-center text-3xl font-semibold">About Us</h1>
          <p className="mb-2.5">
            Welcome to BarberBob, where we believe that every haircut is an
            opportunity to enhance your style and boost your confidence. As a
            professional barber with years of experience, I am dedicated to
            helping you achieve your maximum handsome.
          </p>
          <p className="mb-2.5">
            At BarberBob, we offer a relaxing and friendly atmosphere where you
            can unwind while receiving top-notch grooming services. From classic
            cuts to modern styles, I take the time to understand what you want
            and ensure that you leave my chair looking and feeling your best.
          </p>
          <p className="mb-2.5">
            My mission is simple: to provide personalized service that
            transforms not just your look, but also your attitude. I stay
            updated on the latest trends and techniques, using only the finest
            products to ensure your hair always looks its best. Whether you’re
            coming in for a simple trim or a complete style overhaul, rest
            assured that you’re in skilled hands. Join me at BarberBob and
            experience the difference of a barber who truly cares about your
            appearance.
          </p>
        </div>
      </section>

      <section id="services" className="flex flex-col items-center px-8 py-20">
        <h2 className="mb-5 text-center text-3xl font-semibold">
          Welcome to BarberBob - Your Ultimate Grooming Destination
        </h2>
        <div className="relative flex w-full flex-wrap justify-center gap-8 lg:w-10/12">
          <ImageCard
            title="Haircuts"
            image="./images/services/service-1.jpg"
            desc="We provide expert haircuts tailored to your style, making every visit a chance to express yourself."
          />
          <ImageCard
            title="Beard Grooming"
            image="./images/services/service-2.jpg"
            desc="We provide expert haircuts tailored to your style, making every visit a chance to express yourself."
          />
          <ImageCard
            title="Shaves"
            image="./images/services/service-3.jpg"
            desc="We provide expert haircuts tailored to your style, making every visit a chance to express yourself."
          />
          <ImageCard
            title="Hair Coloring"
            image="./images/services/service-4.jpg"
            desc="We provide expert haircuts tailored to your style, making every visit a chance to express yourself."
          />
          <ImageCard
            title="Hair Styling"
            image="./images/services/service-5.jpg"
            desc="We provide expert haircuts tailored to your style, making every visit a chance to express yourself."
          />
          <ImageCard
            title="Scalp Treatments"
            image="./images/services/service-6.jpg"
            desc="We provide expert haircuts tailored to your style, making every visit a chance to express yourself."
          />
          <ImageCard
            title="Children's Cut"
            image="./images/services/service-7.jpg"
            desc="We provide expert haircuts tailored to your style, making every visit a chance to express yourself."
          />
          <ImageCard
            title="Consultation"
            image="./images/services/service-8.jpg"
            desc="We provide expert haircuts tailored to your style, making every visit a chance to express yourself."
          />
        </div>
      </section>

      <div className="w-full overflow-hidden md:h-[500px]">
        <img src="./images/barber.jpg" className="h-full w-full object-cover" />
      </div>

      <section
        id="testimonial"
        className="flex flex-col items-center px-8 py-20"
      >
        <h2 className="mb-5 text-center text-3xl font-semibold">
          What Our Clients Say About Us
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <TestimoniCard
            name="Fendi"
            address="Lelilef, Weda Tengah"
            quote="BarberBob is simply the best! Every haircut I get makes me feel like a new man. The attention to detail is unmatched!"
          />
          <TestimoniCard
            name="Aldi Saputra"
            address="Tondasi, Muna Barat"
            quote="I've been to many barbers, but none compare to the experience I had at BarberBob. The atmosphere is welcoming, and the cuts are always on point!"
          />
          <TestimoniCard
            name="Muhammad Jefri"
            address="Pulau Balu, Muna Barat"
            quote="BarberBob transformed my look! His expertise and advice made all the difference. I walk out feeling confident every time. Highly recommend!"
          />
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col items-center bg-gray-100 px-8 py-20"
      >
        <h2 className="mb-5 text-3xl font-semibold">Get in Touch</h2>
        <form
          action="aldi"
          className="flex w-full flex-wrap justify-end md:w-2xl"
        >
          <div className="flex w-full flex-wrap justify-between md:flex-nowrap">
            <Input height="12" placeholder="Name" className="bg-white" />
            <Input height="12" placeholder="Email" className="bg-white" />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="mb-2 h-[150px] max-h-[150px] w-full rounded-2xl border-2 border-gray-200 bg-white p-4 md:mb-4"
          ></textarea>
          <Button>Send</Button>
        </form>
      </section>
    </>
  );
}

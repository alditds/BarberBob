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
          Selamat Datang di BarberBob
        </h1>
        <Button>Buat Janji?</Button>
        <span className="my-6 flex gap-2">
          <PhoneIcon className="w-5" />
          <h3 className="text-xl">0822-XXXX-XXXX</h3>
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
            Bebaskan potensi Anda dan tampil terbaik dengan layanan perawatan
            ahli di BarberBob. Penata rambut kami yang berdedikasi dan
            profesional siap membantu Anda mendapatkan penampilan terbaik, yang
            disesuaikan dengan gaya unik Anda.
          </p>
          <p className="mb-2.5">
            Masuklah ke tempat kami dan rasakan transformasi yang tiada duanya.
            Kami berkomitmen untuk menyediakan suasana santai tempat Anda dapat
            bersantai sambil menerima potongan rambut dan perawatan terbaik.
          </p>
          <p className="mb-2.5">
            Pesan janji temu Anda hari ini dan temukan mengapa BarberBob menjadi
            tujuan utama bagi mereka yang menghargai gaya, ketepatan, dan
            pengalaman pangkas rambut yang tak terlupakan.
          </p>
        </div>
      </section>
      <section id="about" className="w-full bg-gray-100 px-8 py-20">
        <div className="mx-auto lg:max-w-[720px] lg:px-[30px]">
          <h1 className="mb-5 text-center text-3xl font-semibold">About Us</h1>
          <p className="mb-2.5">
            Selamat datang di BarberBob, tempat kami percaya bahwa setiap potong
            rambut adalah kesempatan untuk meningkatkan gaya dan kepercayaan
            diri Anda. Sebagai tukang cukur profesional dengan pengalaman
            bertahun-tahun, saya berdedikasi untuk membantu Anda mencapai
            ketampanan maksimal.
          </p>
          <p className="mb-2.5">
            Di BarberBob, kami menawarkan suasana yang santai dan ramah, tempat
            Anda dapat bersantai sambil menerima layanan perawatan terbaik. Dari
            potongan klasik hingga gaya modern, saya meluangkan waktu untuk
            memahami apa yang Anda inginkan dan memastikan Anda meninggalkan
            tempat saya dengan penampilan dan perasaan terbaik.
          </p>
          <p className="mb-2.5">
            Misi saya sederhana: menyediakan layanan personal yang tidak hanya
            mengubah penampilan Anda, tetapi juga sikap Anda. Saya selalu
            mengikuti tren dan teknik terbaru, hanya menggunakan produk terbaik
            untuk memastikan rambut Anda selalu terlihat terbaik. Baik Anda
            datang untuk pemangkasan sederhana atau perombakan gaya total,
            yakinlah bahwa Anda berada di tangan yang terampil. Bergabunglah
            dengan saya di BarberBob dan rasakan perbedaan dari tukang cukur
            yang benar-benar peduli dengan penampilan Anda.
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
            desc="Kami menyediakan potongan rambut ahli yang sesuai gaya Anda, untuk mengekspresikan diri di setiap kunjungan."
          />
          <ImageCard
            title="Beard Grooming"
            image="./images/services/service-2.jpg"
            desc="Jenggot sulit diatur? Tim kami siap merapikan dan menyempurnakan agar penampilan Anda makin maksimal."
          />
          <ImageCard
            title="Shaves"
            image="./images/services/service-3.jpg"
            desc="Kami menawarkan cukur mewah yang membuat kulit Anda halus dan menyegarkan hari Anda."
          />
          <ImageCard
            title="Hair Coloring"
            image="./images/services/service-4.jpg"
            desc="Percayakan pewarnaan rambut Anda kepada kami untuk hasil memukau yang menarik perhatian."
          />
          <ImageCard
            title="Hair Styling"
            image="./images/services/service-5.jpg"
            desc="Kami membantu menciptakan gaya yang sesuai dengan kepribadian dan gaya hidup Anda."
          />
          <ImageCard
            title="Scalp Treatments"
            image="./images/services/service-6.jpg"
            desc="Pelanggan kami menyukai perawatan kulit kepala yang menyehatkan rambut dan memberikan relaksasi."
          />
          <ImageCard
            title="Children's Cut"
            image="./images/services/service-7.jpg"
            desc="Kami menyediakan potongan rambut ramah dan menyenangkan untuk anak-anak, membuat pengalaman cukur jadi lebih seru."
          />
          <ImageCard
            title="Consultation"
            image="./images/services/service-8.jpg"
            desc="Percayakan konsultasi pribadi kepada kami untuk menemukan solusi grooming terbaik untuk Anda."
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
            quote="BarberBob terbaik! Setiap potongannya membuat saya merasa baru, dengan perhatian detail yang luar biasa!"
          />
          <TestimoniCard
            name="Aldi Saputra"
            address="Tondasi, Muna Barat"
            quote="Saya sudah coba banyak barber, tapi pengalaman di BarberBob tak tertandingi. Suasananya ramah, potongannya selalu pas!"
          />
          <TestimoniCard
            name="Muhammad Jefri"
            address="Pulau Balu, Muna Barat"
            quote="BarberBob mengubah penampilan saya! Keahlian dan sarannya membuat beda besar. Saya selalu keluar dengan percaya diri. Sangat direkomendasikan!"
          />
        </div>
      </section>

      <section className="flex flex-col items-center bg-gray-100 px-8 py-20">
        <h3 className="mb-5 text-3xl font-semibold">Visit Our Barber Shop</h3>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d994.0176400738083!2d122.3712994232567!3d-4.757752269946055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1745281088825!5m2!1sen!2sid"
            width="350"
            height="450"
            style={{ border: "1px solid gray" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="md:w-[600px] lg:w-[1000px]"
          ></iframe>
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col items-center bg-gray-100 px-8 py-20"
      >
        <h2 className="mb-5 text-3xl font-semibold">Hubungi kami</h2>
        <form
          action="aldi"
          className="flex w-full flex-wrap justify-end md:w-2xl"
        >
          <div className="flex w-full flex-wrap justify-between md:flex-nowrap">
            <Input height="12" placeholder="Nama" className="bg-white" />
            <Input height="12" placeholder="Email" className="bg-white" />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Pesan"
            className="mb-2 h-[150px] max-h-[150px] w-full rounded-2xl border-2 border-gray-200 bg-white p-4 md:mb-4"
          ></textarea>
          <Button>Kirim</Button>
        </form>
      </section>
    </>
  );
}

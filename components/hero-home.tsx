import Image from "next/image";
import WineImg from "@/public/images/wine-img-banner.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-5xl font-bold md:text-6xl text-balance text-pink-700"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Descubra o Fascinante Mundo dos Vinhos
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700 text-balance"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Aprenda os segredos da enologia com especialistas e torne-se um verdadeiro conhecedor de vinhos.
              </p>
              <div className="relative">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-pink-900 to-pink-800 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#pricing"
                  >
                    <span className="relative inline-flex items-center" style={{fontSize: '1rem'}}>
                      Garanta sua vaga agora!{" "}
                      <span
                        className="ml-1 tracking-normal text-pink-100 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-lime-900 text-white shadow hover:bg-lime-950 sm:ml-4 sm:w-auto"
                    href="#about-more"
                  >
                    <span style={{fontSize: '1rem'}}>
                      Saiba mais
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="relative"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <Image
              src={WineImg}
              alt="Wine"
              layout="responsive"
              width={1920}
              height={1080}
              className="rounded-l-2xl rounded-r-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

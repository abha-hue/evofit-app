export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfJrvPsl6xqd9dUk1Dp1peRMimyfFZQbl4LpBGjXxWcTmI3BuOMKsVXNs3JO1zbYi-RhpVGiDTBq97BVzfnwXB3VULxxii09CbQ6BnvJlbTRH7N5fmCat63iPF9R2NKEyNGOcwtG110lUiFdqpRKWm-8gdTwbka4ot-sP1l7E52yO0xPMgbErogNHUTjOwPOsj9wJiubRDFWCkUsYkGjm2_BLouNW1F1n6SCmogmVEzGe3skn8Ay7KrG5Xj2HvSRIE6YftN6qx6HUr')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/60 to-transparent"></div>
      </div>
      <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl uppercase text-pure-white mb-stack-md leading-none">
            FORGED IN <span className="text-impact-orange">DISCIPLINE</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-secondary-container mb-stack-lg max-w-xl">
            Elite strength conditioning for those who refuse to settle. No
            shortcuts. Just results earned through iron and sweat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-impact-orange text-pure-white px-10 py-4 font-headline-md text-headline-md uppercase hover:brightness-110 transition-all">
              GET STARTED
            </button>
            <button className="border-2 border-pure-white text-pure-white px-10 py-4 font-headline-md text-headline-md uppercase hover:bg-pure-white hover:text-deep-black transition-all">
              VIEW CLASSES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CTA() {
  return (
    <section className="py-section-gap relative overflow-hidden border-t-4 border-impact-orange">
      <div className="relative z-10 px-gutter max-w-container-max mx-auto text-center">
        <h2 className="font-display-xl text-headline-lg-mobile md:text-display-xl uppercase text-pure-white mb-stack-md leading-none">
          STAY IN <span className="text-impact-orange">THE FIGHT</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface mb-stack-lg max-w-2xl mx-auto">
          Get updates on new classes, elite training tips, and exclusive offers
          delivered to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-0">
          <input
            className="flex-1 bg-surface-grey border-2 border-surface-container-highest text-pure-white px-6 py-4 focus:outline-none focus:border-impact-orange font-label-bold"
            placeholder="YOUR EMAIL"
            type="email"
          />
          <button
            type="button"
            className="bg-impact-orange text-pure-white px-10 py-4 font-headline-md text-headline-md uppercase hover:bg-on-primary-container transition-colors"
          >
            SEND
          </button>
        </form>
        <p className="mt-4 text-caption text-on-secondary-container">
          By signing up you agree to our Terms and Conditions.
        </p>
      </div>
    </section>
  );
}

export default function Results() {
  return (
    <section className="py-section-gap bg-surface-container-lowest" id="results">
      <div className="px-gutter max-w-container-max mx-auto">
        <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg uppercase text-impact-orange mb-stack-lg">
          REAL RESULTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Result 1 */}
          <div className="bg-surface-grey border-2 border-surface-container-highest overflow-hidden group">
            <div className="relative h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/result1.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute top-4 left-4 bg-impact-orange text-pure-white px-3 py-1 font-label-bold text-caption uppercase">
                BEFORE / AFTER
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-headline-md text-headline-md text-pure-white uppercase mb-2">
                ALEX B.
              </h4>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-impact-orange font-label-bold text-headline-md">
                  LOST 15KG
                </span>
              </div>
              <p className="font-body-md text-on-secondary-container italic">
                "The program at EvoFit didn't just change my body; it changed
                my entire mindset on discipline and health."
              </p>
            </div>
          </div>
          {/* Result 2 */}
          <div className="bg-surface-grey border-2 border-surface-container-highest overflow-hidden group">
            <div className="relative h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/result2.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute top-4 left-4 bg-impact-orange text-pure-white px-3 py-1 font-label-bold text-caption uppercase">
                BEFORE / AFTER
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-headline-md text-headline-md text-pure-white uppercase mb-2">
                MARCUS T.
              </h4>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-impact-orange font-label-bold text-headline-md">
                  GAINED 5KG MUSCLE
                </span>
              </div>
              <p className="font-body-md text-on-secondary-container italic">
                "Focusing on compound lifts and elite coaching helped me break
                through plateaus I've had for years."
              </p>
            </div>
          </div>
          {/* Result 3 */}
          <div className="bg-surface-grey border-2 border-surface-container-highest overflow-hidden group">
            <div className="relative h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-right transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images (4).jpg')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute top-4 left-4 bg-impact-orange text-pure-white px-3 py-1 font-label-bold text-caption uppercase">
                BEFORE / AFTER
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-headline-md text-headline-md text-pure-white uppercase mb-2">
                SARAH J.
              </h4>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-impact-orange font-label-bold text-headline-md">
                  REDUCED 8% BF
                </span>
              </div>
              <p className="font-body-md text-on-secondary-container italic">
                "High intensity training that actually works. The community
                keeps you accountable every single session."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

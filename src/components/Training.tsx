export default function Training() {
  return (
    <section
      className="py-section-gap bg-deep-black border-y-2 border-surface-container-highest"
      id="training"
    >
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="mb-stack-lg">
          <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg uppercase text-pure-white">
            SELECT YOUR <span className="text-impact-orange italic">FLOW</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-secondary-container max-w-2xl">
            Tailored programming designed for maximum efficiency. Choose your
            path to dominance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="group bg-surface-grey p-stack-lg border-l-4 border-surface-container-highest hover:border-impact-orange transition-all h-[400px] flex flex-col justify-end relative overflow-hidden cursor-pointer">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-125 z-0 pointer-events-none">
              <span className="material-symbols-outlined text-impact-orange" style={{ fontSize: '240px' }}>
                fitness_center
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-pure-white uppercase relative z-10 mb-stack-sm group-hover:-translate-y-2 transition-transform duration-500">
              POWER
            </h3>
            <p className="font-body-md text-body-md text-on-secondary-container relative z-10 group-hover:text-pure-white transition-colors group-hover:-translate-y-2 duration-500">
              Pure strength development using compound movements and progressive
              overload.
            </p>
            <div className="mt-stack-md w-0 group-hover:w-full h-1 bg-impact-orange transition-all duration-500 relative z-10"></div>
          </div>

          {/* Card 2 */}
          <div className="group bg-surface-grey p-stack-lg border-l-4 border-surface-container-highest hover:border-impact-orange transition-all h-[400px] flex flex-col justify-end relative overflow-hidden cursor-pointer">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-125 z-0 pointer-events-none">
              <span className="material-symbols-outlined text-impact-orange" style={{ fontSize: '240px' }}>
                bolt
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-pure-white uppercase relative z-10 mb-stack-sm group-hover:-translate-y-2 transition-transform duration-500">
              HIIT
            </h3>
            <p className="font-body-md text-body-md text-on-secondary-container relative z-10 group-hover:text-pure-white transition-colors group-hover:-translate-y-2 duration-500">
              High-intensity intervals designed to incinerate fat and boost
              cardiovascular output.
            </p>
            <div className="mt-stack-md w-0 group-hover:w-full h-1 bg-impact-orange transition-all duration-500 relative z-10"></div>
          </div>

          {/* Card 3 */}
          <div className="group bg-surface-grey p-stack-lg border-l-4 border-surface-container-highest hover:border-impact-orange transition-all h-[400px] flex flex-col justify-end relative overflow-hidden cursor-pointer">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-125 z-0 pointer-events-none">
              <span className="material-symbols-outlined text-impact-orange" style={{ fontSize: '240px' }}>
                self_improvement
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-pure-white uppercase relative z-10 mb-stack-sm group-hover:-translate-y-2 transition-transform duration-500">
              PILATES
            </h3>
            <p className="font-body-md text-body-md text-on-secondary-container relative z-10 group-hover:text-pure-white transition-colors group-hover:-translate-y-2 duration-500">
              Core stability and functional mobility for a resilient, balanced
              physique.
            </p>
            <div className="mt-stack-md w-0 group-hover:w-full h-1 bg-impact-orange transition-all duration-500 relative z-10"></div>
          </div>

          {/* Card 4 */}
          <div className="group bg-surface-grey p-stack-lg border-l-4 border-surface-container-highest hover:border-impact-orange transition-all h-[400px] flex flex-col justify-end relative overflow-hidden cursor-pointer">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-125 z-0 pointer-events-none">
              <span className="material-symbols-outlined text-impact-orange" style={{ fontSize: '240px' }}>
                cable
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-pure-white uppercase relative z-10 mb-stack-sm group-hover:-translate-y-2 transition-transform duration-500">
              TRX
            </h3>
            <p className="font-body-md text-body-md text-on-secondary-container relative z-10 group-hover:text-pure-white transition-colors group-hover:-translate-y-2 duration-500">
              Suspension training leveraging body weight for total body control
              and power.
            </p>
            <div className="mt-stack-md w-0 group-hover:w-full h-1 bg-impact-orange transition-all duration-500 relative z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

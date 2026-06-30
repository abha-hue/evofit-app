export default function Pricing() {
  return (
    <section className="py-section-gap" id="pricing">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-stack-lg">
          <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg uppercase text-pure-white">
            MEMBERSHIP <span className="text-impact-orange">TIERS</span>
          </h2>
          <p className="font-label-bold text-label-bold text-on-secondary-container uppercase tracking-widest pb-4">
            NO CONTRACTS. NO EXCUSES.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="bg-surface-grey p-8 border-2 border-surface-container-highest flex flex-col h-full hover:border-impact-orange transition-colors">
            <h4 className="font-label-bold text-label-bold text-on-secondary-container uppercase mb-2">
              MORNING PASS
            </h4>
            <div className="mb-stack-lg">
              <span className="font-display-xl text-headline-lg text-impact-orange">
                $39
              </span>
              <span className="font-label-bold text-caption text-on-secondary-container">
                /MONTH
              </span>
            </div>
            <ul className="space-y-4 mb-auto">
              <li className="flex items-center gap-2 text-body-md text-on-surface">
                <span className="material-symbols-outlined text-impact-orange text-sm">
                  check_circle
                </span>
                Access until 11:00 AM
              </li>
              <li className="flex items-center gap-2 text-body-md text-on-surface">
                <span className="material-symbols-outlined text-impact-orange text-sm">
                  check_circle
                </span>
                Full gym access
              </li>
              <li className="flex items-center gap-2 text-body-md text-on-surface">
                <span className="material-symbols-outlined text-impact-orange text-sm">
                  check_circle
                </span>
                Locker &amp; Shower
              </li>
            </ul>
            <button className="w-full mt-stack-lg bg-impact-orange text-pure-white py-4 font-headline-md text-label-bold uppercase">
              JOIN NOW
            </button>
          </div>
          <div className="bg-surface-grey p-8 border-2 border-impact-orange flex flex-col h-full relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-impact-orange text-pure-white px-4 py-1 font-label-bold text-caption uppercase whitespace-nowrap">
              MOST POPULAR
            </div>
            <h4 className="font-label-bold text-label-bold text-on-secondary-container uppercase mb-2">
              STUDENT PASS
            </h4>
            <div className="mb-stack-lg">
              <span className="font-display-xl text-headline-lg text-impact-orange">
                $49
              </span>
              <span className="font-label-bold text-caption text-on-secondary-container">
                /MONTH
              </span>
            </div>
            <ul className="space-y-4 mb-auto">
              <li className="flex items-center gap-2 text-body-md text-on-surface">
                <span className="material-symbols-outlined text-impact-orange text-sm">
                  check_circle
                </span>
                Access until 4:00 PM
              </li>
              <li className="flex items-center gap-2 text-body-md text-on-surface">
                <span className="material-symbols-outlined text-impact-orange text-sm">
                  check_circle
                </span>
                Priority event access
              </li>
              <li className="flex items-center gap-2 text-body-md text-on-secondary-container line-through">
                <span className="material-symbols-outlined text-on-secondary-container text-sm">
                  close
                </span>
                Personal Training
              </li>
            </ul>
            <button className="w-full mt-stack-lg bg-impact-orange text-pure-white py-4 font-headline-md text-label-bold uppercase">
              JOIN NOW
            </button>
          </div>
          <div className="bg-surface-grey p-8 border-2 border-surface-container-highest flex flex-col h-full hover:border-impact-orange transition-colors">
            <h4 className="font-label-bold text-label-bold text-on-secondary-container uppercase mb-2">
              SINGLE SESSION
            </h4>
            <div className="mb-stack-lg">
              <span className="font-display-xl text-headline-lg text-impact-orange">
                $20
              </span>
              <span className="font-label-bold text-caption text-on-secondary-container">
                /VISIT
              </span>
            </div>
            <ul className="space-y-4 mb-auto">
              <li className="flex items-center gap-2 text-body-md text-on-surface">
                <span className="material-symbols-outlined text-impact-orange text-sm">
                  check_circle
                </span>
                Full Day Access
              </li>
              <li className="flex items-center gap-2 text-body-md text-on-surface">
                <span className="material-symbols-outlined text-impact-orange text-sm">
                  check_circle
                </span>
                Day Locker Use
              </li>
            </ul>
            <button className="w-full mt-stack-lg bg-impact-orange text-pure-white py-4 font-headline-md text-label-bold uppercase">
              JOIN NOW
            </button>
          </div>
          <div className="bg-surface-grey p-8 border-2 border-surface-container-highest flex flex-col h-full hover:border-impact-orange transition-colors">
            <h4 className="font-label-bold text-label-bold text-on-secondary-container uppercase mb-2">
              FULL UNLIMITED
            </h4>
            <div className="mb-stack-lg">
              <span className="font-display-xl text-headline-lg text-impact-orange">
                $89
              </span>
              <span className="font-label-bold text-caption text-on-secondary-container">
                /MONTH
              </span>
            </div>
            <ul className="space-y-4 mb-auto">
              <li className="flex items-center gap-2 text-body-md text-on-surface">
                <span className="material-symbols-outlined text-impact-orange text-sm">
                  check_circle
                </span>
                24/7 Access
              </li>
              <li className="flex items-center gap-2 text-body-md text-on-surface">
                <span className="material-symbols-outlined text-impact-orange text-sm">
                  check_circle
                </span>
                Free In-Body Analysis
              </li>
              <li className="flex items-center gap-2 text-body-md text-on-surface">
                <span className="material-symbols-outlined text-impact-orange text-sm">
                  check_circle
                </span>
                3 Personal Sessions
              </li>
            </ul>
            <button className="w-full mt-stack-lg bg-impact-orange text-pure-white py-4 font-headline-md text-label-bold uppercase">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

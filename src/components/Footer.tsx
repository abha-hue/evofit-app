export default function Footer() {
  return (
    <footer className="bg-deep-black dark:bg-deep-black w-full pt-section-gap pb-stack-lg border-t-2 border-surface-container-highest">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-gutter max-w-container-max mx-auto">
        <div className="md:col-span-4">
          <div className="font-headline-lg text-impact-orange mb-stack-md uppercase">
            EVOFIT
          </div>
          <p className="font-body-md text-body-md text-on-secondary-container mb-stack-md">
            Kyiv, Velyka Vasylkivska Street, 15<br />
            +38 098 625 7472<br />
            evofitgym@gmail.com
          </p>
          <div className="flex space-x-4">
            <span className="material-symbols-outlined text-on-secondary-container hover:text-impact-orange cursor-pointer">
              public
            </span>
            <span className="material-symbols-outlined text-on-secondary-container hover:text-impact-orange cursor-pointer">
              play_circle
            </span>
            <span className="material-symbols-outlined text-on-secondary-container hover:text-impact-orange cursor-pointer">
              camera
            </span>
          </div>
        </div>
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <div className="flex flex-col space-y-4">
            <h5 className="font-label-bold text-label-bold text-pure-white uppercase">
              NAVIGATION
            </h5>
            <a
              className="text-on-secondary-container hover:text-impact-orange transition-colors uppercase font-body-md"
              href="#"
            >
              HOME
            </a>
            <a
              className="text-on-secondary-container hover:text-impact-orange transition-colors uppercase font-body-md"
              href="#training"
            >
              CLASSES
            </a>
            <a
              className="text-on-secondary-container hover:text-impact-orange transition-colors uppercase font-body-md"
              href="#results"
            >
              RESULTS
            </a>
            <a
              className="text-on-secondary-container hover:text-impact-orange transition-colors uppercase font-body-md"
              href="#pricing"
            >
              PRICING
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h5 className="font-label-bold text-label-bold text-pure-white uppercase">
              LEGAL
            </h5>
            <a
              className="text-on-secondary-container hover:text-impact-orange transition-colors uppercase font-body-md"
              href="#"
            >
              PRIVACY POLICY
            </a>
            <a
              className="text-on-secondary-container hover:text-impact-orange transition-colors uppercase font-body-md"
              href="#"
            >
              TERMS OF SERVICE
            </a>
            <a
              className="text-on-secondary-container hover:text-impact-orange transition-colors uppercase font-body-md"
              href="#"
            >
              CAREERS
            </a>
          </div>
          <div className="md:col-span-2">
            <div
              className="w-full h-48 bg-cover bg-center border border-surface-container-highest"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2zynWGbbY-7QBMjPgBllRgMYcWLKCpBF6aCdEruZZcB6Q65dFfawiPFIfcsqpFQXxn9riAXn4uek7m1DkBIM24VzGHIbuO605RLmvGxNo9_tiMDcZ-CSEWRAg-vH8YHicg0RulMJwxO4j-yisIduo7OWXM_WeSNdDc_QdCXY0PoSNep_Y7YfAmJEKfTe7IaiBIYF88pM_xLH2rTmXL2bUpJ5T8HKt2QlY69OjqB8eNJv65qjv_kPfziP86Xq3WYxNE_GQu_1qHgmD')",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="px-gutter max-w-container-max mx-auto mt-section-gap flex flex-col md:flex-row justify-between items-center text-caption text-on-secondary-container opacity-80 border-t border-surface-container-highest pt-8">
        <span className="uppercase">© 2024 EVOFIT. FORGED IN DISCIPLINE.</span>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-impact-orange cursor-pointer">
            INSTAGRAM
          </span>
          <span className="hover:text-impact-orange cursor-pointer">YOUTUBE</span>
          <span className="hover:text-impact-orange cursor-pointer">
            FACEBOOK
          </span>
        </div>
      </div>
    </footer>
  );
}

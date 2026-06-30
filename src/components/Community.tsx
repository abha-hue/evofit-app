export default function Community() {
  return (
    <section className="py-section-gap bg-deep-black" id="community">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-4">
          <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg uppercase text-pure-white">
            JOIN THE <span className="text-impact-orange">PACK</span>
          </h2>
          <button className="bg-impact-orange text-pure-white px-10 py-4 font-headline-md text-headline-md uppercase hover:bg-on-primary-container transition-all">
            JOIN THE COMMUNITY
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2 relative overflow-hidden border-2 border-surface-container-highest group">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida/AP1WRLvJxR-v7LQN7BtkpXLHvHpgQlKfSRExAtOF0qI2Apd_oXm7UGDToLVC9a5ovlChsqRUXWA4C54bNO_tl7dCvTPB2hS7-jcPDe0glc-fnS5oTCpWgKEnImVsgQWCv-TSEYYzhT6q-WjWL0aEOOWvEyV7XMd9rv7Q0h6cPjqIQZEPXmXeEZ6TijLo0tSd-heA4iTBKAUDIEhCNXp9C504arIlh-q_MUbuGLyMgmBLMH9mphfLIuwXHrInG0BP')",
              }}
            ></div>
            <div className="absolute inset-0 bg-impact-orange/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="relative overflow-hidden border-2 border-surface-container-highest group">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida/AP1WRLtFKctVeO2H6lOAWZAMoTf2m3fZkYzlXBqCyB76Phog-DIJEWiqJyANtmMdR0KhpZjdMzhgRJj8dbmvzDi2YDoTcT4gZ5Et_vA67XqM4FFL8-gVtKaP2VyLkTQiYGikO4hZXQ4Chdh6dD6gngaxgDq_nmoRbqV0v2u2NjeIY6aHXXulghF5PwP7TZ7JO6jW4z63mJRyWAJI8Zz_gE_PlPwseGpLdUNhNxIX-_H8O8bSzt8LWLXcYr8RYHpL')",
              }}
            ></div>
          </div>
          <div className="relative overflow-hidden border-2 border-surface-container-highest group">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsHrQzzm3RjgFkiPmTza0IZpQ-6ndTP9wRLMkVSXc-M1bV54vmnlyd0tjduQ34cyUuc-70HBAF3RMFsGgt8zyOcqnAsRzr6fjwdi0F_ogv2lXkpzPWHLNFGY3VDUhI4BGOzBM7TePnOz6N3jXocBLZAhCHtZrJZKSVGyk1VTwuEusAl27VJFIWLZ9FsMxrmGyNW36B0Aw4SMI5yjVVv2z0Ygt0Y70XfSNvVn6HR_5ecLas6k572vDtoLq0bfpbxxX24j1y-laP5-gc')",
              }}
            ></div>
          </div>
          <div className="col-span-2 relative overflow-hidden border-2 border-surface-container-highest group">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCscoFVV6wUpjmVxvynNXAkeg3412WzfUmtKKflbYl0iT0KM04rYXgroe5ERfmfBsbMkXdD19s2GRTTgFxg8fPfLFwBaCjGt0MqXw051jSpy5ZrQGCYWO6ABbTq9Vcme27x0c-hO_PtwmKyifSdbyrcWUKf-YjojKWylEQZQsVU6YxLiR6vu65T_7plLyqxF1ICNCCMJwIF278s3LU1vOBw0skXtRxTWMDOjqby-sFn1s8GTPklSFJ92zQljLI6F8t-qCvpZC6SB3A7')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

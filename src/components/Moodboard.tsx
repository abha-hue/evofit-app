export default function Moodboard() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[800px]">
        <div className="md:col-span-8 group relative overflow-hidden bg-surface-grey border-2 border-surface-container-highest">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCscoFVV6wUpjmVxvynNXAkeg3412WzfUmtKKflbYl0iT0KM04rYXgroe5ERfmfBsbMkXdD19s2GRTTgFxg8fPfLFwBaCjGt0MqXw051jSpy5ZrQGCYWO6ABbTq9Vcme27x0c-hO_PtwmKyifSdbyrcWUKf-YjojKWylEQZQsVU6YxLiR6vu65T_7plLyqxF1ICNCCMJwIF278s3LU1vOBw0skXtRxTWMDOjqby-sFn1s8GTPklSFJ92zQljLI6F8t-qCvpZC6SB3A7')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent opacity-60"></div>
          <div className="absolute bottom-stack-lg left-stack-lg">
            <h2 className="font-display-xl text-headline-md uppercase text-pure-white">
              THE LAB
            </h2>
          </div>
        </div>
        <div className="md:col-span-4 grid grid-rows-2 gap-gutter">
          <div className="group relative overflow-hidden bg-surface-grey border-2 border-surface-container-highest">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida/AP1WRLt1HFQO-z-CQK0Um56MtC5P9xERMpVQcdQQidN6bMGuC72jDFVrzJ2kv5Yrb4VOT8K6pS0nZJe_3q1WqeJWFfAR8rYIFCofcswNSXqVniTMksCK-a9wOeNBmDSC8w8nV-TJ-cCeU7tM4l9sXeQD5spbbwzx7bzAo2boM4kFCv6SmRGBZfpaO0nDNv4zf20wZMFYCuW6XwI4Apjtwh4F-H3FIMOrykyucuTH_5s-YhLAF7NpWUHodpFChev3')",
              }}
            ></div>
            <div className="absolute inset-0 bg-impact-orange/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="group relative overflow-hidden bg-surface-grey border-2 border-surface-container-highest">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsHrQzzm3RjgFkiPmTza0IZpQ-6ndTP9wRLMkVSXc-M1bV54vmnlyd0tjduQ34cyUuc-70HBAF3RMFsGgt8zyOcqnAsRzr6fjwdi0F_ogv2lXkpzPWHLNFGY3VDUhI4BGOzBM7TePnOz6N3jXocBLZAhCHtZrJZKSVGyk1VTwuEusAl27VJFIWLZ9FsMxrmGyNW36B0Aw4SMI5yjVVv2z0Ygt0Y70XfSNvVn6HR_5ecLas6k572vDtoLq0bfpbxxX24j1y-laP5-gc')",
              }}
            ></div>
            <div className="absolute bottom-stack-lg left-stack-lg">
              <span className="bg-impact-orange text-pure-white px-3 py-1 font-label-bold text-caption uppercase">
                EST. 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

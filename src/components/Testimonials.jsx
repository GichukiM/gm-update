export default function Testimonials() {
    return (
      <section className="relative overflow-hidden px-6 py-16 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900">What Our <span className="text-[#d4af37]">Clients Says</span></h2>
          </div>
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-medium leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                    "Happy to have worked with you and to keep working with you. You provided solutions not only for the website but for my business. Great communication 👌🏾 and eventually a great website 🙌🏾🎯"
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt="Client"
                src="../../src/assets/Eve.JPG"
                className="mx-auto h-16 w-16 rounded-full object-cover"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Evlyne</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">Founder of GrowHub Coaching</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    );
  }
  
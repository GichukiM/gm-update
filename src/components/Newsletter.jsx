import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-8 sm:py-8 lg:px-8">
      <div className="max-w-screen-xl container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        {/* Left Section: Newsletter Info */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#0b061f]">Subscribe to <span className='text-[#d4af37]'>BeyondTech Newsletter</span></h2>
          <p className="text-lg text-gray-600">
          Stay informed with the latest in tech and beyond, including exclusive insights on business, innovation, and life skills. Get valuable, diverse content delivered straight to your inbox every week—no spam, just quality updates that go beyond the tech world.
          </p>
        </div>

        {/* Right Section: Subscription Form */}
        <div className="flex-1">
          <form className="flex flex-col md:flex-row gap-4" 
              method="POST"
              action="https://51d50773.sibforms.com/serve/MUIFAMJuRrmI7H84QZYvgqD_AopAEyF_NMtmmyDQ3QwBddm6wtfpJS0LWEKmQt9DNHWiR84JfmytaEctpp09KwBY6g8ZBp7eUkWkex1dyuZAb7C-6J3n6_XYLhEn9ID8PUk3iCUVfq-dVObHSJVlb4fLPc4vJ13OKeUp-UKNDH6yRduYtq8rQb8SchrHMYOuUtx7WCHV2nS59UYI">
            <div className="flex-1">
              <input
                type="text"
                id="FIRSTNAME"
                name="FIRSTNAME"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="flex-1">
              <input
                type="email"
                id="EMAIL"
                name="EMAIL"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 shadow-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-block text-white border gold-border bg-[#0b061f] hover:bg-white hover:text-[#0b061f] focus:outline-none font-medium text-xl px-4 py-2 text-center uppercase"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

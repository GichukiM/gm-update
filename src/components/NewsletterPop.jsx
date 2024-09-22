import React, { useEffect, useState } from 'react';

const NewsletterPopover = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1500 && !hasShown) {
        setShowPopover(true);
        setHasShown(true); // Mark that the popover has been shown
        document.body.style.overflow = 'hidden'; // Disable scrolling
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const closePopover = () => {
    setShowPopover(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    showPopover && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative w-[50%] bg-white p-8 shadow-lg">
          <button
            className="absolute size-12 text-3xl top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={closePopover}
          >
            &times;
          </button>
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-[#0b061f]">
              Subscribe to <span className="text-[#d4af37]">BeyondTech Newsletter</span>
            </h2>
            <p className="text-sm text-gray-600">
              Stay informed with the latest in tech, business, and innovation. No spam, just quality updates.
            </p>

            {/* Brevo Form Start */}
            <form
              id="sib-form"
              method="POST"
              action="https://51d50773.sibforms.com/serve/MUIFAMJuRrmI7H84QZYvgqD_AopAEyF_NMtmmyDQ3QwBddm6wtfpJS0LWEKmQt9DNHWiR84JfmytaEctpp09KwBY6g8ZBp7eUkWkex1dyuZAb7C-6J3n6_XYLhEn9ID8PUk3iCUVfq-dVObHSJVlb4fLPc4vJ13OKeUp-UKNDH6yRduYtq8rQb8SchrHMYOuUtx7WCHV2nS59UYI"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                id="FIRSTNAME"
                name="FIRSTNAME"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 shadow-sm"
                required
              />
              <input
                type="email"
                id="EMAIL"
                name="EMAIL"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 shadow-sm"
                required
              />
              <button
                type="submit"
                className="text-white border gold-border bg-[#0b061f] hover:bg-white hover:text-[#0b061f] focus:outline-none font-medium text-xl px-4 py-2 text-center uppercase"
              >
                Subscribe
              </button>
            </form>
            {/* Brevo Form End */}

          </div>
        </div>
      </div>
    )
  );
};

export default NewsletterPopover;

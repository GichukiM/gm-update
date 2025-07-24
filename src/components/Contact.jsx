import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkkvdzy");
  const [showSuccess, setShowSuccess] = useState(false);

  const contactDetails = [
    { icon: <FaMapMarkerAlt className="text-2xl text-[#d4af37]" />, text: "Nairobi, Kenya" },
    {
      icon: <FaEnvelope className="text-2xl text-[#d4af37]" />,
      text: <a href="mailto:collinsgichuki01@gmail.com" className="hover:underline">collinsgichuki01@gmail.com</a>,
    },
    {
      icon: <FaLinkedin className="text-2xl text-[#d4af37]" />,
      text: <a href="https://linkedin.com/in/collins-gichuki" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>,
    },
    {
      icon: <FaGithub className="text-2xl text-[#d4af37]" />,
      text: <a href="https://github.com/GichukiM" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Profile</a>,
    },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e);

    if (state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      e.target.reset();
    } else {
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-screen-xl mx-auto space-y-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-black">
              Get in <span className="text-[#d4af37]">Touch</span>
            </h2>
            <p className="text-lg text-black">
              Are you looking for a dedicated Full-stack Software Engineer to join your team or guide your development efforts? I’m ready to contribute to your success.
            </p>
            <div className="space-y-4">
              {contactDetails.map(({ icon, text }, index) => (
                <div key={index} className="flex items-center space-x-4">
                  {icon}
                  <p className="text-lg text-black">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-black">
              Contact <span className="text-[#d4af37]">Form</span>
            </h2>
            <p className="text-black">
              If you’d like to discuss opportunities, collaborations, or mentorship, fill out the form below and I’ll respond within 24 hours.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New submission from your portfolio!" />

              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-lg font-medium text-black">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    required
                    className="mt-1 py-3 px-4 w-full border border-[#d4af37] shadow-sm focus:outline-none"
                  />
                  <ValidationError prefix="First-Name" field="first-name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-lg font-medium text-black">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    required
                    className="mt-1 py-3 px-4 w-full border border-[#d4af37] shadow-sm focus:outline-none"
                  />
                  <ValidationError prefix="Last-Name" field="last-name" errors={state.errors} />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-black">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 py-3 px-4 w-full border border-[#d4af37] shadow-sm focus:outline-none"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-black">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 py-3 px-4 w-full border border-[#d4af37] shadow-sm focus:outline-none"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-black">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="mt-1 px-4 py-3 w-full border border-[#d4af37] shadow-sm focus:outline-none"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Success Message */}
              {showSuccess && (
                <p className="text-lg font-semibold text-black">
                  Thank you! Your message has been sent successfully.
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-block uppercase font-medium text-xl px-6 py-3 text-white bg-[#0b061f] border border-[#d4af37] hover:bg-white hover:text-[#0b061f] transition duration-300"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

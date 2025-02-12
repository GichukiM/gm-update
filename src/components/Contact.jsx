import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkkvdzy");
  const [showSuccess, setShowSuccess] = useState(false);

  const contactDetails = [
    { icon: <FaMapMarkerAlt className="text-2xl text-[#d4af37]" />, text: "Nairobi, Kenya" },
    { icon: <FaEnvelope className="text-2xl text-[#d4af37]" />, text: <a href="mailto:collinsgichuki01@gmail.com">collinsgichuki01@gmail.com</a> },
    { icon: <FaLinkedin className="text-2xl text-[#d4af37]" />, text: <a href="https://linkedin.com/in/collins-gichuki" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a> },
    { icon: <FaGithub className="text-2xl text-[#d4af37]" />, text: <a href="https://github.com/GichukiM" target="_blank" rel="noopener noreferrer">GitHub Profile</a> },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e); // Use Formspree's handleSubmit directly
  
    if (state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        console.log(result);
        
      }, 5000);
      e.target.reset();
    } else {
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-12 px-6 sm:py-16 sm:px-12 lg:px-16">
      <div className="max-w-screen-xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          {/* Left Section: Get in Touch */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in <span className="text-[#d4af37]">Touch</span>
            </h2>
            <p className="text-lg text-white mb-6">
              Are you looking for a dedicated Full-stack Software Engineer to join your team or guide your development efforts? With a strong focus on delivering scalable, reliable, and user-centered solutions, I’m ready to contribute to your success.
            </p>
            <div className="space-y-6">
              {contactDetails.map(({ icon, text }, index) => (
                <div key={index} className="flex items-center space-x-4">
                  {icon}
                  <p className="text-lg text-white">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-white mb-4">
              Contact <span className="text-[#d4af37]">Form</span>
            </h2>
            <p className="text-white mb-6">
              If you’d like to discuss opportunities, collaborations, or mentorship, fill out the form below, and I’ll respond within 24 hours.
            </p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="New submission from your portfolio!" />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-lg font-medium text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    required
                    className="mt-1 py-3 px-4 block w-full border border-[#d4af37] shadow-sm"
                  />
                  <ValidationError prefix="First-Name" field="first-name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-lg font-medium text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    required
                    className="mt-1 py-3 px-4 block w-full border border-[#d4af37] shadow-sm"
                  />
                  <ValidationError prefix="Last-Name" field="last-name" errors={state.errors} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 py-3 px-4 block w-full border border-[#d4af37] shadow-sm"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 py-3 px-4 block w-full border border-[#d4af37] shadow-sm"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 px-4 py-3 block w-full border border-[#d4af37] shadow-sm"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Success Message */}
              {showSuccess && (
                <p className="text-lg font-medium mt-4 text-[#d4af37]">
                  Thank you! Your message has been sent successfully.
                </p>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-block text-white border gold-border bg-[#0b061f] hover:bg-white hover:text-[#0b061f] focus:outline-none font-medium text-xl px-4 py-2 text-center uppercase"
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

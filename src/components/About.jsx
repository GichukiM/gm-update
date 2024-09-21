import React from 'react';

const AboutMe = () => {
  return (
    <section id='about' className="relative overflow-hidden px-6 py-16 sm:py-32 lg:px-8">
        <div className="max-w-screen-xl container mx-auto flex flex-col items-center">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-[#0b061f] mb-16 text-center">About <span className='text-[#d4af37]'>Me</span></h1>
            
            {/* Content Container */}
            <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Section: Image */}
            <div className="relative flex-shrink-0">
                <div className="absolute inset-0 border-4 border-[#d4af37] rounded transform -translate-x-4 -translate-y-4 -rotate-4" />
                <img
                src="../../src/assets/gichuki.png"
                alt="Collins Gichuki"
                className="w-64 h-64 md:w-80 md:h-80 rounded shadow-lg object-cover relative border-4 border-[#0b061f] solid"
                loading="lazy"
                />
            </div>

            {/* Right Section: About Me Text */}
            <article className="flex-1 space-y-6 md:pl-8">
                <h2 className="text-3xl font-bold text-[#0b061f]">Who I Am</h2>
                <div className="space-y-4 text-lg text-gray-600">
                    <p>
                        I’m Collins Gichuki, a passionate Full-stack Software Engineer dedicated to developing intuitive and engaging web applications. My path is marked by a commitment to blending aesthetics with usability, ensuring that every digital experience I create is both appealing and functional.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-[#0b061f]">My Expertise</h2>
                <div className="space-y-4 text-lg text-gray-600">
                    <p>
                        With a solid background in both front-end and back-end development, I focus on delivering cohesive web solutions. My skills in HTML, CSS, JavaScript, React, and Next.js enable me to build responsive applications that function seamlessly. On the back end, I leverage Python and Flask to create strong and scalable systems that adapt to various needs.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-[#0b061f]">My Approach</h2>
                <div className="space-y-4 text-lg text-gray-600">
                    <p>
                        I value collaboration and open dialogue. By working closely with clients and teams, I aim to ensure that each project surpasses expectations. Whether I’m architecting innovative solutions or guiding a project from start to finish, I bring a blend of professionalism and warmth to every collaboration.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-[#0b061f]">What Drives Me</h2>
                <div className="space-y-4 text-lg text-gray-600">
                    <p>
                        My guiding principles revolve around customer satisfaction, efficiency, and scalability. I am committed to helping businesses thrive and reach their objectives while making a positive impact in their communities. My work extends beyond writing code; it’s about empowering individuals and organizations to flourish.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-[#0b061f]">Outside of Work</h2>
                <div className="space-y-4 text-lg text-gray-600">
                    <p>
                        When I'm not immersed in development, I enjoy biking and running, which keep me energized and inspire my creativity. These activities complement my passion for innovation and provide a refreshing perspective on life.
                    </p>
                </div>
            </article>
            </div>
        </div>
    </section>
  );
};

export default AboutMe;

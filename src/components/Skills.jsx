import { FaCheck } from 'react-icons/fa';

const Skills = () => {
  const technicalSkillsGrouped = {
    'Programming Languages': ['JavaScript', 'Python'],
    'Front-End Development': ['ReactJs', 'HTML5', 'CSS3', 'Tailwind CSS'],
    'Back-End Development': ['Node.js', 'Flask', 'Express.js'],
    'Databases': ['MongoDB', 'MySQL', 'PostgreSQL'],
    'Testing': ['Jest', 'Vitest'],
    'Tools & Cloud': ['Git', 'GitHub', 'Google Analytics', 'Microsoft Clarity'],
    'APIs & Integration': ['RESTful APIs', 'Payment Gateway Integration'],
  };

  const softSkills = [
    'Problem Solving',
    'Critical Thinking',
    'Communication',
    'Teamwork',
    'Time Management',
    'Self-Motivation',
    'Leadership',
    'Adaptability',
    'Project Ownership',
    'Design Thinking',
  ];

  const values = [
    'Integrity',
    'Accountability',
    'Creativity',
    'Smart Work',
    'Belief',
    'Fun',
  ];

  return (
    <section id='skills' className="py-12 px-6 sm:px-12 lg:px-16">
      <h2 className="text-4xl font-bold text-center text-black mb-4">
        My <span className="text-[#d4af37]">Skills</span>
      </h2>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Technical Skills */}
        <div>
          <h3 className="text-3xl font-bold text-black mb-6">
            Technical <span className="text-[#d4af37]">Skills</span>
          </h3>
          <div className="space-y-6">
            {Object.entries(technicalSkillsGrouped).map(([category, skills], index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold text-black mb-2">{category}</h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <FaCheck className="text-[#d4af37]" />
                      <span className="text-black">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Core Values */}
        <div>
          {/* Soft Skills */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-black mb-4">
              Soft <span className="text-[#d4af37]">Skills</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaCheck className="text-[#d4af37]" />
                  <span className="text-black">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-3xl font-bold text-black mb-4">
              Core <span className="text-[#d4af37]">Values</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaCheck className="text-[#d4af37]" />
                  <span className="text-black">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

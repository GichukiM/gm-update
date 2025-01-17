import { FaCheck } from 'react-icons/fa';

const Skills = () => {
  // Define technical skills and percentages
  const technicalSkills = [
    { skill: 'HTML/CSS', level: 90 },
    { skill: 'JavaScript', level: 75 },
    { skill: 'React.js', level: 65 },
    { skill: 'Next.js', level: 45 },
    { skill: 'Python', level: 45 },
    { skill: 'Flask', level: 50 },
    { skill: 'Node.js', level: 60 },
    { skill: 'MySQL', level: 55 },
    { skill: 'MongoDB', level: 70 },
  ];

  const softSkills = [
    'Leadership', 
    'Project Management',
    'Self-Motivation', 
    'Adaptability',
    'Attention to Detail', 
    'Design Thinking',
    'Teamwork',
     'Good Communication',
    'Time Management',
     'Resourcefulness',
    'Problem-Solving', 
    'Accountability'
  ];

  const values = [
    'Belief',
     'Accountability',
    'Smart Work',
    'Creativity',
    'Integrity', 
    'Fun'
  ];

  return (
    <section id='skills' className="py-12 px-6 sm:px-12 lg:px-16">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        My <span className="text-[#d4af37]">Skills</span>
      </h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Column 1: Technical Skills */}
        <div className='flex flex-col justify-center'>
          <h3 className="text-3xl font-bold text-white mb-6">Technical <span className="text-[#d4af37]">Skills</span></h3>
          <div className="space-y-6">
            {technicalSkills.map(({ skill, level }, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-white">{skill}</span>
                </div>
                <div className="w-full bg-gray-700 h-1">
                  <div
                    className="bg-[#d4af37] h-1"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Soft Skills and Values */}
        <div>
          {/* Soft Skills */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Soft <span className="text-[#d4af37]">Skills</span></h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaCheck className="text-[#d4af37]" />
                  <span className='text-white'>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Core <span className="text-[#d4af37]">Values</span></h3>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaCheck className="text-[#d4af37]" />
                  <span className='text-white'>{value}</span>
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

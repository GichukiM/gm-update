import { FaCheck } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="py-12 px-6 sm:px-12 lg:px-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-[#d4af37]">Skills</span>
      </h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Column 1: Development Skills */}
        <div>
          <h2 className="text-3xl font-bold text-[#0b061f] mb-6">Development</h2>
          
          {/* Progress Bars */}
          <div className="space-y-6">
            {[
              { name: 'HTML/CSS', level: '90', color: "bg-[#0b061f]" },
              { name: 'JavaScript', level: '85', color: "bg-[#0b061f]" },
              { name: 'Python', level: '80', color: "bg-[#0b061f]" },
              { name: 'ReactJs', level: '85', color: "bg-[#0b061f]" },
              { name: 'NextJs', level: '75', color: "bg-[#0b061f]" },
              { name: 'Flask', level: '70', color: "bg-[#0b061f]" },
              { name: 'MySql', level: '80', color: "bg-[#0b061f]" },
              { name: 'Figma', level: '75', color: "bg-[#0b061f]" },
              { name: 'Google Analytics', level: '95', color: "bg-[#0b061f]" },
              { name: 'Payment Gateway Integration', level: '85', color: "bg-[#0b061f]" },
            ].map((skill) => (
              <div key={skill.name}>
                <label className="block text-lg font-medium text-gray-700">{skill.name}</label>
                <div className="w-full bg-gray-200 h-1">
                  <div className={`${skill.color} h-1 `} style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Soft Skills and Values */}
        <div>
          {/* Soft Skills */}
          {/* <h2 className="text-3xl font-bold text-[#0b061f] mb-6">Soft Skills</h2> */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Git',
                'Product Management',
                'Leadership',
                'Self-Motivation',
                'Adaptability',
                'Attention to Detail',
                'Design Thinking',
                'Teamwork',
                'Good Communication',
                'Time Management',
                'Resourcefulness',
                'Accountability'
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-2 mt-4">
                  <FaCheck className="text-[#0b061f]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">Values</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Believe',
                'Accountability',
                'Smart Work',
                'Creativity',
                'Integrity',
                'Fun'
              ].map((value) => (
                <div key={value} className="flex items-center space-x-2 mt-4">
                  <FaCheck className="text-[#0b061f]" />
                  <span>{value}</span>
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

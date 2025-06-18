import React from 'react';
import { experiences } from '../../src/utils/data/experience';

const linkifyText = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 underline break-all'
        >
          {part}
        </a>
      );
    } else {
      return <span key={index}>{part}</span>;
    }
  });
};

const Exp = () => {
  return (
    <div className='h-full flex items-center justify-center mt-10 bg-transparent flex-wrap flex-col' id='Exp'>
      <div className='heroParent flex w-full h-fit justify-center items-center flex-col gap-5 p-5 flex-wrap rounded-3xl'>
        <div className='heroSubSection flex items-center w-full justify-between flex-col'>
          <div className='mainHeading flex justify-start items-start'>
            <span className='md:text-4xl text-2xl text-white font-semibold'>Work Experience</span>
          </div>
        </div>

        <div className='expParent w-full h-fit flex justify-center items-center flex-wrap flex-col gap-12'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='w-full md:w-3/5 p-3 flex justify-center items-center flex-col flex-grow gap-0 bg-black text-white border border-black hover:border hover:border-[#6200ee] rounded-3xl transition-all duration-1200 ease-out'
            >
              <div className='w-full text-lg font-medium p-2'>
                <span>{exp.role}</span>
              </div>

              <div className='w-full text-base flex justify-between items-center flex-row flex-wrap p-2 gap-2'>
                <div className='companyName'>{exp.company}</div>
                <div className='companyName'>{exp.duration}</div>
              </div>

              <div className='desc p-2 flex justify-start items-center w-full'>
                <ul className='list-disc pl-5 text-sm gap-2 flex justify-start items-start flex-col'>
                  {exp.description.map((item, i) => (
                    <li key={i}>
                      <span className='font-medium'>{item.highlight}</span>{' '}
                      {linkifyText(item.detail)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='skills w-full p-2 flex justify-start items-center flex-row flex-wrap gap-2'>
                {exp.tech.map((skill, i) => (
                  <div
                    key={i}
                    className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#6200ee] hover:bg-[#6200ee]'
                  >
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exp;

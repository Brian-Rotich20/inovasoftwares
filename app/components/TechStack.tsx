'use client'

import React from 'react'

const techStack = [
  'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'Bootstrap', 'Sass', 'Redux', 'Node.js', 'Django', 'Express.js', 'FastAPI',
  'Python', 'Java', 'C#', 'PHP', 'Go', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase',
  'AWS', 'Vercel', 'Docker', 'Git', 'GitHub', 'GraphQL', 'REST APIs', 'Prisma', 'Supabase'
]

export default function TechStack() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className='text-center'>
        <h2 className="relative inline-block text-3xl font-bold text-white mb-6 after:content-[''] after:block after:h-1 after:w-1/2 after:bg-yellow-500 after:mx-auto after:mt-2">
        Our Stack
        </h2>
        </div>
        
        <p className="text-center text-white mb-12 max-w-2xl mx-auto">
            Whether you need a simple webapp or complex enterprise solution, we provide full-stack development
             expertise across modern technologies and frameworks.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech, i) => (
            <span key={i} className="bg-grey px-4 py-2 font-bold rounded text-sm text-white border hover:border-orange-400 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
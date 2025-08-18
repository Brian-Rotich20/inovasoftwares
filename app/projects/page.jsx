'use client';
import React, { useState } from 'react';
import { Search, Filter, ExternalLink, Github } from 'lucide-react';

// ProjectCard component (embedded for demo)
function ProjectCard({ 
  title = "Project Title",
  description = "A brief description of what this project does and its key features.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80",
  status = "Completed",
  category = "Web Development",
  liveUrl,
  githubUrl
}) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-cover bg-center transform transition-transform duration-300 group-hover/card:scale-105"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-500 group-hover/card:bg-black opacity-50 group-hover/card:opacity-70"></div>
        
        {/* Project Status and Category */}
        <div className="flex flex-row items-center justify-between z-10">
          <span className={`px-2 py-1 text-white text-xs rounded-full font-medium ${
            status === 'Completed' ? 'bg-green-500' : 
            status === 'In Progress' ? 'bg-yellow-500' : 
            'bg-blue-500'
          }`}>
            {status}
          </span>
          <span className="text-sm text-gray-300 font-medium bg-black bg-opacity-50 px-2 py-1 rounded">
            {category}
          </span>
        </div>

        {/* Project Content */}
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 mb-2">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 mb-4">
            {description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-2 relative z-10">
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
              >
                <ExternalLink size={12} />
                Live
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-gray-800 hover:bg-gray-900 text-white text-xs rounded transition-colors"
              >
                <Github size={12} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and modern UI design.",
      imageUrl: "/shop2.png",
      status: "Completed",
      category: "Full Stack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Interactive dashboard for visualizing machine learning model performance with real-time analytics.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&h=900&q=80",
      status: "In Progress",
      category: "Data Science",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1878&h=920&q=80",
      status: "Completed",
      category: "Mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 4,
      title: "Task Management Tool",
      description: "Collaborative project management platform with kanban boards, time tracking, and team communication.",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&h=900&q=80",
      status: "Completed",
      category: "Web Development",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 5,
      title: "Weather Analytics",
      description: "Real-time weather data visualization with predictive modeling and climate trend analysis.",
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1878&h=920&q=80",
      status: "In Progress",
      category: "Data Science",
      githubUrl: "https://github.com/example"
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&h=900&q=80",
      status: "Planned",
      category: "Blockchain",
      githubUrl: "https://github.com/example"
    }
  ];

  const categories = ['All', 'Full Stack', 'Web Development', 'Mobile', 'Data Science', 'Blockchain'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A collection of innovative solutions and creative endeavors that showcase my passion for technology and problem-solving.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              status={project.status}
              category={project.category}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg">
              No projects found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            I'm always excited to work on new projects and explore innovative solutions.
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
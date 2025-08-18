"use client";
import { cn } from "../../lib/utils";

export function ProjectCard({ 
  title = "Project Title",
  description = "A brief description of what this project does and its key features.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80",
  status = "Completed",
  category = "Web Development"
}) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          `bg-[url(${imageUrl})] bg-cover`
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        
        {/* Project Status and Category */}
        <div className="flex flex-row items-center justify-between z-10">
          <div className="flex flex-col">
            <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
              {status}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-300 font-medium">
              {category}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
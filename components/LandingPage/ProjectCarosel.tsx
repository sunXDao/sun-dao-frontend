'use client'

import { useEffect, useState } from 'react'
import ProjectItem, { ProjectItemType } from './ProjectItem'

export default function ProjectCarousel({ projectArray }: { projectArray: ProjectItemType[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const total = projectArray?.length

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % total)
    }, 3000)

    return () => clearInterval(autoplayInterval)
  }, [currentIndex, total])

  return (
    <section className="px-20 py-20">
      {projectArray.map((project, index) => {
        if (index === currentIndex) {
          return (
            <ProjectItem
              key={index}
              propertyType={project.propertyType}
              monthlyYield={project.monthlyYield}
              setupDate={project.setupDate}
              propertyLocation={project.propertyLocation}
              purchaseValue={project.purchaseValue}
              projectSpecifications={project.projectSpecifications}
              imgSrc={project.imgSrc}
              projectStatus={project.projectStatus}
            />
          )
        }
      })}
      <div className="flex justify-center gap-2">
        {projectArray.map((_, index) => {
          return (
            <div
              className={`transition-all ease-in-out
                ${index === currentIndex
                  ? 'h-2 w-16 bg-emerald-300 rounded-md'
                  : 'h-2 w-4 bg-white rounded-md'} duration-300
              `}
              key={index}
            />
          )
        })}
      </div>
    </section>
  )
}
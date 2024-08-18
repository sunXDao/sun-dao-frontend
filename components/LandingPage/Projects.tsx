import AccordionImg1 from '@/app/assets/AccordionImg1.svg'
import AccordionImg2 from '@/app/assets/AccordionImg2.svg'
import AccordionImg3 from '@/app/assets/AccordionImg3.svg'
import { ProjectItemType } from './ProjectItem'
import ProjectCarousel from './ProjectCarosel'

export default function Projects() {
  const projectArray: ProjectItemType[] = [
    {
      propertyType: "20 x 8 container with Glass replaced surfaces",
      monthlyYield: "$80",
      setupDate: "14th June, 2024",
      propertyLocation: "Imo State, Nigeria - West Africa",
      purchaseValue: "$2580",
      projectSpecifications: "6 units  bifacial Mono-crystalline 580W Solar panels. 1 unit 6Kva Off-Grid inverter. 1 unit Switch Smart meter.",
      imgSrc: AccordionImg1,
      projectStatus: 'succeeded'
    },
    {
      propertyType: "5 acres of land, ground mount installation",
      monthlyYield: "$5,850",
      setupDate: "11th March, 2023",
      propertyLocation: "Piaui, Nova Olinda - Brazil, South America",
      purchaseValue: "$1,280,000",
      projectSpecifications: "1,600 units of bifacial Mono-crystalline 500W Solar panels (0.8 MW solar array).- 1 unit 2.5 MWh Tesla Powerpack.- 3 units Switch Smart meter.",
      imgSrc: AccordionImg2,
      projectStatus: 'succeeded'
    }, {
      propertyType: "5 acres of land, ground mount installation",
      monthlyYield: "$7,500",
      setupDate: "20th September, 2021",
      propertyLocation: "Lord Howe Island, Australian state of new south wales.",
      purchaseValue: "$1,000,000",
      projectSpecifications: "2,182 units of bifacial Mono-crystalline 550W Solar panels (1.2 MW solar array) - 1 unit 3.712 MWh Tesla Powerpack - 3 units Switch Smart meter",
      imgSrc: AccordionImg3,
      projectStatus: 'pending'
    }
  ]
  return (
    <section className="my-20 p-20">
      <h2 className="text-5xl font-semibold text-center">
        Projects Unboarded
      </h2>
      <ProjectCarousel projectArray={projectArray}/>
    </section>
  )
}

import Image, { StaticImageData } from "next/image";

export type ProjectItemType = {
  propertyType: string,
  monthlyYield: string,
  setupDate: string,
  propertyLocation: string,
  purchaseValue: string,
  projectSpecifications: string,
  imgSrc: StaticImageData,
  projectStatus: 'succeeded' | 'pending',
}

export default function ProjectItem({ propertyType, monthlyYield, setupDate, propertyLocation, purchaseValue, projectSpecifications, imgSrc, projectStatus }: ProjectItemType) {
  return (
    <div className="text-sm flex gap-2 border border-[#056855] rounded-2xl my-10 shadow-2xl">
      <div className="pl-10 pr-5 w-3/5 flex gap-5 flex-col justify-center">
        <div className={`${projectStatus === 'pending' ? "bg-[#FF9D3A] text-white" : projectStatus === 'succeeded' ? "bg-[#A0FFEC] text-black" : ""} rounded-3xl px-6 font-medium py-2 w-fit`}>
          {projectStatus === 'pending' ? "ISO Pending" : projectStatus === 'succeeded' ? "ISO Completed" : ""}
        </div>
        <div className="space-y-10">
          <div className="flex gap-10">
            <div className="w-3/5 space-y-5">
              <div>
                <h2 className="text-primaryColor">PROPERTY TYPE</h2>
                <p className="font-medium text-lg">{propertyType}</p>
              </div>
            </div>
            <div className="w-2/5 space-y-5">
              <div>
                <h2 className="text-primaryColor">MONTHLY YIELD</h2>
                <p className="font-medium text-lg">{monthlyYield}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="w-3/5 space-y-5">
              <div>
                <h2 className="text-primaryColor">PURCHASE VALUE</h2>
                <p className="font-medium text-lg">{purchaseValue}</p>
              </div>
            </div>
            <div className="w-2/5 space-y-5">
              <div>
                <h2 className="text-primaryColor">SETUP DATE</h2>
                <p className="font-medium text-lg">{setupDate}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="w-3/5 space-y-5">
              <div>
                <h2 className="text-primaryColor">PROJECT SPECIFICATIONS</h2>
                <p className="font-medium text-lg">{projectSpecifications}</p>
              </div>
            </div>
            <div className="w-2/5 space-y-5">
              <div>
                <h2 className="text-primaryColor">PROPERTY LOCATION</h2>
                <p className="font-medium text-lg">{propertyLocation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 h-full">
        <Image src={imgSrc} alt="Project Image" className="h-full object-cover bg-cover" />
      </div>
    </div>
  )
}

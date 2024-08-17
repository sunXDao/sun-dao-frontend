import { BiChevronDown } from 'react-icons/bi'

export default function Accordion({ question, answer, handleOnClick, open }: { question: string, answer: string, handleOnClick: () => void, open: boolean }) {
  return (
    <div className='text-white'>
      <div className="flex justify-between gap-2 rounded-2xl p-5 border border-[#85A09B] border-opacity-50">
        <h2 className='font-bold text-xl'>{question}</h2>
        <div className='cursor-pointer h-fit'>
          <BiChevronDown onClick={handleOnClick} className={`transition-all ease-in-out ${open ? 'rotate-180' : 'rotate-0'} duration-500 h-8 w-8`} />
        </div>
      </div>
      <p className={`border-t font-medium border-[#E2E2E2]/30 py-3 text-lg overflow-hidden transition-all ease-in-out ${open ? 'h-32 opacity-100 my-5' : 'h-0 my-0 opacity-0'} duration-500`}>
        {answer}
      </p>
    </div>
  )
}

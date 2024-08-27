'use client'

import React, { useState } from 'react'
import Accordion from './Accordion'

export default function FAQs() {
  const items = [
    { id: 1, question: "Where can I find more information about SunDAO?", answer: "SunDAO is built on the Asset Chain, a Layer 1 blockchain by Xend Finance, specifically designed for real-world asset (RWA) tokenization and management. Asset Chain utilizes Fantom's Lachesis consensus mechanism and offers high scalability, speed, security, and decentralization. This platform is key to bridging traditional finance and decentralized finance, enabling secure and efficient transactions of RWAs on-chain. Asset Chain's robust architecture makes it ideal for managing SunDAO's solar projects." },
    { id: 2, question: "What chain is SunDAO built on?", answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A impedit cum vitae nobis quas accusamus soluta architecto pariatur libero. Numquam impedit fugiat illo, nam non accusamus officiis veniam ullam aliquid.   Lorem ipsum dolor sit amet consectetur adipisicing elit. A impedit cum vitae nobis quas accusamus soluta architecto pariatur libero. Numquam impedit fugiat illo, nam non accusamus officiis veniam ullam aliquid." },
    { id: 3, question: "Who is SunDAO for?", answer: "SunDAO is built on the Asset Chain, a Layer 1 blockchain by Xend Finance, specifically designed for real-world asset (RWA) tokenization and management. Asset Chain utilizes Fantom's Lachesis consensus mechanism and offers high scalability, speed, security, and decentralization. This platform is key to bridging traditional finance and decentralized finance, enabling secure and efficient transactions of RWAs on-chain. Asset Chain's robust architecture makes it ideal for managing SunDAO's solar projects." }
  ]

  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const handleClick = (id: number) => {
    if (selectedItem === id) {
      setSelectedItem(null)
    } else {
      setSelectedItem(id)
    }
  }

  return (
    <section className='my-20 px-20'>
      <h2 className="text-5xl font-semibold text-center">
        FAQs
      </h2>
      <div className='py-5 md:py-10 flex flex-col gap-5 md:gap-8 lg:w-full'>
        {
          items.map((item) => (
            <Accordion key={item.id} question={item.question} answer={item.answer} handleOnClick={() => handleClick(item.id)} open={item.id === selectedItem} />
          ))
        }
      </div>
    </section>
  )
}
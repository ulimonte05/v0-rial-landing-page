"use client"

import { useState, useEffect } from "react"

const words = ["AI", "humans"]

export function DynamicByFor() {
  const [byWord, setByWord] = useState(words[0])
  const [forWord, setForWord] = useState(words[1])

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select new words for both positions
      const newByWord = words[Math.floor(Math.random() * words.length)]
      const newForWord = words[Math.floor(Math.random() * words.length)]
      
      setByWord(newByWord)
      setForWord(newForWord)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-flex items-center justify-center gap-4">
      <span className="whitespace-nowrap">by</span>
      <span className="inline-block w-[140px] text-center transition-opacity duration-300">{byWord}</span>
      <span className="whitespace-nowrap ml-6">for</span>
      <span className="inline-block w-[140px] text-center transition-opacity duration-300">{forWord}</span>
    </span>
  )
}


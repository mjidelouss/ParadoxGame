'use client'

import { useState, useEffect } from 'react'
import Timer from './Timer'
import Button from './Button'
import { acme, caveat, eater, honk, merienda } from '../app/fonts'
import { audiowide } from '../app/fonts'

const choices = [
  { A: "Pizza 🍕", B: "Burger 🍔" },
  { A: "Beach ⛱️", B: "Mountains 🏔️" },
  { A: "Movies 🎬", B: "Books 📚" },
  { A: "Dogs 🐶", B: "Cats 🐱" },
  { A: "Coffee ☕", B: "Tea 🍵" },
  { A: "Sunrise 🌅", B: "Sunset 🌇" },
  { A: "Summer ☀️", B: "Winter ❄️" },
  { A: "City 🏙️", B: "Countryside 🏞️" }
]

export default function ParadoxPuppy() {
  const [gameOver, setGameOver] = useState(false)
  const [choice, setChoice] = useState<string | null>(null)
  const [optionA, setOptionA] = useState('')
  const [optionB, setOptionB] = useState('')
  const [gameStarted, setGameStarted] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)

  const handleChoice = (option: 'A' | 'B') => {
    setChoice(option)
    setShowAnimation(false)
  }

  const resetGame = () => {
    setGameOver(false)
    setChoice(null)
    setOptionA('')
    setOptionB('')
    setGameStarted(false)
    setShowAnimation(false)
  }

  const handleTimeUp = () => {
    setGameOver(true)
  }

  const startGame = () => {
    if (optionA && optionB) {
      setGameStarted(true)
      setShowAnimation(true)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % choices.length)
    }, 3000) // Change placeholders every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-center relative text-foreground">
      <h1 className={`text-6xl font-bold mb-8 ${honk.className}`}>Paradox Puppy</h1>
      <h5 className={`text-5xl font-bold mb-8 animate-bounce ${acme.className}`}>Make a decision</h5>
      <h5 className={`text-5xl font-bold mb-8 animate-bounce ${acme.className}`}>Save <span className='text-red-500'>Puppy</span></h5>
      {!gameStarted ? (
        <div className="space-y-6">
          <div className="flex justify-center items-center space-x-4">
            <input
              type="text"
              value={optionA}
              onChange={(e) => setOptionA(e.target.value)}
              placeholder={choices[placeholderIndex].A}
              className={`p-2 border rounded text-gray-900 w-1/3 ${acme.className}`}
            />
            <h1 className={`text-2xl font-bold ${audiowide.className}`}>OR</h1>
            <input
              type="text"
              value={optionB}
              onChange={(e) => setOptionB(e.target.value)}
              placeholder={choices[placeholderIndex].B}
              className={`p-2 border rounded text-gray-900 w-1/3 ${acme.className}`}
            />
          </div>
          <div>
            <Button color="blue" onClick={startGame}>
              Start Game
            </Button>
          </div>
          <div>
          <h3 className={`text-2xl font-bold mb-8 ${eater.className}`}>What is Paradox Puppy?</h3>
          <p className={merienda.className}>More choices make us less likely to take action. This is called <span className='text-yellow-500'>Analysis Paralysis.</span><br></br>
          Adding constraints helps to <span className='text-red-500'>stop overthinking:</span> fewer choices or limited decision time.<br></br>
          <span className={`text-3xl ${honk.className}`}>Paradox Puppy</span> incentivizes you to make a decision quickly to save <span className='text-purple-500'>Puppy</span><br></br>
          from the <span className='text-blue-500'>Overthinking Monster.</span>
          </p>
          </div>
        </div>
      ) : !gameOver && !choice ? (
        <>
          <Timer initialTime={10} onTimeUp={handleTimeUp} />
          <p className="text-xl mb-4">Choose quickly!</p>
          <div className="flex space-x-4 justify-center">
            <Button color="blue" onClick={() => handleChoice('A')}>
              {optionA}
            </Button>
            <Button color="green" onClick={() => handleChoice('B')}>
              {optionB}
            </Button>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          {gameOver ? (
            <p className="text-xl mb-4">Game Over! The puppy got caught!</p>
          ) : (
            <p className="text-xl mb-4">
              You chose: {choice === 'A' ? optionA : optionB}. The puppy is safe!
            </p>
          )}
          <Button color="yellow" onClick={resetGame}>
            Play Again
          </Button>
        </div>
      )}
    </div>
  )
}
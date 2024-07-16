'use client'

import { useState, useEffect } from 'react'
import Button from './Button'
import { acme, caveat, eater, honk, merienda } from '../app/fonts'
import { audiowide } from '../app/fonts'
import Casino from './casino'

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
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(5)

  const handleChoice = (option: 'A' | 'B') => {
    setChoice(option)
    setGameOver(true)
  }

  const resetGame = () => {
    setGameOver(false)
    setChoice(null)
    setOptionA('')
    setOptionB('')
    setGameStarted(false)
    setTimeLeft(5)
  }

  const startGame = () => {
    if (optionA && optionB) {
      setGameStarted(true)
      setTimeLeft(5)
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (gameStarted && !gameOver && !choice) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer)
            setGameOver(true)
            return 0
          }
          return prevTime - 0.1
        })
      }, 100)
    }
    return () => clearInterval(timer)
  }, [gameStarted, gameOver, choice])

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % choices.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-center relative text-foreground">
      <style jsx>{`
        .loader {
          --c1: #673b14;
          --c2: #f8b13b;
          width: 40px;
          height: 80px;
          border-top: 4px solid var(--c1);
          border-bottom: 4px solid var(--c1);
          background: linear-gradient(90deg, var(--c1) 2px, var(--c2) 0 5px,var(--c1) 0) 50%/7px 8px no-repeat;
          display: grid;
          overflow: hidden;
          animation: l5-0 5s infinite linear;
        }
        .loader::before,
        .loader::after {
          content: "";
          grid-area: 1/1;
          width: 75%;
          height: calc(50% - 4px);
          margin: 0 auto;
          border: 2px solid var(--c1);
          border-top: 0;
          box-sizing: content-box;
          border-radius: 0 0 40% 40%;
          -webkit-mask: linear-gradient(#000 0 0) bottom/4px 2px no-repeat,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          background: linear-gradient(var(--d,0deg),var(--c2) 50%,#0000 0) bottom /100% 205%,
            linear-gradient(var(--c2) 0 0) center/0 100%;
          background-repeat: no-repeat;
          animation: inherit;
          animation-name: l5-1;
        }
        .loader::after {
          transform-origin: 50% calc(100% + 2px);
          transform: scaleY(-1);
          --s: 3px;
          --d: 180deg;
        }
        @keyframes l5-0 {
          80% {
            transform: rotate(0)
          }
          100% {
            transform: rotate(0.5turn)
          }
        }
        @keyframes l5-1 {
          10%,70% {
            background-size: 100% 205%,var(--s,0) 100%
          }
          70%,100% {
            background-position: top,center
          }
        }
      `}</style>

      <h1 className={`text-6xl font-bold mb-8 ${honk.className}`}>Paradox Glass</h1>
      <h5 className={`text-5xl font-bold mb-8  ${acme.className}`}>Make a decision</h5>
      <h5 className={`text-5xl font-bold mb-8 ${acme.className}`}>before the <span className='text-red-500'>Sand</span> runs out</h5>

      {!gameStarted && (
      <div className='flex justify-center'>
        <Casino />
      </div>
    )}
      
      {!gameStarted ? (
        <div className="space-y-6 mt-8">
          <div className="flex justify-center items-center space-x-4">
            <input
              type="text"
              value={optionA}
              onChange={(e) => setOptionA(e.target.value)}
              placeholder={choices[placeholderIndex].A}
              className={`p-2 border rounded text-white-900 w-1/3 ${acme.className}`}
            />
            <h1 className={`text-2xl font-bold ${audiowide.className}`}>OR</h1>
            <input
              type="text"
              value={optionB}
              onChange={(e) => setOptionB(e.target.value)}
              placeholder={choices[placeholderIndex].B}
              className={`p-2 border rounded text-white-900 w-1/3 ${acme.className}`}
            />
          </div>
          <div>
            <Button color="blue" onClick={startGame}>
              Start Game
            </Button>
          </div>
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${merienda.className}`}>What is Paradox Glass?</h3>
            <p className={merienda.className}>More choices make us less likely to take action. This is called <span className='text-yellow-500'>Analysis Paralysis.</span><br></br>
            Adding constraints helps to <span className='text-red-500'>stop overthinking:</span> fewer choices or limited decision time.<br></br>
            <span className={`text-green-500`}>Paradox Glass</span> incentivizes you to make a decision quickly before the <span className='text-purple-500'>hourglass</span><br></br>
            runs out of <span className='text-blue-500'>Sand.</span>
            </p>
          </div>
        </div>
      ) : !gameOver && !choice ? (
        <>
          <div className="text-2xl font-bold mb-4">
            Time left: {Math.max(0, Math.ceil(timeLeft))}s
          </div>
          <div className="flex justify-center mb-4">
            <div className="loader"></div>
          </div>
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
          {!choice ? (
            <p className="text-xl mb-4">Game Over! You ran out of time!</p>
          ) : (
            <p className="text-xl mb-4">
              You chose: {choice === 'A' ? optionA : optionB}. Good decision!
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
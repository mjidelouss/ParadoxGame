interface GameStateProps {
  score: number
  level: number
}

export default function GameState({ score, level }: GameStateProps) {
  return (
    <div className="absolute top-4 left-4 text-left text-foreground">
      <p className="text-xl font-bold">Score: {score}</p>
      <p className="text-xl font-bold">Level: {level}</p>
    </div>
  )
}
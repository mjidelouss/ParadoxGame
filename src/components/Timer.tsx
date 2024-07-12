import { useEffect, useState } from 'react'

interface TimerProps {
  initialTime: number
  onTimeUp: () => void
}

export default function Timer({ initialTime, onTimeUp }: TimerProps) {
  const [time, setTime] = useState(initialTime)

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      onTimeUp()
    }
  }, [time, onTimeUp])

  return (
    <div className="text-2xl font-bold mb-4 text-foreground">
      Time left: <span className="text-red-500">{time}s</span>
    </div>
  )
}
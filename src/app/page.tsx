import ParadoxPuppy from '../components/ParadoxGlass'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <ThemeToggle />
      <ParadoxPuppy />
    </main>
  )
}
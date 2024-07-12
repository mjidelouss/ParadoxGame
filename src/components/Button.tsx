interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
  color: string
}

export default function Button({ onClick, children, color }: ButtonProps) {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
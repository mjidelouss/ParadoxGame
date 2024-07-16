interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
  color: string
}

export default function Button({ onClick, children, color }: ButtonProps) {
  return (
    <button
      className={`bg-transparent hover:bg-${color}-500 text-${color}-500 font-semibold hover:text-white py-2 px-4 border border-${color}-500 hover:border-transparent rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
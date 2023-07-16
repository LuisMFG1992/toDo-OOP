const Button = ({ bgColor = 'bg-purple-600', textColor = 'white', text }) => {
  return (
    <button
      type="submit"
      className={`text-${textColor} right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ${bgColor} hover:bg-${bgColor}-700 focus:ring-${bgColor}-800`}
    >
      {text}
    </button>
  )
}

export default Button

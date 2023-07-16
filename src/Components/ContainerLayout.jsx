const Container = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className=" w-2/3 flex justify-center items-center min-h-screen">
        {children}
      </div>
    </div>
  )
}

export default Container

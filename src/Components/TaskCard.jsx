// import { ImCheckboxUnchecked } from 'react-icons/im'

import Button from './Button'

const TaskCard = () => {
  return (
    <div className="grid [grid-template-columns:1fr_100px] w-full p-3 rounded-lg shadow bg-gray-002 border-gray-002 mt-8">
      <div className="col-span-1">
        <div className="">
          <h5 className="text-lg mb-2 font-semibold tracking-tight text-white">
            Check options for doorbell
          </h5>
          <p className="mb-3 font-normal  text-gray-400">
            It needs to have a camera and movement sensor. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. At iure nobis vitae deserunt
            ratione? Minima, quisquam eos neque incidunt unde, earum praesentium
            eligendi error esse omnis impedit doloribus, dolore est!
          </p>
        </div>
      </div>
      <div className="col-span-1 grid items-center ml-4">
        <Button text="Done" />
      </div>
    </div>
  )
}

export default TaskCard

const current = new Date()
const hh = current.getHours()
const mm = current.getMinutes()
const YYYY = current.getFullYear()
const MM = current.getMonth() + 1
const DD = current.getDate()
const weekDayIdx = current.getDay()
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const Header = () => {
  return (
    <div className="flex justify-between items-center pb-8">
      <div className="flex flex-col">
        <p className="text-3xl font-bold mb-1 ">
          Hey, <span className="text-purple-600">Luis Flores</span>
        </p>
        {/* <div className="flex gap-10"></div> */}
        <div>
          {weekdays[weekDayIdx]} {DD}-{months[MM]}-{YYYY}
        </div>
        <div>
          {hh}:{mm}
        </div>
      </div>
      <div className="flex justify-items-center ">
        <img
          src="/src/assets/profil-placeholder.jpg"
          className="rounded-full aspect-square object-cover w-20 border-2 border-purple-600 "
        />
      </div>
    </div>
  )
}

export default Header

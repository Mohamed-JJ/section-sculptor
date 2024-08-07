import { Globe } from "lucide-react"

const WorldUsersSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-orange-500 mb-2">Benefits</h2>
        <h3 className="text-4xl font-bold mb-4">
          We have many users <br />
          all over the <span className="text-orange-500">world</span>
        </h3>
        <p className="mb-8 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam,
          purus sit amet luctus venenatis, lectus magna.
        </p>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h4 className="text-3xl font-bold text-orange-500">10K+</h4>
            <p>User active</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-orange-500">30+</h4>
            <p>Country</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-orange-500">50K+</h4>
            <p>Feedbacks</p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/World_map_blank_without_borders.svg" 
            alt="World map"
            className="w-full h-auto invert"
          />
        </div>
      </div>
    </div>
  )
}

export default WorldUsersSection

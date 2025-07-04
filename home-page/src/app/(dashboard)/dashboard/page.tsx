export default function DashboardPage() {
  return (
    <>
      {/* this is the search bar and chat option */}
      <div className="flex w-full h-12 bg-gray-100 items-center rounded-full mb-4 px-[2px] justify-between">
        {/* Input with Search button inside */}
        <div className="relative w-1/2 ml-[3px]">
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-full px-4 pr-20 border border-gray-300 rounded-full"
          />
          <button className="absolute right-1 top-1 h-8 px-4 bg-green-500 text-white rounded-full text-sm">
            Search
          </button>
        </div>

        {/* Chat button on the far right with tiny spacing */}
        <button className="h-10 px-4 bg-blue-500 text-white rounded-full mr-[3px]">
          Chat
        </button>
      </div>


      {/* this is the top banner */}
      <div className="flex w-full h-50 bg-gray-100 items-center justify-center rounded-xl">
        <h1 className="text-2xl font-bold text-red-500">Dashboard</h1>
      </div>



      {/* this is the main content area */}
      <div className="flex w-full">
        <div className="flex w-[33%] h-50 bg-gray-200 items-center justify-center mt-4 mr-4 mb-4 rounded-xl">
          <h2 className="flex text-xl text-blue-500">manage ur tasks</h2>
        </div>
        <div className="grid w-[33%] h-50 bg-gray-200 items-center justify-center mt-4 mb-4 rounded-xl">
          <h2 className="flex text-xl text-blue-500">manage ur projects</h2>
        </div>
        <div className="flex w-[33%] h-50 bg-gray-200 items-center justify-center mt-4 ml-4 mb-4 rounded-xl">
          <h2 className="flex text-xl text-blue-500">leaderboard</h2>
        </div>
      </div>


      <div className="flex w-full h-100 bg-gray-200 items-center justify-center mb-4 rounded-xl">
        <h2 className="flex text-xl text-blue-500">recommended projects</h2>
      </div>

    </>
  );
}
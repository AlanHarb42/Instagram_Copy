function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img 
      src="https://pbs.twimg.com/profile_images/1456266135301607431/QcByil4d_400x400.jpg"
      className="rounded-full border p-[2px] w-16 h-16"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">AlanHarb</h2>
        <h3 className="text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">
        sign out
      </button>
    </div>
  )
}

export default MiniProfile

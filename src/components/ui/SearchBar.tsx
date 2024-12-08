export const SearchBar = () => {
  return (
    <div className="relative">
      <input 
        type="search"
        placeholder="Search"
        className="w-[180px] bg-[#F5F5F5] rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
      <svg 
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" 
        fill="none" 
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Search icon */}
      </svg>
    </div>
  )
} 
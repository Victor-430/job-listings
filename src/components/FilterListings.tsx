import { FilterListingsProps } from "../Types";

export const FilterListings = ({
  removeFilter,
  clearFilter,
  selectedFilters,
}: FilterListingsProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto w-[22rem] translate-y-1/2 transform rounded-md bg-white p-6 shadow-md sm:w-[90%]">
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-4">
          {selectedFilters.map((filter) => (
            <div className="rounded-md bg-LightBg" key={filter}>
              <span className="px-3 py-1 font-bold text-DarkCyan">
                {filter}
              </span>
              <button
                className="h-full rounded-r-md bg-DarkCyan px-3 py-1 font-bold text-white hover:bg-black"
                onClick={() => removeFilter(filter)}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={clearFilter}
          className="font-bold capitalize text-DarkCyan underline"
        >
          clear
        </button>
      </div>
    </div>
  );
};

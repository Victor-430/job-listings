import { JobWithAddFilterProp } from "../Types";
import { Tablets } from "./Tablets";

export const Job = ({ job, addFilter }: JobWithAddFilterProp) => {
  const featuredClassName = job.featured
    ? "border-l-[6px] border-DarkCyan"
    : "";

  return (
    <div
      className={`${featuredClassName} relative mx-auto w-[22rem] gap-8 rounded-md bg-white px-6 pb-8 pt-16 shadow-lg shadow-DarkCyan first:mt-52 last:mb-8 sm:grid sm:w-[90%] sm:grid-cols-2 sm:pt-8`}
    >
      <div className="sm:flex sm:flex-none sm:items-center sm:gap-4">
        <div className="absolute top-0 shrink-0 -translate-y-1/2 transform rounded-full sm:relative sm:translate-y-0">
          <img src={job.logo} alt={job.company} />
        </div>
        <div>
          <span className="flex items-center space-x-4">
            <h2 className="font-bold text-DarkCyan">{job.company}</h2>
            <div className="flex space-x-4 font-bold">
              {job.new && (
                <p className="rounded-2xl bg-DarkCyan px-3 uppercase text-white">
                  new!
                </p>
              )}

              {job.featured && (
                <p className="rounded-2xl bg-DarkGrayishCyan px-3 uppercase text-white">
                  featured
                </p>
              )}
            </div>
          </span>

          <h1 className="mb-3 mt-3 cursor-pointer font-bold text-DarkGrayishCyan sm:mb-1 sm:mt-1">
            {job.position}
          </h1>
          <span className="mb-6 flex items-center space-x-3 text-GrayishCyan sm:mb-0 sm:mt-0">
            <p>{job.postedAt} </p>
            <span className="h-1 w-1 rounded-full bg-GrayishCyan" />
            <p>{job.contract}</p>
            <span className="h-1 w-1 rounded-full bg-GrayishCyan" />
            <p>{job.location}</p>
          </span>
          <hr className="sm:hidden" />
        </div>
      </div>
      <Tablets key={job.id} job={job} addFilter={addFilter} />
    </div>
  );
};

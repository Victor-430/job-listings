import { JobWithAddFilterProp } from "../Types";

export const Tablets = ({ job, addFilter }: JobWithAddFilterProp) => {
  return (
    <>
      <div className="mt-4 font-bold text-DarkCyan sm:my-auto">
        <div className="flex flex-wrap gap-4">
          <p
            onClick={() => addFilter(job.role)}
            className="h-8 cursor-pointer rounded-md bg-LightBg px-4 py-1 hover:bg-DarkCyan hover:text-white"
          >
            {job.role}
          </p>
          <p
            onClick={() => addFilter(job.level)}
            className="h-8 cursor-pointer rounded-md bg-LightBg px-4 py-1 hover:bg-DarkCyan hover:text-white"
          >
            {job.level}
          </p>

          {job.tools.map((tool) => (
            <p
              onClick={() => addFilter(tool)}
              key={tool}
              className="h-8 cursor-pointer rounded-md bg-LightBg px-4 py-1 hover:bg-DarkCyan hover:text-white"
            >
              {tool}
            </p>
          ))}

          {job.languages.map((language) => (
            <p
              onClick={() => addFilter(language)}
              key={language}
              className="h-8 cursor-pointer rounded-md bg-LightBg px-4 py-1 hover:bg-DarkCyan hover:text-white"
            >
              {language}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

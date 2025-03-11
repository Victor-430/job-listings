import { useEffect, useState } from "react";
import { JobTypes } from "../Types";
import { FilterListings } from "./FilterListings";

import { Job } from "./Job";

export const Jobs = () => {
  const [jobs, setJobs] = useState<JobTypes[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobTypes[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const data = await fetch("/data/db.json");

        if (!data.ok) {
          throw new Error(`HTTP error! Status: ${data.status}`);
        }

        const res = await data.json();
        setJobs(res.jobs || []);
        setFilteredJobs(res.jobs || []);
        console.log(res);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "unknown Error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //Filter Jobs whenever selected filter changes
  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredJobs(jobs);
      return;
    }

    const newFilteredJobs = jobs.filter((job) => {
      // Check if all selected filters are present in this job

      return selectedFilters.every(
        (filter) =>
          job.role === filter ||
          job.level === filter ||
          job.languages.includes(filter) ||
          job.tools.includes(filter),
      );
    });

    setFilteredJobs(newFilteredJobs);
  }, [selectedFilters, jobs]);

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((list) => list !== filter));
  };

  const clearFilter = () => {
    setSelectedFilters([]);
  };

  return (
    <>
      {selectedFilters.length > 0 && (
        <div className="pb-24 sm:pb-16 md:pb-8 lg:pb-0">
          <FilterListings
            selectedFilters={selectedFilters}
            removeFilter={removeFilter}
            clearFilter={clearFilter}
          />
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center p-8">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">
            Loading jobs...
          </p>
        </div>
      )}

      {error && (
        <div className="mx-auto my-8 max-w-lg rounded-lg bg-red-50 p-6 shadow-md">
          <div className="flex items-center">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h3 className="ml-2 text-lg font-medium text-red-800">
              Error loading jobs
            </h3>
          </div>
          <p className="mt-2 text-red-700">{error}</p>
          <button
            className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-16 sm:gap-12">
        {filteredJobs.map((job) => (
          <Job key={job.id} job={job} addFilter={addFilter} />
        ))}
      </div>
    </>
  );
};

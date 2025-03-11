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

      <div className="grid grid-cols-1 gap-16 sm:gap-12">
        {filteredJobs.map((job) => (
          <Job key={job.id} job={job} addFilter={addFilter} />
        ))}
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import LatestJobCard from "../Pages/Shared/LatestJobCard";
import { div } from "motion/react-client";

const LatestJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, []);

  return (
    <div className="my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {jobs.map((job) => (
          <LatestJobCard key={job._id} job={job}></LatestJobCard>
        ))}
      </div>
    </div>
  );
};

export default LatestJob;

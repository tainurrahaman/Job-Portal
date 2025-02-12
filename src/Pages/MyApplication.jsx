import { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import axios from "axios";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:5000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });

    axios
      .get(`http://localhost:5000/job-application?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJobs(res.data);
      });
  }, [user.email]);

  const handleJobDelete = (id) => {
    fetch(`http://localhost:5000/job-application/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Job Application deleted",
            icon: "success",
            draggable: true,
          });
        }
        const remainingJobs = jobs.filter((job) => job._id !== id);
        setJobs(remainingJobs);
      });
  };

  return (
    <div>
      {jobs.map((job) => (
        <div key={job._id} className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.title}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button
                    onClick={() => handleJobDelete(job._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MyApplication;

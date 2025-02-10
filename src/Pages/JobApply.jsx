import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const submitJobApplication = (event) => {
    event.preventDefault();
    const form = event.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedin, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };

    fetch(`http://localhost:5000/job-application`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Job Application Successfully",
            icon: "success",
            draggable: true,
          });
          navigate("/myApplication");
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 my-5 shadow-2xl">
      <h1 className="text-4xl font-bold text-center">Job Apply here!</h1>
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn</span>
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className=" mt-6">
          <button className="btn btn-primary w-full">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;

import { BsBagFill } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const JobCardDetails = () => {
  const { title, jobType, _id } = useLoaderData();

  return (
    <div className="my-6">
      <div>
        <img
          className="rounded-xl"
          src="https://i.ibb.co.com/x8q1jn6b/thumb.png"
          alt="Team Image"
        />
      </div>
      <div className="flex justify-between items-center py-5">
        <div>
          <h3 className="font-bold text-2xl">
            {title}, Creator Success Full Time
          </h3>
          <p className="flex items-center text-[12px] gap-1">
            <BsBagFill></BsBagFill>
            {jobType}
          </p>
        </div>
        <div>
          <Link to={`/jobApply/${_id}`}>
            <button className="flex items-center gap-1 bg-blue-600 p-3 rounded-lg hover:bg-purple-800">
              <IoCheckmarkCircleOutline></IoCheckmarkCircleOutline> Apply Now
            </button>
          </Link>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default JobCardDetails;

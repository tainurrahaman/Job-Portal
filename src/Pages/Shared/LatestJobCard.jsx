import { HiCurrencyDollar } from "react-icons/hi";
import { RiMapPinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const LatestJobCard = ({ job }) => {
  const {
    requirements,
    company,
    description,
    location,
    title,
    _id,
    salaryRange,
    company_logo,
  } = job;
  return (
    <div className="card card-compact bg-gray-800">
      <div className="flex items-center gap-1 p-3">
        <figure>
          <img className="w-[52px]" src={company_logo} alt="Logos" />
        </figure>
        <div>
          <h3 className="font-bold text-xl">{company}</h3>
          <p className="flex items-center text-[15px]">
            <RiMapPinLine></RiMapPinLine>
            {location}
          </p>
        </div>
      </div>
      <div className="my-5 card-body">
        <h2 className="card-title">{title}</h2>
        <p className="pb-5">{description}</p>
        <div className="flex flex-wrap gap-1">
          {requirements.map((skill, index) => (
            <p
              key={index}
              className="border border-gray-500 rounded-lg px-2 hover:text-purple-800 hover:bg-gray-300"
            >
              {skill}
            </p>
          ))}
        </div>
        <div>
          {" "}
          <p className="font-semibold flex items-center ">
            Salary: <HiCurrencyDollar></HiCurrencyDollar> {salaryRange.min} -
            {salaryRange.max}
          </p>
        </div>
        <div className="mt-3">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary w-full">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCard;

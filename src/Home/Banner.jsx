import { easeOut, motion } from "framer-motion";
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
      <div className="flex-1 ">
        <motion.img
          animate={{ y: [0, 80, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          src={team1}
          className="max-w-sm w-64 border-l-6 border-b-6 rounded-t-[35px] rounded-br-[35px] shadow-2xl"
        />
        <motion.img
          animate={{ x: [70, 150, 70] }}
          transition={{ duration: 10, repeat: Infinity }}
          src={team2}
          className="max-w-sm w-64 border-l-6 border-b-6 rounded-t-[35px] rounded-br-[35px] shadow-2xl"
        />
      </div>
      <div className="flex-1">
        <motion.h1
          animate={{ x: 50 }}
          transition={{
            duration: 5,
            delay: 2,
            ease: easeOut,
            repeat: Infinity,
          }}
          className="text-5xl font-bold"
        >
          Latest{" "}
          <motion.span
            animate={{ color: ["#f33d16", "#e5f30b", "#0bf32e"] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity }}
          >
            Jobs
          </motion.span>{" "}
          For you
        </motion.h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;

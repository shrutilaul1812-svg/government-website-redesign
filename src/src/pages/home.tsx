import image from "./image.svg";
import rectangle4 from "./rectangle-4.png";
import rectangle6 from "./rectangle-6.png";
import rectangle9 from "./rectangle-9.png";
import "./style.css";
import vector from "./vector.svg";
import vector1 from "./vector-1.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";

export const MacbookPro = () => {
  return (
    <div className="macbook-pro">
      <div className="navbar">
        <div className="rectangle" />
        <div className="text-wrapper">REWARDS</div>
        <div className="div">LEADERBOARD</div>
        <div className="text-wrapper-2">ABOUT SAATHI</div>
        <div className="text-wrapper-3">HOME</div>
        <div className="text-wrapper-4">MISSION</div>
        <img className="vector" alt="Vector" src={vector1} />
        <img className="img" alt="Rectangle" src={rectangle9} />
        <img className="rectangle-2" alt="Rectangle" src={rectangle4} />
      </div>
      <div className="rectangle-3" />
      <div className="rectangle-4" />
      <div className="text-wrapper-5">Explore Mission</div>
      <div className="rectangle-5" />
      <div className="text-wrapper-6">950+</div>
      <div className="text-wrapper-7">Awards Distributed</div>
      <div className="text-wrapper-8">5.2Cr+</div>
      <div className="text-wrapper-9">Citizen Reached</div>
      <div className="ellipse" />
      <img className="vector-2" alt="Vector" src={vector2} />
      <div className="text-wrapper-10">230+</div>
      <div className="text-wrapper-11">Mission Completed</div>
      <div className="ellipse-2" />
      <img className="rectangle-6" alt="Rectangle" src={rectangle6} />
      <div className="text-wrapper-12">Make an Impact</div>
      <p className="become-a-SAATHI">
        <span className="span">Become a</span>
        <span className="text-wrapper-13">&nbsp;</span>
        <span className="text-wrapper-14">SAATHI</span>
      </p>
      <p className="join-millions-of">
        Join millions of citizens in building a better India by spreading
        <br />
        awareness and participating in government initiatives
      </p>
      <p className="about-the-saathis">
        <span className="text-wrapper-15">About the </span>
        <span className="text-wrapper-16">Saathis 2.0</span>
        <span className="text-wrapper-15"> Program</span>
      </p>
      <p className="mygov-saathi-is">
        MyGov Saathi 2.0 is an initiative inviting all Indian citizens to raise
        awareness <br />
        of government schemes, collect community feedback, and participate in{" "}
        <br />
        governance campaigns in exchange for recognition and rewards.
      </p>
      <div className="rectangle-7" />
      <div className="text-wrapper-17">Join Now</div>
      <div className="ellipse-3" />
      <img className="vector-3" alt="Vector" src={vector} />
      <div className="text-wrapper-18">1.8M+</div>
      <div className="text-wrapper-19">Active Saathis</div>
      <img className="vector-4" alt="Vector" src={image} />
      <div className="ellipse-4" />
      <img className="vector-5" alt="Vector" src={vector3} />
    </div>
  );
};

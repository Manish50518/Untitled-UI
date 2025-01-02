import Blog from "./Blog";
import FAQ from "./FAQ";
import Features1 from "./Features1";
import Features2 from "./Features2";
import Feedback from "./Feedback";
import Signup from "./Signup";
import Trial from "./Trial";

function Body() {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <Signup />
      <Features1 />
      <Feedback />
      <Features2 />
      <FAQ />
      <Blog />
      <Trial />
    </div>
  );
}

export default Body;

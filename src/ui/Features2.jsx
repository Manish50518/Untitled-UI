import { IoChatbubblesOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiChatSmile2Line } from "react-icons/ri";

function Features2() {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8">
      {/* Text Content */}
      <div className="text-center mb-8">
        <h3 className="text-textPurple text-base font-semibold rounded-full bg-primaryPurple p-2 w-[83px] mx-auto border-textPurple mb-4">
          Features
        </h3>
        <h1 className="text-headingFont text-2xl sm:text-4xl sm:leading-[44px] leading-[32px] tracking-[-0.02em] font-semibold mb-4">
          Cutting-edge features for advanced analytics
        </h1>
        <p className="text-subText text-sm sm:text-[18px] sm:leading-[28px] leading-[24px] sm:w-[768px] w-full font-normal mb-4">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Images */}
      <div className="relative flex justify-center items-center w-full sm:w-[768px] h-auto sm:h-[512px] mb-8">
        {/* Background Image */}
        <img
          src="3_2 screen mockup.png"
          alt="Web screen"
          className="w-full max-w-[800px] object-contain"
        />

        {/* Floating Image */}
        <img
          src="iPhone 12 Pro mockup.png"
          alt="iPhone screen"
          className="absolute top-[90px] left-[50%] transform -translate-x-1/2 sm:translate-x-0 sm:left-[-30px] max-w-[120px] sm:max-w-[200px]"
        />
      </div>

      {/* Features Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 w-full sm:w-[1216px]">
        {/* Feature 1 */}
        <div className="mt-9 text-center flex flex-col items-center">
          <IoChatbubblesOutline className="mb-3 text-3xl p-1 shadow-lg rounded-md text-gray-700" />
          <h2 className="text-headingFont text-lg sm:text-xl font-semibold leading-[30px] mb-2">
            Share team inboxes
          </h2>
          <p className="text-sm sm:text-base text-subText font-normal leading-[24px] mb-4">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <a
            href=""
            className="text-sm sm:text-base font-semibold text-textPurple"
          >
            Learn more
          </a>
        </div>

        {/* Feature 2 */}
        <div className="mt-9 text-center flex flex-col items-center">
          <AiOutlineThunderbolt className="mb-3 text-3xl p-1 shadow-lg rounded-md text-gray-700" />
          <h2 className="text-headingFont text-lg sm:text-xl font-semibold leading-[30px] mb-2">
            Deliver instant answers
          </h2>
          <p className="text-sm sm:text-base text-subText font-normal leading-[24px] mb-4">
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
          <a
            href=""
            className="text-sm sm:text-base font-semibold text-textPurple"
          >
            Learn more
          </a>
        </div>

        {/* Feature 3 */}
        <div className="mt-9 text-center flex flex-col items-center">
          <RiChatSmile2Line className="mb-3 text-3xl p-1 shadow-lg rounded-md text-gray-700" />
          <h2 className="text-headingFont text-lg sm:text-xl font-semibold leading-[30px] mb-2">
            Manage your team with reports
          </h2>
          <p className="text-sm sm:text-base text-subText font-normal leading-[24px] mb-4">
            Measure what matters with Untitled’s easy-to-use reports. You can
            filter, export, and drill down on the data in a couple clicks.
          </p>
          <a
            href=""
            className="text-sm sm:text-base font-semibold text-textPurple"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Features2;

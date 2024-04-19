import { IoIosLink } from "react-icons/io";

const Contact = () => {
  return (
    <div className="my-9" id="contact">
      <h3 className="text-2xl font-bold text-custom-red">Contact me</h3>
      <div className="text-4xl">&#8592;</div>
      <div className="text-balance font-semibold py-2 my-2 text-zinc-600">
        I&apos;m an Indian Full Stack Web Developer working on technologies like
        React JS, Typescript, Next JS, Node JS, Express JS, etc.
      </div>
      <div className="text-balance font-semibold py-2 my-2 text-zinc-600">
        Outside of work, I enjoy staying active by playing badminton and table
        tennis, and I unwind by catching up on the latest series.
      </div>
      <div className="text-balance font-semibold py-2 my-2 text-zinc-600">
        I strive for a balance between professional achievements and personal
        development.
      </div>
      <div className="text-balance font-semibold py-2 my-2">
        <div className="flex flex-row text-custom-red gap-4 underline">
          <div className="flex items-center">
            dev
            <IoIosLink />
          </div>
          <div className="flex items-center">
            polywork
            <IoIosLink />
          </div>
          <div className="flex items-center">
            npmprofile
            <IoIosLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

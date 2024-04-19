// eslint-disable-next-line react/prop-types
const CredCard = ({ cardName, company, years, description, color }) => {
  return (
    <div className="border-2 border-custom-sand bg-white rounded-[30px] px-5 py-3 my-3">
      <div
        className={`font-bold text-base py-1 px-4 rounded-full ${color} inline-block my-2`}
      >
        {cardName}
      </div>
      <div className="flex justify-between font-bold flex-wrap">
        <div>{company}</div>
        <div>{years}</div>
      </div>
      <div className="text-sm text-zinc-500 py-1">{description}</div>
    </div>
  );
};

export default CredCard;

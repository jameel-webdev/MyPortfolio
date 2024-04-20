const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="py-4 flex justify-center items-center text-center font-semibold">
      <h3 className="text-custom-red flex items-center">
        &copy; {currentYear}
        <span className="bg-custom-red w-3 h-px rotate-90"></span> Built by
        Jameel
      </h3>
    </div>
  );
};

export default Footer;

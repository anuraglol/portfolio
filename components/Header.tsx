const Li = ({ text }) => {
  return <li className="text-lg font-semibold text-gray-500 mx-2">{text}</li>;
};

const Header = () => {
  return (
    <header className="px-4 py-4 flex items-center font-inter shadow-md flex flex-row">
      <p className="text-2xl font-semibold text-gray-900">
          Anurag
      </p>

      <ul className="flex flex-row items-center">
        <Li text="About" />
      </ul>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-gray-200 p-5">
      <nav className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex justify-between items-center">
        <Link to={"/"} className="hover:text-green-600">
          Home
        </Link>
        <Link to={"/cart"}>
          <FaCartShopping className="hover:text-green-600 text-2xl" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;

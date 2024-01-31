import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">The page is not found</h1>
        <Link to={"/"}>Go to home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;

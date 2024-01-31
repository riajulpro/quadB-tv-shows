import { Link } from "react-router-dom";
import useTvShows from "../../api/useTvShows";

const Home = () => {
  // GETTING DATA FROM THE API
  const { data: shows, error, isPending } = useTvShows();

  // WHEN DATA IS LOADING
  if (isPending) {
    return "Please wait...";
  }

  //   WHEN THERE IS AN ERROR
  if (error) {
    return (
      <h1 className="font-bold lg:text-3xl">
        Something went wrong in data fetching...
      </h1>
    );
  }

  //   WHEN EVERYTHING IS FINE
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <div className="my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {shows.map((data) => (
          <Link key={data?.show?.id} to={`/details/${data?.show?.id}`}>
            <div className="relative border overflow-hidden rounded-sm flex flex-col justify-between hover:shadow-lg active:scale-95 duration-150">
              <span className="bg-green-600/75 text-white rounded-l-lg px-3 py-1 text-xs absolute top-3 right-0">
                {data?.show?.rating?.average
                  ? data?.show?.rating?.average
                  : "0"}
              </span>
              <img
                src={`${
                  data?.show?.image?.medium == null
                    ? "https://i.ibb.co/nfm9PvB/R.jpg"
                    : data?.show?.image?.medium
                }`}
                alt={data?.show?.name}
              />
              <div className="p-2 flex justify-between items-center">
                <h5 className="font-semibold text-sm">{data.show.name}</h5>
                <p className="text-xs">{data?.show?.status}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

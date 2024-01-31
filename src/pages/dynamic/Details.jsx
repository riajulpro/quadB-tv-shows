import { Link, useParams } from "react-router-dom";
import useTvShows from "../../api/useTvShows";
import DOMPurify from "dompurify";
import "./Details.css";
import { useState } from "react";
import CartModal from "../../components/shared/CartModal";
import { FaInfoCircle } from "react-icons/fa";
import { Toaster } from "react-hot-toast";

const Details = () => {
  // GETTING THE ESSENTIALS
  const [showModal, setShowModal] = useState(false);

  //   MODAL ACTION HANDLER
  const showModalNow = () => {
    setShowModal(true);
  };

  const closeModalNow = () => {
    setShowModal(false);
  };

  const { id: showId } = useParams();
  const { isPending, error, data } = useTvShows();

  //   WHEN DATA IS LOADING
  if (isPending) {
    return "Data is loading...";
  }

  //   WHEN THERE IS AN ERROR
  if (error) {
    return (
      <>
        <h1>Something went wrong while data fetching...</h1>
      </>
    );
  }

  //   WHEN EVERYTHING IS WORKING FINE
  const currentShow = data.filter((d) => d.show.id == showId);
  const sanitizedHtml = DOMPurify.sanitize(currentShow[0]?.show?.summary);

  return (
    <div>
      <div className="my-5">
        {currentShow.map((data) => (
          <div
            key={data.show.id}
            className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="col-span-12 md:col-span-8">
                <h1 className="text-3xl font-bold mb-3 uppercase">
                  {data?.show?.name}
                </h1>
                <div className="flex flex-col lg:flex-row gap-3">
                  <img
                    src={`${
                      data?.show?.image?.medium == null
                        ? "https://i.ibb.co/nfm9PvB/R.jpg"
                        : data?.show?.image?.medium
                    }`}
                    alt={data?.show?.name}
                    width={200}
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                  ></div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-col-reverse md:flex-col gap-3">
                <button
                  className="bg-green-600 hover:bg-green-500 active:scale-95 text-white text-xs font-semibold px-3 py-2 w-full rounded-md select-none"
                  onClick={() => showModalNow()}
                >
                  Add to Cart
                </button>
                <div className="bg-gray-200 rounded-md p-2 select-none">
                  <h3 className="text-lg flex gap-2 items-center">
                    <FaInfoCircle /> <span>Show Info</span>
                  </h3>
                  <p className="text-xs">
                    <span className="font-bold">Network: </span>
                    <span>{data?.show?.network?.name}</span>
                  </p>
                  <p className="text-xs">
                    <span className="font-bold">Runtime: </span>
                    <span>{data?.show?.network?.runtime}</span>
                  </p>
                  <p className="text-xs">
                    <span className="font-bold">Status: </span>
                    <span>{data?.show?.network?.status}</span>
                  </p>
                  <p className="text-xs">
                    <span className="font-bold">Show Type: </span>
                    <span>{data?.show?.network?.type}</span>
                  </p>
                  <p className="text-xs">
                    <span className="font-bold">Language: </span>
                    <span>{data?.show?.network?.language}</span>
                  </p>
                  <p className="text-xs">
                    <span className="font-bold">Genre: </span>
                    <span>
                      {data?.show?.genres?.map((genre) => (
                        <span key={genre}>{genre} | </span>
                      ))}
                    </span>
                  </p>
                  <p className="text-xs">
                    <span className="font-bold">Premiered: </span>
                    <span>{data?.show?.network?.premiered}</span>
                  </p>
                  <p className="text-xs">
                    <span className="font-bold">Official Site: </span>
                    <span className="text-violet-600 hover:underline">
                      <Link to={data?.show?.url} className="font-semibold">
                        visit now
                      </Link>
                    </span>
                  </p>
                  <p className="text-xs">
                    <span className="font-bold">Rating: </span>
                    <span>{data?.show?.network?.rating?.average}</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              {showModal ? (
                <CartModal closeFn={closeModalNow} data={data} />
              ) : (
                ""
              )}
            </div>
            <Toaster />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;

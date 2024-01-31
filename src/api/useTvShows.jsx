import { useQuery } from "@tanstack/react-query";

const useTvShows = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["tvShowsData"],
    queryFn: () =>
      fetch("https://api.tvmaze.com/search/shows?q=all").then((res) =>
        res.json()
      ),
  });

  return { isPending, error, data };
};

export default useTvShows;

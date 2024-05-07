import { useSearchParams } from "react-router-dom";

const useGetQuery = () => {
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("searchTerm");
  const query = searchTerm ? `?searchTerm=${searchTerm}` : "";
  return { query };
};

export default useGetQuery;

import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.toString());
  console.log(searchParams.get("name"));

  const currentLocation = useLocation();
  console.log(currentLocation);
  console.log(currentLocation.pathname);

  return <p>User {params.id}</p>;
};

export default UserDetail;

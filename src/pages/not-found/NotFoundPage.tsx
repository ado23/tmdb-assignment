import useRouteHelpers from "router/routeHelpers";

const NotFoundPage = () => {
  const { goBack } = useRouteHelpers();

  return (
    <div>
      <h1>404 Page not found</h1>

      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default NotFoundPage;

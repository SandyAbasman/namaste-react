import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>{error.status}</h2>
    </div>
  );
};

export default Error;

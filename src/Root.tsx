import { RouterProvider } from "react-router-dom"
import { routes } from "./routes";
import { Fragment } from "react/jsx-runtime";

function Root() {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  )
}

export default Root;
                  
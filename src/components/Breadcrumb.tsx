import { FaHome } from "react-icons/fa";
// =======================================================================================================================
function Breadcrumb({
  idProduct,
  pathname,
}: {
  idProduct: number;
  pathname: string;
}) {
  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2">
          <li className="flex items-center">
            <h2 className="flex items-center gap-1 px-3 py-1 font-bold cursor-default bg-blue-100 text-blue-800 rounded-lg transition">
              <i>
                <FaHome />
              </i>{" "}
              Home
            </h2>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="flex items-center">
            <h2 className="px-3 py-1 font-bold bg-green-100 text-primary cursor-default rounded-lg  transition">
              {pathname.charAt(0).toUpperCase() +
                pathname.slice(1).toLocaleLowerCase()}
            </h2>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li>
            <span className="px-3 py-0.5 cursor-default bg-gray-200 text-gray-700 rounded-lg font-semibold">
              {idProduct}
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;

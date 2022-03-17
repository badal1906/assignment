import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Home.css"

const Home = (props) => {
  const details = useSelector((state) => state.Details);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const deleteData = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    localStorage.removeItem("list", JSON.stringify(id));
    toast.success("Data deleted successfully");
  };

  useEffect(() => {
    localStorage.setItem(`list`, JSON.stringify(details));
  }, [details]);

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Details
        </Link>
        
        <div className="col-md-10 mx-auto my-4">
          <input
            type="text"
            className="m-2 searchBar"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          {}
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {details.length > 0 ? (
                details
                  .filter((data) => {
                    if (search == "") {
                      return data;
                    } else if (
                      data.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      console.log(data);
                      return data;
                    }
                  })
                  .map((data, id) => (
                    <tr key={id}>
                      <td>{id + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.price}</td>
                      <td>{data.qty}</td>
                      <td>
                        <Link
                          to={`/edit/${data.id}`}
                          className="btn btn-sm btn-primary mr-1"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={() => deleteData(data.id)}
                          className="btn btn-sm btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <th>No data found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

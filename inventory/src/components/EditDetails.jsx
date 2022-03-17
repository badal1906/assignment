import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditDetails = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();
  const details = useSelector((state) => state.Details);
  const currentDetails = details.find((data) => data.id === parseInt(id));

  useEffect(() => {
    if (currentDetails) {
      setName(currentDetails.name);
      setPrice(currentDetails.price);
      setQty(currentDetails.qty);
    }
  }, [currentDetails]);


  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkName = details.find((data) => data.id !== parseInt(id) && data.name === name && name);

    if (!name || !price || !qty) {
      return toast.warn("Please fill all details", {});
    }
    if (checkName) {
      return toast.error("This name is already taken");
    }
    const data = {
      id: parseInt(id),
      name,
      price,
      qty,
    };

    dispatch({ type: "UPDATE_DETAILS",payload:data });
    // localStorage.setItem(id,JSON.stringify(data))
    toast.success("Data updated sucessfully!!");
    history.push("/")
  };

  return (
    <div className="container-fluid">
      {currentDetails ? (
        <>
          <h1 className="text-center my-5 text-dark py-3 display-2">
            Update Details {id}
          </h1>
          <div className="row ">
            <div className="col-md-6  p-5 mx-auto shadow">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Quantity"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4">
                  <input
                    className="btn btn-dark"
                    type="submit"
                    value="Update"
                  />
                  <Link
                    to="/"
                    className="btn btn-danger ml-2"
                    type="submit"
                    value="Cancel"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-center">No Data Found</h1>
      )}
    </div>
  );
};

export default EditDetails;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let id = 0;

const AddDetails = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const details = useSelector((state) => state.Details);

  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkName = details.find((data) => data.name === name && name);
    // const checkName = details.find((data) => console.log(data.name));
    if (!name || !price || !qty) {
      return toast.warn("Please fill all details", {});
    }
    if (checkName) {
      return toast.error("This name is already taken");
    }
    const data = {
      // id: details[details.length - 1].id + 1,
      id: id++,
      name,
      price,
      qty,
    };

    dispatch({ type: "ADD_DETAILS", payload: data });
    // localStorage.setItem("list", JSON.stringify(data));
    toast.success("Data added sucessfully!!");
    history.push("/");
  };

  // useEffect(() => {
  //   localStorage.setItem(`list`, JSON.stringify(details));
  // }, [handleSubmit]);

  return (
    <div className="container-fluid">
      <h1 className="text-center my-5 text-dark py-3 display-2">Add Product</h1>
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
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
            <div className="form-group mt-4">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
              <Link
                to="/"
                className="btn btn-danger m-4"
                type="submit"
                value="Cancel"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDetails;

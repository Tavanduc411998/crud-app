import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import "./projectStatus.css";
import { useSelector, useDispatch } from "react-redux";
import { addNewStatus } from "../../actions/status";
import { useState } from "react";

ProjectStatus.propTypes = {};

function ProjectStatus(props) {
  const statusList = useSelector((state) => state.status.statuses);

  return (
    <div>
      <h2>Project Status</h2>
      <div className="ps-nav">
        <AddEditPage />
      </div>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Name</th>
            <th>Description</th>
            <th>Active/Inactive</th>
          </tr>
        </thead>
        <tbody>
          {statusList.map((status) => (
            <tr key={status.id}>
              <td>{status.id}</td>
              <td>{status.name}</td>
              <td>{status.description}</td>
              <td>{status.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="ps-footer">
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default ProjectStatus;

function AddEditPage(props) {
  const statusList = useSelector((state) => state.status.statuses);
  const [newStatus, setNewStatus] = useState({
    id: statusList.length + 1,
    name: "",
    description: "",
    active: "",
  });
  const dispatch = useDispatch();

  const handleAddStatusClick = (e) => {
    e.preventDefault();
    const action = addNewStatus(newStatus);
    dispatch(action);
    console.log(newStatus);
    setNewStatus({
      id: newStatus.id + 1,
      name: "",
      description: "",
      active: "",
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name..."
          value={newStatus.name}
          onChange={(e) => {
            setNewStatus({ ...newStatus, [e.target.name]: e.target.value });
          }}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="description..."
          value={newStatus.description}
          onChange={(e) =>
            setNewStatus({ ...newStatus, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="active">Active</label>
        <input
          type="text"
          id="active"
          name="active"
          placeholder="Active..."
          value={newStatus.active}
          onChange={(e) =>
            setNewStatus({ ...newStatus, [e.target.name]: e.target.value })
          }
        />

        <input
          type="button"
          value="Create"
          name="id"
          onClick={handleAddStatusClick}
        />
      </form>
    </div>
  );
}

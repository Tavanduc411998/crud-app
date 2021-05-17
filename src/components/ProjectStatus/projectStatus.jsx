import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./projectStatus.css";
import { useSelector, useDispatch } from "react-redux";
import { addNewStatus } from "../../actions/status";

ProjectStatus.propTypes = {};

function ProjectStatus(props) {
  const statusList = useSelector((state) => state.status.statuses);
  const dispatch = useDispatch();

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

const randomIDd = () => {
  return 1000 + Math.floor(Math.random() * 9000);
};

function AddEditPage(props) {
  const dispatch = useDispatch();

  const handleAddStatusClick = () => {
    const newId = randomIDd();
    const newStatus = {
      id: newId,
      name: `Status ${newId}`,
      description: `Description ${newId}`,
      active: "true",
    };
    const action = addNewStatus(newStatus);
    dispatch(action);
    console.log(newStatus);
  };

  return (
    <div>
      <form>
        <label for="id">Id</label>
        <input type="text" id="id" name="id" placeholder="Id..." />

        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name..." />

        <label for="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description..."
        />

        <label for="primary">Primary</label>
        <input
          type="text"
          id="primary"
          name="primary"
          placeholder="Primary..."
        />

        <label for="active">Active</label>
        <input type="text" id="active" name="active" placeholder="Active..." />

        <input type="button" value="Create" onClick={handleAddStatusClick} />
      </form>
    </div>
  );
}

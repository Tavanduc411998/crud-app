import React from "react";
import { Link } from "react-router-dom";
import "./allCenters.css";

AllCenters.propTypes = {};

function AllCenters(props) {
  return (
    <div>
      <h2>All Centers</h2>
      <div className="centers-nav">
        <button>
          <Link to="/addEdit">NEW</Link>
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Center Name</th>
            <th>Mission</th>
            <th>Tech Stack Quantity</th>
            <th>Projects Quantity</th>
            <th>Employees Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => console.log("Hello")}>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <div className="centers-footer">
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default AllCenters;

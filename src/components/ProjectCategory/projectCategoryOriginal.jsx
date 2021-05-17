import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./projectCategory.css";

ProjectCategory.propTypes = {};

function ProjectCategory(props) {
  return (
    <div>
      <h2>Project Category</h2>
      <div className="pc-nav">
        <button>
          <Link to="/addEdit">NEW</Link>
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Name</th>
            <th>Description</th>
            <th>Primary</th>
            <th>Active/Inactive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
      <div className="pc-footer">
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default ProjectCategory;

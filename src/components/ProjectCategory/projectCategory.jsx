import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./projectCategory.css";
import AddEditPage from "../AddEdit/addEdit";

ProjectCategory.propTypes = {};

function ProjectCategory(props) {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "category 1",
      description: "category description 1",
      primary: 1,
      active: "true",
    },
    {
      id: 2,
      name: "category 2",
      description: "category description 2",
      primary: 2,
      active: "true",
    },
  ]);

  const saveData = (newCategories) => {
    localStorage.setItem("categories", JSON.stringify(newCategories));
  };

  useEffect(() => {
    if (localStorage.getItem("categories")) {
      setCategories(JSON.parse(localStorage.getItem("categories")));
    }
  }, []);

  const add = ({id, name, description, primary, active}) => {
    const newCategories = [
      ...categories,
      {
        id: id,
        name: name,
        description: description,
        primary: primary,
        active: active,
      },
    ];
    setCategories(newCategories);
    saveData(newCategories);
  };

  return (
    <div>
      <h2>Project Category</h2>
      <div className="pc-nav">
        <button>
          <AddEditPage add={add} />
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
          {categories.map((cat, index) => {
            console.log(cat.id)
            return (
            <tr key={index}>
              {/* <td>{cat.id}</td> */}
              {/* <td>{cat.name}</td>
              <td>{cat.description}</td>
              <td>{cat.primary}</td>
              <td>{cat.active}</td> */}
              <td>{cat.name}</td>
              <td>{cat.description}</td>
              <td>{cat.primary}</td>
              <td>{cat.active}</td>
              <td>{cat.active}</td>
            </tr>
          )})}
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

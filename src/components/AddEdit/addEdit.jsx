import React from "react";
import { useState } from "react";
import "./addEdit.css";

AddEditPage.propTypes = {};

function AddEditPage({ add }) {
  const [newCategory, setNewCategory] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCategory) return;
    add(newCategory);
    setNewCategory([]);
  };
  return (
    <div>
      <h2>Add Edit Page</h2>
      <form onSubmit={handleSubmit}>
        <label for="id">Id</label>
        <input
          type="text"
          id="id"
          name="id"
          placeholder="Id..."
          value={newCategory.id}
          onChange={(e) => setNewCategory(e.target.value)}
        />

        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name..."
          value={newCategory.name}
          onChange={(e) => setNewCategory(e.target.value)}
        />

        <label for="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description..."
          value={newCategory.description}
          onChange={(e) => setNewCategory(e.target.value)}
        />

        <label for="primary">Primary</label>
        <input
          type="text"
          id="primary"
          name="primary"
          placeholder="Primary..."
          value={newCategory.primary}
          onChange={(e) => setNewCategory(e.target.value)}
        />

        <label for="active">Active</label>
        <input
          type="text"
          id="active"
          name="active"
          placeholder="Active..."
          value={newCategory.active}
          onChange={(e) => setNewCategory(e.target.value)}
        />

        {/* <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select> */}

        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default AddEditPage;

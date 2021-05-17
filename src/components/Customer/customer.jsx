import React from "react";
import './customer.css';

Customer.propTypes = {};

function Customer(props) {
  return (
    <div>
      <h2>Customers</h2>
      <div className="cus-nav">
        <button>NEW</button>
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
      <div className="cus-footer">
          <button>Prev</button>
          <button>Next</button>
      </div>
    </div>
  );
}

export default Customer;

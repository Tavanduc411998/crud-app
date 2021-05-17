import React from 'react';
import './teckStack.css';

TechStack.propTypes = {
    
};

function TechStack(props) {
    return (
        <div>
          <h2>Tech Stack</h2>
          <div className="ts-nav">
            <button>NEW</button>
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
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
          <div className="ts-footer">
              <button>Prev</button>
              <button>Next</button>
          </div>
        </div>
      );
}

export default TechStack;
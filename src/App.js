import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import ProjectCategory from "./components/ProjectCategory/projectCategory";
import ProjectStatus from "./components/ProjectStatus/projectStatus";
import Customer from "./components/Customer/customer";
import TechStack from "./components/TechStack/techStack";
import AllCenters from "./components/ManageCenter/allCenters";
import AddEditPage from "./components/AddEdit/addEdit";

function ManageEmployees() {
  return <h2>ManageEmployees</h2>;
}

function ManageProjects() {
  return <h2>ManageProjects</h2>;
}

function QuantityProjects() {
  return <h2>QuantityProjects</h2>;
}

function QuantityEmployees() {
  return <h2>QuantityEmployees</h2>;
}

function App() {
  return (
    <Router>
      <div className="container">
        <div className="left-nav">
          <nav>
            <ul>
              <li>
                <p>Category (Tất cả bảng giống nhau hết)</p>
                <ul>
                  <li>
                    <Link to="/projectCategory">Project category</Link>
                  </li>
                  <li>
                    <Link to="/projectStatus">Project status</Link>
                  </li>
                  <li>
                    <Link to="/techStack">Tech stack</Link>
                  </li>
                  <li>
                    <Link to="/customer">Customers</Link>
                  </li>
                </ul>
              </li>

              <li>
                <p>Management</p>
                <ul>
                  <li>
                    <Link to="/mngCenter">Center, department</Link>
                  </li>
                  <li>
                    <Link to="/mngEmployee">Employee</Link>
                  </li>
                  <li>
                    <Link to="/mngProject">Project</Link>
                  </li>
                </ul>
              </li>

              <li>
                <p>Report</p>
                <ul>
                  <li>
                    <Link to="/reportProjects">Quantity of projects</Link>
                  </li>
                  <li>
                    <Link to="/reportEmployees">Quantity of employees</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div className="right-content">
          <Switch>
            <Redirect exact from="/" to="/projectCategory" />

            <Route path="/projectCategory" component={ProjectCategory} />
            <Route path="/projectStatus" component={ProjectStatus} />
            <Route path="/techStack" component={TechStack} />
            <Route path="/customer" component={Customer} />
            <Route path="/mngCenter" component={AllCenters} />
            <Route path="/mngEmployee" component={ManageEmployees} />
            <Route path="/mngProject" component={ManageProjects} />
            <Route path="/reportProjects" component={QuantityProjects} />
            <Route path="/reportEmployees" component={QuantityEmployees} />
            <Route path="/addEdit" component={AddEditPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

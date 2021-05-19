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
import ManageEmployees from "./components/ManageEmployee/employee";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

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
        <Layout className="layout">
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Category">
                  <Menu.Item key="1">
                    <Link to="/projectCategory">Project category</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/projectStatus">Project status</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/techStack">Tech stack</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/customer">Customers</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<LaptopOutlined />}
                  title="Management"
                >
                  <Menu.Item key="5">
                    <Link to="/mngCenter">Center, department</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/mngEmployee">Employee</Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/mngProject">Project</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="Report"
                >
                  <Menu.Item key="8">
                    <Link to="/reportProjects">Quantity of projects</Link>
                  </Menu.Item>
                  <Menu.Item key="9">
                    <Link to="/reportEmployees">Quantity of employees</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
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
            </Layout>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

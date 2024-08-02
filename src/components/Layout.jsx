import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate()
    const navToUser = () => {
        navigate("/add-user");
    }

  return (
    <div className="col-md-12 m-auto">
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="navbar-collapse collapse col-md-10 order-1 pl-3 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link navbar-brand" to="/">
               React User CRUD
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-collapse collapse col-md-2 order-3 dual-collapse2">
          <button className="btn btn-primary" onClick={navToUser}>Add user</button>
        </div>
      </nav>
    </div>
  );
};

export default Layout;

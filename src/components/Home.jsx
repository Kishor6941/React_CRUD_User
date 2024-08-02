import React, { useEffect, useState } from "react";
import { API_URI } from "./constant/API_Url_Constant";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();

  function userData() {
    axios
      .get(`${API_URI.users}`)
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {
        console.error(err?.message);
      });
  }

  useEffect(() => {
    userData();
  }, []);
  function viewuserDetails(userId) {
    navigate(`view-user/${userId}`);
  }

  function editUser(userId) {
    navigate(`edit-user/${userId}`);
  }

  function deleteUser(userId) {
    axios
      .delete(`${API_URI.users}/${userId}`)
      .then((res) => {
        alert("User deleted successfully");
        userData();
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  function getSearchValue(e) {
    setSearchName(e.target.value);
    if (!e.target.value?.length) {
      userData();
    } else {
      setData(
        data.filter((user) =>
          user?.name?.toLowerCase().includes(searchName?.toLowerCase())
        )
      );
    }
  }

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name"
              onChange={(e) => getSearchValue(e)}
              value={searchName}
            />
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone No</th>
            <th scope="col">Country</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {!data.length ? (
            <h2 className="text-center"> No record to display </h2>
          ) : (
            data?.map((user) => (
              <tr key={user?.id}>
                <th>{user?.id}</th>
                <td>{user?.name}</td>
                <td>{user?.phoneNo}</td>
                <td>{user?.country}</td>
                <td>{user?.email}</td>
                <td>{user?.gender}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => viewuserDetails(user?.id)}
                  >
                    View
                  </button>{" "}
                  <button
                    className="btn btn-info"
                    onClick={() => editUser(user?.id)}
                  >
                    Edit
                  </button>{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user?.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { API_URI } from "./constant/API_Url_Constant";
import useFetch from "./CustomHook/useFetch";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddEditUser = () => {
  const params = useParams();
  const [data] = useFetch(API_URI.getcountries);

  useEffect(() => {
    if(params?.id) {
      axios
      .get(`${API_URI.users}/${params?.id}`)
      .then((res) => {
        setUsers({
          name: res?.data.name,
          phoneNo: res?.data?.phoneNo,
          country: res?.data?.country,
          email: res?.data?.email,
          gender: res?.data?.gender,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    }
  }, [params?.id]);

  const navigate = useNavigate();
  const [user, setUsers] = useState({
    name: "",
    phoneNo: "",
    country: "",
    email: "",
    gender: "",
  });

  function addEditUser() {
    axios({
      method: `${params?.id ? 'PUT' : 'POST' }`,
      url: params?.id ? `${API_URI.users}/${params?.id}`: API_URI.users ,
      data: user,
    })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err?.message);
      });
  }

  const addEditUserForm = () => {
    addEditUser();
  };
  return (
    <div className="col-md-6 m-auto shadow-sm p-3 mb-5 bg-white rounded mt-3">
      <h1 className="text-center">{params?.id ? "Update" : "Add"} User</h1>
      <div className="p-3">
        <div className="form-group mb-2">
          <label className="mb-2">Name</label>
          <input
            type="text"
            className="form-control"
            value={user?.name}
            onChange={(e) => setUsers({ ...user, name: e.target.value })}
          />
        </div>
        <div className="form-group mb-2">
          <label className="mb-2">Phone No</label>
          <input
            type="text"
            className="form-control"
            value={user?.phoneNo}
            onChange={(e) => setUsers({ ...user, phoneNo: e.target.value })}
          />
        </div>

        <div className="form-group mb-2">
          <label className="mb-">Select Country</label>
          <select
            className="form-control"
            value={user?.country}
            onChange={(e) => setUsers({ ...user, country: e.target.value })}
          >
            <option value="" disabled selected>
              Select
            </option>
            {data.map((country) => (
              <option key={country?.id} value={country?.cName}>
                {country?.cName}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group mb-2">
          <label className="mb-2">Email</label>
          <input
            type="email"
            className="form-control"
            value={user?.email}
            onChange={(e) => setUsers({ ...user, email: e.target.value })}
          />
        </div>
        <div className="mt-3">
          <div className="row">
            <div className="col-md-3">
              <input
                className="form-check-input"
                type="radio"
                value="male"
                checked={user?.gender === "male"}
                onClick={() => setUsers({ ...user, gender: "male" })}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="col-md-3">
              <input
                className="form-check-input"
                type="radio"
                value="female"
                checked={user?.gender === "female"}
                onClick={() => setUsers({ ...user, gender: "female" })}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-primary col-md-12"
            onClick={addEditUserForm}
          >
            {params?.id ? "Update" : "Add"} User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditUser;

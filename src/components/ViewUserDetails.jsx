import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_URI } from './constant/API_Url_Constant';
import useFetch from './CustomHook/useFetch';

const ViewUserDetails = () => {
const params = useParams();
const [data] = useFetch(`${API_URI.users}/${params?.id}`)

  return (
    <div>
    <div className="card p-3" style={{ width: '18rem', margin: '20px auto' }}>
        <h3>User Details</h3>
    <div className="card-body">
      <p className="card-text"><strong>Name : </strong>{data?.name}</p>
      <p className="card-text"><strong>Phone No : </strong>{data?.phoneNo}</p>
      <p className="card-text"><strong>Country : </strong>{data?.country}</p>
      <p className="card-text"><strong>Email : </strong>{data?.email}</p>
      <p className="card-text"><strong>Gender : </strong>{data?.gender}</p>
    </div>
  </div>
    </div>
  )
}

export default ViewUserDetails
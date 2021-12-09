/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOne } from "../../utils/fetch";

function Jobid() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const fetchdata = async () => {
    const job = await fetchOne("jobs", id);
    setData((PrevData) => ({ ...PrevData, ...job }));
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      {data && (
        <>
          <h1>{data.jobTitle}</h1>
          <p>{data.jobDescription}</p>
          <p>{data.qualifications}</p>
          <p>{data.location}</p>
          <p>{data.deadline}</p>
        </>
      )}
    </div>
  );
}

export default Jobid;

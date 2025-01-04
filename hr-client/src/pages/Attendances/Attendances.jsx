import React, { useEffect, useState } from 'react';
import {  DashboardTopBar, DialogBox, SearchBar, SelectOption, Sidebar } from '../../components';
import { Table } from '../../features';
import { useDispatch, useSelector } from 'react-redux';
import "./Attendances.css";
import { createUserByAdmin, getAllCandidates } from "../../redux/slices/CandidateManageSlice";


const Attendances = () => {
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
 

  const { status } = useSelector((state) => state?.candidateManage);

  const selectOptions = [{ value: "all", label: "All" }];
  const headings = ["", "Profile", "Name", "Designation", "Department", "Task", "Status",

  ]
  const handleStatusUpdate = (userId, value) => {
    console.log(userId);
  }

  const handleGetAllUser = async () => {
    const response = await dispatch(getAllCandidates()).unwrap();
    setRows(response);
  };
  useEffect(() => {
    handleGetAllUser();
  }, [dispatch]);
  return (
    <Sidebar>
      <div>
        <DashboardTopBar label="Attendances" />
        <div className="candidatesBox">
          <div className="candidatefilterOption">
            <div>
              <SelectOption options={selectOptions} />
            </div>
            <div>
              <SearchBar placeholder="Search" />
            </div>
          </div>
          {status === 'succeeded' ? (
            <Table type='attendancePage' headings={headings} rows={rows} handleStatus={handleStatusUpdate}  />
          ) : (
            rows.length ? <h1>No Data found</h1> : <h1>Loading...</h1>
          )}
        </div>
      </div>
    </Sidebar>
  );
};

export default Attendances;

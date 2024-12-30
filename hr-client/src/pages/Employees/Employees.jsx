import React, { useEffect, useState } from 'react';
import { Button, DashboardTopBar, SearchBar, SelectOption, Sidebar } from '../../components'
import { Table } from '../../features'
import { useDispatch, useSelector } from 'react-redux';
import {  getAllCandidates } from "../../redux/slices/CandidateManageSlice";
import "./Employees.css"

const Employees = () => {
    const dispatch = useDispatch();
    const [rows, setRows] = useState([]);
    const selectOptions=[ { value: "all", label: "All" },]
    const headings =["","Profile","Name","Email Address","Phone Number","Department","Position","Date of Joining"

    ]
    const getAll = async () => {
        const response = await dispatch(getAllCandidates()).unwrap();
        setRows(response);
      };
      useEffect(() => {
        getAll();
      }, [dispatch]);
     
    return (
      <Sidebar>
          <div >
          <DashboardTopBar />
          <div className='candidatesBox'>
          <div className='candidatefilterOption'>
              <div>
             <SelectOption  options={selectOptions}/> 
             
              </div>
              <div>
                  <SearchBar placeholder="Search"/>

              </div>
             
          </div>
          <Table  type="employeePage" headings={headings} rows={rows} />
          </div>
          </div>
      </Sidebar>
    )
}

export default Employees

import React, { useEffect, useState } from 'react';
import { Button, DashboardTopBar, SearchBar, SelectOption, Sidebar, Typography } from '../../components'
import { Table } from '../../features'
import { useDispatch, useSelector } from 'react-redux';
import {  getAllCandidates } from "../../redux/slices/CandidateManageSlice";
import "./Leaves.css"

const Leaves = () => {
    const dispatch = useDispatch();
    const [rows, setRows] = useState([]);
    const selectOptions=[ { value: "all", label: "All" },]
    const headings =["","Profile","Name",,"Phone Number","Position",,"Reason"

    ]
    const getAll = async () => {
        const response = await dispatch(getAllCandidates()).unwrap();
        setRows(response);
      };
      useEffect(() => {
        // getAll();
      }, [dispatch]);
     
    return (
      <Sidebar>
          <div >
          <DashboardTopBar label="Leaves" />
          <div className='candidatesBox'>
          <div className='candidatefilterOption'>
              <div>
             <SelectOption  options={selectOptions}/> 
             
              </div>
              <div>
                  <SearchBar placeholder="Search"/>

              </div>
             
          </div>
          <Table  type="leavePage" headings={headings} rows={rows} />
          {/* <Typography>Comming Soon</Typography> */}

          </div>
          </div>
      </Sidebar>
    )
}

export default Leaves

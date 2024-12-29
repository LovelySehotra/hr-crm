import React from 'react'
import { Button, DashboardTopBar, SearchBar, SelectOption, Sidebar } from '../../components'
import { Table } from '../../features'
import "./Candidates.css"

const Candidates = () => {
    const selectOptions=[ { value: "all", label: "All" },]
  return (
    <Sidebar>
        <div >
        <DashboardTopBar />
        <div className='candidatesBox'>
        <div className='candidatefilterOption'>
            <div>
           <SelectOption  options={selectOptions}/> 
           <SelectOption  options={selectOptions}/> 
            </div>
            <div>
                <SearchBar placeholder="Search"/>
                <Button>Add New Candidates </Button>
            </div>
           
        </div>
        <Table/>
        </div>
        </div>
    </Sidebar>
  )
}

export default Candidates

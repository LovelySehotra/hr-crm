import React from 'react'
import TableHeading from '../../components/TableHeading/TableHeading'
import TableRow from '../../components/TableRow/TableRow'
import "./Table.css"
const Table = ({ type , headings, rows , handleStatus,handleDeleteUser }) => {


  // console.log(type.toLowerCase()!=="candidatepage"  && rows[0].jobApplication.status !=="selected")
  return (
    <div>
      <table>

        <TableHeading headings={headings} />
        <tbody>

          {rows && rows?.map((row) => {
            if(type.toLowerCase()!=="candidatepage" && row.jobApplication.status !=="selected") return ;
            if(type.toLowerCase()!=="candidatepage" && row.role==="temp") return;
            return( <TableRow
              type={type}
              key={row._id}
              row={row}
              handleStatus={handleStatus}
              handleDeleteUser={handleDeleteUser}
              />)
          }
          
          )}
        </tbody>
      </table>

    </div>
  )
}

export default Table

import React from 'react'
import TableHeading from '../../components/TableHeading/TableHeading'
import TableRow from '../../components/TableRow/TableRow'
import "./Table.css"
const Table = ({headings,rows=[],onStatusChange}) => {
   
     
      const handleStatusChange = async (id, newStatus) => {}
  return (
    <div>
      <table>
        
      <TableHeading headings={headings}/>
      <tbody>

      {rows && rows?.map((row) => (
          <TableRow
          type="candidatePage"
          key={row._id}
          row={row}
          onStatusChange={onStatusChange}
          />
        ))}
        </tbody>
        </table>
     
    </div>
  )
}

export default Table

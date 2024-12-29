import React from 'react'
import TableHeading from '../../components/TableHeading/TableHeading'
import TableRow from '../../components/TableRow/TableRow'
import "./Table.css"
const Table = () => {
    const headings = [
        " ",
        "Name",
        "Email",
        "Phone Number",
        "Position",
        "Status",
        "Experience",
        "Resume",
      ];
      const rows = [
        {
          id: 1,
          fullName: "John Doe",
          email: "johndoe@example.com",
          phoneNumber: "123-456-7890",
          Position: "Frontend Developer",
          jobApplication: { status: "Rejected" },
          Experience: "3 years",
          Resume: "https://resime.pdf",
        },
        {
          id: 2,
          fullName: "Jane Smith",
          email: "janesmith@example.com",
          phoneNumber: "987-654-3210",
          Position: "Backend Developer",
          jobApplication: { status: "Scheduled" },
          Experience: "5 years",
          Resume: "https://resume.pdf",
        },
      ];
      const handleStatusChange = async (id, newStatus) => {}
  return (
    <div>
      <table>
        
      <TableHeading headings={headings}/>
      <tbody>

      {rows.map((row) => (
          <TableRow
          type="candidatePage"
          key={row.id}
          row={row}
          onStatusChange={handleStatusChange}
          />
        ))}
        </tbody>
        </table>
     
    </div>
  )
}

export default Table

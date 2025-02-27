import React, { useEffect, useState } from 'react';
import { Button, DashboardTopBar, DialogBox, SearchBar, SelectOption, Sidebar } from '../../components';
import { Table } from '../../features';
import { useDispatch, useSelector } from 'react-redux';
import "./Candidates.css";
import { createUserByAdmin, getAllCandidates, uploadFile, } from "../../redux/slices/CandidateManageSlice";
import InputOutline from '../../components/InputOutline/InputOutline';
import Checkbox from '../../components/Checkbox/Checkbox';

const Candidates = () => {
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resume, setResume] = useState(null);
  const [department, setDepartment] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [experience, setExperience] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { status } = useSelector((state) => state?.candidateManage);

  const selectOptions = [{ value: "all", label: "All" }];
  const headings = ["", "Name", "Email Address", "Phone Number", "Position","Experience", "Status", ,"Resume",""

  ]
 

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const handleStatusUpdate=(userId,value)=>{
    console.log(userId)

  }
  const handleDeleteUser = (userId)=>{
    console.log(userId)
  }
  const handleGetAllUser = async () => {
    const response = await dispatch(getAllCandidates()).unwrap();
    setRows(response);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!fullName || !email || !phone || !resume || !experience || !department) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }
    if (!isChecked) {
      setError("Check the condition");
      return;
    }
    const resumeData = new FormData();
    resumeData.append('image', resume);
    const resumeResponse = await dispatch(uploadFile(resumeData)).unwrap()
    console.log(resumeResponse)
    const formData = {
      fullName,
      email,  
      phoneNumber,
      jobApplication: {
        experience,
        resumeLink: resumeResponse.uri,
        status: "new"
      }
    }
    try {
      const response = await dispatch(createUserByAdmin(formData)).unwrap();
      if (response) {
        setLoading(false);
        setIsDialogOpen(false);
        setEmail("");
        setFullName("")
        setPhoneNumber("")
        setDepartment("")
        setResume(null)
        setExperience("")
      }
    } catch (error) {
      setError("Something went wrong.");
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetAllUser();
  }, [dispatch]);
  return (
    <Sidebar>
      <div>
        <DashboardTopBar label="Candidates" />
        <div className="candidatesBox">
          <div className="candidatefilterOption">
            <div>
              <SelectOption options={selectOptions} />
              <SelectOption options={selectOptions} />
            </div>
            <div>
              <SearchBar placeholder="Search" />
              <Button onSubmit={openDialog}>Add New Candidates</Button>
            </div>
          </div>
          {status === 'succeeded' ? (
            <Table type='candidatePage' headings={headings} rows={rows} handleStatus={handleStatusUpdate} handleDeleteUser={handleDeleteUser} />
          ) : (
            rows.length ? <h1>No Data found</h1> : <h1>Loading...</h1>
          )}
        </div>

        {/* Dialog Box for Adding New Candidate */}
        <DialogBox isOpen={isDialogOpen} onClose={closeDialog}>
          <div className="dialogBoxChildren">
            <form onSubmit={handleSubmit}>
              <div className="formBox">
                <InputOutline
                  label
                  labelText="Full Name"
                  id="name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
                <InputOutline
                  label
                  labelText="Email Address"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <InputOutline
                  label
                  labelText="Phone Number"
                  id="phone"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
                <InputOutline
                  label
                  labelText="Department"
                  id="department"
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="Enter your department"
                  required
                />
                <InputOutline
                  label
                  labelText="Experience"
                  id="experience"
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Enter your experience"
                  required
                />
                <InputOutline
                  label
                  labelText="Resume"
                  id="resume"
                  type="file"
                  onChange={(e) => setResume(e.target.files[0])}
                  required
                />
                
                {resume && <p>Uploaded File: {resume.name}</p>}
              </div>

              <div>
                <Checkbox
                  id="agree"
                  labelText="I agree to the terms and conditions"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
              </div>

              <button type="submit" className='candidatesSaveButton' disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
              </button>

              {error && <p className="error">{error}</p>}
            </form>
          </div>
        </DialogBox>
      </div>
    </Sidebar>
  );
};

export default Candidates;

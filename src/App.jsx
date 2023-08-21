import React, { useState, useRef } from "react";
import "./App.css"
import { Button, Modal, Card, Form } from "react-bootstrap";


export default function App(){
  const [badgeData, setBadgeData] = useState({
    name: "", 
    occupation: "", 
    email: "", 
    phone: "", 
    summary: "", 
    linkedInUrl: "",
    gitHubUrl: "", 
    portfolioUrl: "", 
    imageSelf: ""
})
const [badgeInputs, setBadgeInputs] = useState("")
const [color, setColor] = useState("#000")
const getRgb = () => Math.floor(Math.random() * 256);
const rgbToHex = (r, g, b) => {
  "#" + 
  [r, g, b].map((x) => {
    const hex = x.toString(16)
    return hex.length === 1 ? "0" + hex : hex;
  })
  .join("")
}


  function handleChange(e) {
    const { name, value } = e.target;
    setBadgeData((prevBadgeData) => {
      return {
        ...prevBadgeData,
        [name]: value,
      };
    });
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log(badgeData)

    setBadgeInputs((prevBadgeInputs) => {
      return [
        ...prevBadgeInputs,
        //badge container
        <div className = "flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="user-image-container">
                <img className="image-Self" src = {badgeData.imageSelf} alt = "Users Image"/>
          <div className="next-image-text">
              <p className="first-name">
                <em>Name</em>:
                {badgeData.name}
                </p>
           <p className="occupation"><em>Occupation</em>: {badgeData.occupation}
              </p>
              <p className="email"><em>Email</em>: {badgeData.email}</p>
              <p className="phone"><em>Phone</em>: {badgeData.phone}</p>
                </div>
                </div>
                <p className="summary">{badgeData.summary}</p>
            
                <div className="social-icons">
                <a className="linkedInURL"
                  href = {badgeData.linkedInUrl}>
                <i className="fab fa-linkedin"></i>
                  </a>
                  <a href = {badgeData.gitHubUrl}><i className="fab fa-github-square"></i></a>
                  <a href= {badgeData.portfolioUrl} ><i className="fas fa-user-tag"></i></a>

                </div>
                </div>
                <div className="flip-card-back">
                  <div className="newskills-container">
                  {newSkill?.map((item, b) => (
    <li key={b}
    className='skill-list-item' style = {{color: "#fff"}}>{item}</li>
  ))}
                 </div>
              </div>
 
          </div>
        </div>
      ]
    })
    setBadgeData({
     name,
      occupation, 
      email, 
      phone, 
      summary, 
      gitHubUrl, 
      linkedInUrl, 
      portfolioUrl, 
      imageSelf
    })
  }


  const [newSkill, setNewSkill] = useState([])
  const [show, setShow] = useState(false)
  const input = useRef()

  const changeOpen = () => setShow(true)
  const changeClose = () => setShow(false)

  var addSkill = (e) => {
    e.preventDefault()
    setNewSkill([...newSkill, input.current.value])

  }


  return (
    <div className="form-container" style={{display: "flex", flexDirection: "column"}}>
      <Form className="form" onSubmit={handleSubmit}><h1>Fill Out Your Details Below to Make Your <em className="emphasized-heading">Digital Portfolio Badge</em>:</h1>  
      <div className="background-color-block"></div>
      <br />
      <div className="input-container">
        <input type="text" className="input input-imageSelf"
        placeholder="*Image"
        onChange={handleChange}
        name="imageSelf"
        value={badgeData.imageSelf}
        required
        /> 
        <input className="input input-firstName" minLength={3}
        type = "text"
        placeholder="*Name"
        onChange={handleChange}
        name = "name"
        value = {badgeData.name} 
        required
        />

<input className="input input-occupation" minLength={3}
        type = "text"
        placeholder="*Occupation"
        onChange={handleChange}
        name = "occupation"
        value = {badgeData.occupation}
        required 
        />

<input className="input input-email" minLength={3}
        type = "email"
        placeholder="*Email"
        onChange={handleChange}
        name = "email"
        value = {badgeData.email} 
        required
        />

<input className="input input-phone"
 minLength={3}
        type = "phone"
        placeholder="*Phone"
        onChange={handleChange}
        name = "phone"
        value = {badgeData.phone} 
        required
        />

<input className="input input-linkedIn" minLength={3}
        type = "text"
        placeholder="*LinkedIn URL"
        onChange={handleChange}
        name = "linkedInUrl"
        value = {badgeData.linkedInUrl} 
        required
        />

<input className="input input-github" minLength={3}
        type = "text"
        placeholder="Github URL"
        onChange={handleChange}
        name = "gitHubUrl"
        value = {badgeData.gitHubUrl} 
        required
        />

<input className="input input-portfolio" minLength={3}
        type = "text"
        placeholder="*Portfolio URL"
        onChange={handleChange}
        name = "portfolioUrl"
        value = {badgeData.portfolioUrl} 
        required
        />

<textarea className="input input-summary" minLength={10}
        type = "text"
        placeholder="*Summary"
        onChange={handleChange}
        name = "summary"
        value = {badgeData.summary}
        style={{resize: 'none', height: "150px"}}
        required
        />

<Button onClick={changeOpen}>Add A New Skill To Your Badge</Button>
<div id = "container">
<Modal show = {show} onHide={changeClose} className='modal-container'>
  <Modal.Header closeButton className='modal-header'> 
    <Modal.Title className='modal-title'>Specialty Skills</Modal.Title>
    
  </Modal.Header>
  <form onSubmit={addSkill}>
    <Modal.Body className='modal-body'>
      <Form.Group className="skills-end-container">
        <br />
        <Form.Control type = "text" ref = {input} placeholder='Add a Special Skill' />
      </Form.Group>
    </Modal.Body>
    <Modal.Footer className='modal-footer'>
      <Button type='submit' onClick={addSkill}
      className="submit-skill-button">Submit Skill</Button>
    </Modal.Footer>
  </form>
</Modal>
</div>
<ul>
  {newSkill?.map((item, b) => (
    <li key={b}
    className='skill-list-item' style = {{color: "#fff"}}>{item}</li>
  ))}
</ul>

        <br />
        <br />
        <Button type = "submit" className="form-submit" onClick={handleSubmit}>Submit To Make Your Badge</Button>
        </div>
      </Form>
      <div className="badge-container">
        <Card className="final-badge-card" style={{maxWidth: "100%"}}>
        <div className="inner-badge-card">{badgeInputs}</div>
        <div></div>
        </Card>
      </div>
    </div>
  )
}
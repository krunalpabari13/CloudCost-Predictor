// import React, { useState } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";

// function App() {
  
//   const [allPlayers, setAllPlayers] = useState([
//     { name: "", description: "", price: null, rating: null },
//   ]);

//   const handleAddPlayers = () => {
//     const values = [...allPlayers];
//     values.push({
//       name: "",
//       description: "",
//       price: null,
//       rating: null,
//     });
//     setAllPlayers(values);
//   };

//   const handleRemovePlayers = (index) => {
//     const values = [...allPlayers];
//     values.splice(index, 1);
//     setAllPlayers(values);
//   };

//   const handleInputChange = (index, event) => {
//     const values = [...allPlayers];
//     const updatedValue = event.target.name;
//     values[index][updatedValue] = event.target.value;

//     setAllPlayers(values);
//   };

//   console.log(allPlayers);

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col xs="6" className="dynamic-form-headings">
//           <h3>Dynamic Form Fields</h3>
//           <Button variant="primary" onClick={() => handleAddPlayers()}>
//             Add Player
//           </Button>
//         </Col>
//         <Col xs="12">
//           <Form>
//             <Row className="justify-content-center">
//               {allPlayers.length > 0 && (
//                 <>
//                   {allPlayers.map((field, index) => (
//                     <Col xs="4">
//                       <div className="add-player-div">
//                         <h4>Player {index + 1}</h4>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Control
//                             type="text"
//                             name="name"
//                             placeholder="Enter Name"
//                             value={field.name}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Control
//                             type="text"
//                             name="description"
//                             placeholder="Enter Description"
//                             value={field.description}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Control
//                             type="number"
//                             name="price"
//                             placeholder="Enter Price"
//                             value={field.price}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Control
//                             type="number"
//                             name="rating"
//                             placeholder="Enter Rating"
//                             value={field.rating}
//                             onChange={(event) =>
//                               handleInputChange(index, event)
//                             }
//                           />
//                         </Form.Group>
//                         <Button
//                           variant="secondary"
//                           onClick={() => handleRemovePlayers(index)}
//                         >
//                           Cancel
//                         </Button>
//                       </div>
//                     </Col>
//                   ))}
//                 </>
//               )}
//             </Row>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";

// const containerStyle = {
//   maxWidth: "2500px",
//   margin: "0 auto",
//   backgroundColor: "#fff",
//   padding: "20px",
//   borderRadius: "10px",
//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
// };

// const addFormItemButtonStyle = {
//   backgroundColor: "#9155FD",
//   color: "white",
//   border: "none",
//   padding: "10px 20px",
//   borderRadius: "5px",
//   cursor: "pointer",
//   marginLeft: "10px",
// };

// const removeFormItemButtonStyle = {
//   backgroundColor: "#FF5B5B",
//   color: "white",
//   border: "none",
//   padding: "10px 20px",
//   borderRadius: "5px",
//   cursor: "pointer",
// };

// const formGroupStyle = {
//   marginBottom: "20px",
// };

// const labelStyle = {
//   display: "block",
//   fontWeight: "bold",
//   color: "#333",
// };

// const inputStyle = {
//   width: "98%",
//   padding: "10px",
//   border: "1px solid #ccc",
//   borderRadius: "5px",
//   backgroundColor: "#f9f9f9",
//   color: "#333",
// };

// const selectStyle = {
//   ...inputStyle,
// };

// const divStyle = {
//   margin: "10px",
//   border: "2px solid #968ca9",
//   padding: "10px",
//   borderRadius: "5px",
//   boxShadow: "0 0 10px #b794f8",
// };

// function App() {
//   const [allItems, setAllItems] = useState([
//     {
//       paymentType: "Prepaid",
//       serviceName: "",
//       numberOfCPU: "",
//       memorySize: "",
//       usageTime: "",
//       usageType: "Storage",
//       database: "",
//       engine: "",
//       operatingSystem: "",
//     },
//   ]);

//   const handleAddItem = () => {
//     const values = [...allItems];
//     values.push({
//       paymentType: "Prepaid",
//       serviceName: "",
//       numberOfCPU: "",
//       memorySize: "",
//       usageTime: "",
//       usageType: "Storage",
//       database: "",
//       engine: "",
//       operatingSystem: "",
//     });
//     setAllItems(values);
//   };

//   const handleRemoveItem = (index) => {
//     const values = [...allItems];
//     values.splice(index, 1);
//     setAllItems(values);
//   };

//   const handleInputChange = (index, event) => {
//     const values = [...allItems];
  
//     const updatedValue = event.target.name;
//     values[index][updatedValue] = event.target.value;

//     setAllItems(values);
//   };



//   return (
//     <Container style={containerStyle}>
//       <Row className="justify-content-center">
//         <Col xs="6" className="dynamic-form-headings">
//           {/* <h3>Dynamic Form Fields</h3> */}
//           <Button
//             variant="primary"
//             onClick={() => handleAddItem()}
//             style={addFormItemButtonStyle}
//           >
//             Add Item
//           </Button>
//         </Col>
//         <Col xs="12">
//           <Form>
//             <Row className="justify-content-center">
//               {allItems.length > 0 && (
//                 <>
//                   {allItems.map((field, index) => (
//                     <Col xs="4" key={index}>
//                       <div className="add-player-div" style={divStyle}>
//                         <h4>Item {index + 1}</h4>
//                         <Form.Group style={formGroupStyle}>
//                           <Form.Label style={labelStyle}>Payment Type</Form.Label>
//                           <Form.Control
//                             as="select"
//                             name="paymentType"
//                             value={field.paymentType}
//                             onChange={(event) => handleInputChange(index, event)}
//                             style={selectStyle}
//                           >
//                             <option value="Prepaid">Prepaid</option>
//                             <option value="On Usage">On Usage</option>
//                             <option value="Monthly">Monthly</option>
//                             <option value="Yearly">Yearly</option>
//                           </Form.Control>
//                         </Form.Group>
//                         <Form.Group style={formGroupStyle}>
//                           <Form.Label style={labelStyle}>Service Name</Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="serviceName"
//                             placeholder="Enter Service Name"
//                             value={field.serviceName}
//                             onChange={(event) => handleInputChange(index, event)}
//                             style={inputStyle}
//                           />
//                         </Form.Group>
//                         <Form.Group style={formGroupStyle}>
//                           <Form.Label style={labelStyle}>Number of CPU</Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="numberOfCPU"
//                             placeholder="Enter Number of CPU"
//                             value={field.numberOfCPU}
//                             onChange={(event) => handleInputChange(index, event)}
//                             style={inputStyle}
//                           />
//                         </Form.Group>
//                         <Form.Group style={formGroupStyle}>
//                           <Form.Label style={labelStyle}>Memory Size</Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="memorySize"
//                             placeholder="Enter Memory Size"
//                             value={field.memorySize}
//                             onChange={(event) => handleInputChange(index, event)}
//                             style={inputStyle}
//                           />
//                         </Form.Group>
//                         <Form.Group style={formGroupStyle}>
//                           <Form.Label style={labelStyle}>Usage Time</Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="usageTime"
//                             placeholder="Enter Usage Time"
//                             value={field.usageTime}
//                             onChange={(event) => handleInputChange(index, event)}
//                             style={inputStyle}
//                           />
//                         </Form.Group>
//                         <Form.Group style={formGroupStyle}>
//                           <Form.Label style={labelStyle}>Usage Type</Form.Label>
//                           <Form.Control
//                             as="select"
//                             name="usageType"
//                             value={field.usageType}
//                             onChange={(event) => handleInputChange(index, event)}
//                             style={selectStyle}
//                           >
//                             <option value="Storage">Storage</option>
//                             <option value="Virtual Machine">Virtual Machine</option>
//                           </Form.Control>
//                         </Form.Group>
//                         {field.usageType === "Storage" && (
//                           <>
//                             <Form.Group style={formGroupStyle}>
//                               <Form.Label style={labelStyle}>Database</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 name="database"
//                                 placeholder="Enter Database"
//                                 value={field.database}
//                                 onChange={(event) => handleInputChange(index, event)}
//                                 style={inputStyle}
//                               />
//                             </Form.Group>
//                             <Form.Group style={formGroupStyle}>
//                               <Form.Label style={labelStyle}>Engine</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 name="engine"
//                                 placeholder="Enter Engine"
//                                 value={field.engine}
//                                 onChange={(event) => handleInputChange(index, event)}
//                                 style={inputStyle}
//                               />
//                             </Form.Group>
//                           </>
//                         )}
//                         {field.usageType === "Virtual Machine" && (
//                           <>
//                             <Form.Group style={formGroupStyle}>
//                               <Form.Label style={labelStyle}>Operating System</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 name="operatingSystem"
//                                 placeholder="Enter Operating System"
//                                 value={field.operatingSystem}
//                                 onChange={(event) => handleInputChange(index, event)}
//                                 style={inputStyle}
//                               />
//                             </Form.Group>
//                           </>
//                         )}
//                         <Button
//                           variant="secondary"
//                           onClick={() => handleRemoveItem(index)}
//                           style={removeFormItemButtonStyle}
//                         >
//                           Remove Item
//                         </Button>
//                       </div>
//                     </Col>
//                   ))}
//                 </>
//               )}
//             </Row>
//           </Form>
//         </Col>
//       </Row>
//       <Button
//         variant="primary"
//         onClick={() => handleSubmit()}
//         style={addFormItemButtonStyle}
//       >
//         Submit
//       </Button>
//     </Container>
//   );
// }

// export default App;




import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const containerStyle = {
  maxWidth: "2500px",
  margin: "0 auto",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
};

const addFormItemButtonStyle = {
  backgroundColor: "#9155FD",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginLeft: "10px",
};

const removeFormItemButtonStyle = {
  backgroundColor: "#FF5B5B",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

const formGroupStyle = {
  marginBottom: "20px",
};

const labelStyle = {
  display: "block",
  fontWeight: "bold",
  color: "#333",
};

const inputStyle = {
  width: "98%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9",
  color: "#333",
};

const selectStyle = {
  ...inputStyle,
};

const divStyle = {
  margin: "10px",
  border: "2px solid #968ca9",
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0 0 10px #b794f8",
};

function App() {
  const [allItems, setAllItems] = useState([
    {
      paymentType: "Prepaid",
      // source: "",
      cpu: "",
      ram: "",
      hours: "",
      source: "Storage",
      database: "",
      engine: "",
      os: "",
    },
  ]);

  const handleAddItem = () => {
    const values = [...allItems];
    values.push({
      paymentType: "Prepaid",
      // source: "",
      cpu: "",
      ram: "",
      hours: "",
      source: "Storage",
      database: "",
      engine: "",
      os: "",
    });
    setAllItems(values);
  };

  const handleRemoveItem = (index) => {
    const values = [...allItems];
    values.splice(index, 1);
    setAllItems(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...allItems];
    const updatedValue = event.target.name;
    console.log(event.target.value)
    values[index][updatedValue] = event.target.value;

    setAllItems(values);
  };
  
  const handleSubmit = async () => {
        try {
          console.log("data")
          const response = await fetch('http://localhost:8000/selected', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(allItems),
          });
    
          if (response.ok) {
            console.log('Form data submitted successfully');
            setAllItems([
              {
                paymentType: "Prepaid",
                // source: "",
                cpu: "",
                ram: "",
                hours: "",
                source: "Storage",
                database: "",
                engine: "",
                os: "",
              },
            ]);
          } else {
            console.error('Failed to submit form data');
          }
        } catch (error) {
          console.error('Network error:', error);
        }
      };

//  console.log(allItems);

  return (
    <Container style={containerStyle}>
      <Row className="justify-content-center">
        <Col xs="6" className="dynamic-form-headings">
          {/* <h3>Dynamic Form Fields</h3> */}
          {/* <Button
            variant="primary"
            onClick={() => handleAddItem()}
            style={addFormItemButtonStyle}
          >
            Add Item
          </Button> */}
        </Col>
        <Col xs="12">
          <Form>
            <Row className="justify-content-center">
              {allItems.length > 0 && (
                <>
                  {allItems.map((field, index) => (
                    <Col xs="4" key={index}>
                      <div className="add-player-div" style={divStyle}>
                        <h4>Item {index + 1}</h4>
                        <Form.Group style={formGroupStyle}>
                          <Form.Label style={labelStyle}>Payment Type</Form.Label>
                          <Form.Control
                            as="select"
                            name="paymentType"
                            value={field.paymentType}
                            onChange={(event) => handleInputChange(index, event)}
                            style={selectStyle}
                          >
                            <option value="Prepaid">Prepaid</option>
                            <option value="On Usage">On Usage</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                          </Form.Control>
                        </Form.Group>
                        {/* <Form.Group style={formGroupStyle}>
                          <Form.Label style={labelStyle}>Service Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="serviceName"
                            placeholder="Enter Service Name"
                            value={field.serviceName}
                            onChange={(event) => handleInputChange(index, event)}
                            style={inputStyle}
                          />
                        </Form.Group> */}
                        
                        <Form.Group style={formGroupStyle}>
                          <Form.Label style={labelStyle}>Service Name</Form.Label>
                          <Form.Control
                            as="select"
                            name="usageType"
                            value={field.usageType}
                            onChange={(event) => handleInputChange(index, event)}
                            style={selectStyle}
                          >
                            <option value="Storage">Storage</option>
                            <option value="Virtual Machine">Virtual Machine</option>
                            <option value="LoadBalancer">LoadBalancer</option>
                            <option value="AWSLambda">AWSLambda</option>
                            
                            

                          </Form.Control>
                        </Form.Group>
                        {field.usageType === "Storage" && (
                          <>
                           <Form.Group style={formGroupStyle}>
                              <Form.Label style={labelStyle}>Database</Form.Label>
                              <Form.Control
                                // type="text"
                               as="select"
                                name="database"
                                placeholder="Enter Database"
                                value={field.database}
                                onChange={(event) => handleInputChange(index, event)}
                                style={inputStyle}
                              >
                                 <option value="">Select Database Type</option>
    <option value="MySQL">MySQL</option>
    <option value="PostgreSQL">PostgreSQL</option>
    <option value="MongoDB">MongoDB</option>
                               </Form.Control>
                            </Form.Group>

                            
                          </>
                        )}
                        {field.usageType === "Virtual Machine" && (
                          <>
                            <Form.Group style={formGroupStyle}>
                              <Form.Label style={labelStyle}>Operating System</Form.Label>
                              <Form.Control
                                as="select"
                                name="os"
                                placeholder="Enter Operating System"
                                value={field.operatingSystem}
                                onChange={(event) => handleInputChange(index, event)}
                                style={inputStyle}
                              >
                               <option value="Windows">Windows</option>
    <option value="MySQL">Linux</option>
    </Form.Control>
                            </Form.Group>
                          </>
                        )}
                        {/* <Form.Group style={formGroupStyle}>
                          <Form.Label style={labelStyle}>Number of CPU</Form.Label>
                          <Form.Control
                            type="text"
                            name="numberOfCPU"
                            placeholder="Enter Number of CPU"
                            value={field.numberOfCPU}
                            onChange={(event) => handleInputChange(index, event)}
                            style={inputStyle}
                          />
                        </Form.Group> */}
                        <Form.Group>
  <Form.Label style={labelStyle}>Number of CPU</Form.Label>
  <Form.Select
    name="cpu"
    value={field.numberOfCPU}
    onChange={(event) => handleInputChange(index, event)}
    style={inputStyle}
  >
    <option value="1">2 CPUs</option>
    <option value="2">4 CPUs</option>
    <option value="4">8 CPUs</option>
    <option value="8">12 CPUs</option>
    <option value="8">16 CPUs</option>
   
    {/* Add more options as needed */}
  </Form.Select>
</Form.Group>
                        <Form.Group style={formGroupStyle}>
                          <Form.Label style={labelStyle}>Memory Size</Form.Label>
                          <Form.Control
                            type="text"
                            name="ram"
                            placeholder="Enter Memory Size"
                            value={field.memorySize}
                            onChange={(event) => handleInputChange(index, event)}
                            style={inputStyle}
                          />
                        </Form.Group>
                        <Form.Group style={formGroupStyle}>
                          <Form.Label style={labelStyle}>Usage Time</Form.Label>
                          <Form.Control
                            type="text"
                            name="hours"
                            placeholder="Enter Usage Time"
                            value={field.usageTime}
                            onChange={(event) => handleInputChange(index, event)}
                            style={inputStyle}
                          />
                        </Form.Group>
                        <Button
                          variant="secondary"
                          onClick={() => handleRemoveItem(index)}
                          style={removeFormItemButtonStyle}
                        >
                          Remove Item
                        </Button>
                      </div>
                    </Col>
                  ))}
                </>
              )}
            </Row>
          </Form>
        </Col>
      </Row>
      <Button
            variant="primary"
            onClick={() => handleAddItem()}
            style={addFormItemButtonStyle}
          >
            Add Item
          </Button>
      <Button
        variant="primary"
        onClick={() => handleSubmit()}
        style={addFormItemButtonStyle}
      >
        Submit
      </Button>
    </Container>
  );
}

export default App;


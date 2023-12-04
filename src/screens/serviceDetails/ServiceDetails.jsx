// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import { RxCross1 } from "react-icons/rx";
// import DialogContent from "@mui/material/DialogContent";
// import Image from "next/image";
// import { Box } from "@mui/system";
// import { Tab, Tabs } from "@mui/material";
// import DialogTitle from "@mui/material/DialogTitle";
// import Dialog from "@mui/material/Dialog";
// import Typography from "@mui/material/Typography";
// import Container from "../../components/Container";
// import { currency } from "../../themes/currency";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// const emails = ["username@gmail.com", "user02@gmail.com"];

// function ServiceDetails({ services }) {


//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);
//   const [selectedPackageAmount, setSelectedPackageAmount] = useState(0);


//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box sx={{ p: 5 }}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }

//   function a11yProps(index) {
//     return {
//       id: `simple-tab-${index}`,
//       "aria-controls": `simple-tabpanel-${index}`,
//     };
//   }

//   // console.log(data);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [numberOfPanditji, setNumberOfPanditji] = useState(2);
//   const [includeSamagri, setIncludeSamagri] = useState(false);
//         const samagriPrice = includeSamagri ? 200 : 0;
      
//         const handlePanditjiChange = (event) => {
//           const selectedPanditji = parseInt(event.target.value, 10);
//           setNumberOfPanditji(selectedPanditji);
//         };
      

//   const handleClose = () => {
//     setModalOpen(false);
//   };

//   const handleSamagri = () => {
//     setIncludeSamagri(!includeSamagri);
//   };

//   const panditjiPrice = services?.data?.[0]?.attributes?.price || 500;

//   const calculateTotal = () => {
//      // Change this based on your actual pricing
//     const subTotal = panditjiPrice * numberOfPanditji + samagriPrice;
//     return subTotal;
//   };

  
//   const handlePayment = () => {
//     rzp.open();

//     // Redirect to the payment page with the subtotal as a query parameter
//     router.push(`/payment?subtotal=${calculateTotal()}`);
//   };

//   const total = () => {
//        // Change this based on your actual pricing
//       const totalPrice = panditjiPrice * numberOfPanditji ;
//       return totalPrice;
//     };

//     const handlePackageClose = (value) => {
//       setOpen(false);
//       setSelectedValue(value);
      
//       // Update the selected package amount here
//       const panditjiPrice = 500; // Change this based on your actual pricing
//       const subTotal = panditjiPrice * numberOfPanditji + (value ? 200 : 0);
//       setSelectedPackageAmount(subTotal);
//     };

//     const router = useRouter();
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       phone: '',
//       address: '',
//       pincode: '',
//     });
  
//     const handleInputChange = (e) => {
//       const { id, value } = e.target;
//       setFormData((prevData) => ({ ...prevData, [id]: value }));
//     };
  
//     const handlePackageCloseFunction = () => {
//       // Handle any additional logic if needed
//       setModalOpen(false);
//     };
  
//     const p = services?.data?.[0]?.attributes;

//   return (
//     <div>
//       <Container >

//       {/* {services?.data?.map((service) => (
//        <div key={service.id}>{service.name}</div>
//     ))} */}

//                  <div  className="flex  px-2 md:px-10 py-10 flex-wrap">
//                  <div className="w-full md:w-2/3 px-1 py-3 lg:py-0 md:px-5 md:mb-20 lg:px-10  md:order-1 ">
                  
//                    <p className="text-2xl md:text-4xl lg:text-6xl font-bold my-10 " >{p.name}</p>
                   

//                <h1 className="pb-2  text-xl font-bold">Date</h1>
//                <input
//                  type="date"
//                  className="h-10 w-60 border px-3 cursor-pointer text-xl "
//                />
//                <h1 className=" pb-2 text-xl font-bold mt-3">Select Package</h1>
//                <div className="h-10 w-60 border rounded-lg flex justify-between">
//                  <div className="pl-10 py-2">{currency.inr}{calculateTotal()}</div> 
//                  <button
//                    className="border rounded-full h-8 w-20 float-right my-1 mr-2 hover:border-2 hover:border-primaryDark"
//                    onClick={() => setOpen(true)}
//                    // value={packageName}
//                  >
//                    select
//                  </button>
//                </div>
//                <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
//                <button
//                  className="px-6 py-2 mt-3 rounded bg-secondary text-primary my-2 text-xl"
//                  onClick={() => setModalOpen(true)
//                  }
//                >
//                  Buy Now
//                </button>
//                <Link href="/contact">
//                <button
//                  className="px-6 py-2 mt-3 rounded bg-secondary text-primary my-2 text-xl"
//                >
//                  Contact Us
//                </button>
//                </Link>
              
//                </div>
              
//               </div>
   
//               <div className="w-full md:w-1/4 order-1 flex flex-col justify-center items-center bg-primary rounded-3xl ">
//                <div className="h-80 w-80 rounded-xl ">
//                 <Image
//                    src="/assets/images/homeassets/Services_Picture/download.jfif"
//                    alt="Pandit jii"
//                    placeholder="blur"
//                    width={80}
//                    // objectFit="cover"
//                    height={80}
//                    blurDataURL="/assets/images/homeassets/Services_Picture/download.jfif"
//                    className="w-full h-full object-cover rounded-full border-4"
//                 />
//                </div>
//               </div>
//            </div>
       
//       <div className=" w-full justify-center bg-amber-300 border-2 ">
//          <div className="h-180 md:h-full w-3/4 ml-20 text-secondary pt-5 ">
//          <Box sx={{ width: "100%" }}>
//               <Box
//                 sx={{
//                   borderBottom: 1,
//                   borderColor: "divider",
//                 }}
//               >
//                 <Tabs
//                   value={value}
//                   onChange={handleChange}
//                   aria-label="basic tabs example"
//                 >
//                   <Tab
//                     label="About Us"
//                     {...a11yProps(0)}
//                     className="mr-5 "
//                     sx={{ mr: 5, fontWeight: "bold" }}
//                   />
//                   <Tab
//                     label="Samagri"
//                     {...a11yProps(1)}
//                     sx={{mr: 5, fontWeight: "bold" }}
//                   />
//                   <Tab
//                     label="Contact Us"
//                     {...a11yProps(2)}
//                     sx={{ mr: 5, fontWeight: "bold" }}
//                   />
//                 </Tabs>
//               </Box>
//               <TabPanel value={value} index={0} sx={{ fontWeight: "bold"}} 
//               className="text-sm md:text-xl py-2 items-start justify-between text-justify " >
//                 {p.description}
//               </TabPanel>
//               <TabPanel value={value} index={1} sx={{ fontWeight: "bold" }}
//                className="text-sm md:text-xl py-2 items-start justify-between text-justify ">
//               {p.tab2}
//               </TabPanel>
//               <TabPanel value={value} index={2} sx={{ fontWeight: "bold" }}
//                className="text-sm md:text-xl py-2 items-start justify-between text-justify ">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
//                 ullam provident vero, possimus doloremque at praesentium nulla
//                 distinctio ex expedita impedit cum, temporibus repellendus
//                 aperiam vel eos quo cumque error quam minus voluptatum
//                 perspiciatis quasi? Laborum explicabo aspernatur blanditiis
//                 autem, tenetur dolorem, earum illo quae quis voluptate, iste
//                 recusandae. Nostrum error ex assumenda nihil repudiandae maiores
//                 cum provident fugit fuga.
//               </TabPanel>
//             </Box>
//          </div>
//       </div>

//       <Dialog open={modalOpen} onClose={handleClose}>
//           <div className="flex px-5 justify-between items-center">
//             <DialogTitle>Enter the following details to checkout</DialogTitle>
//             <RxCross1
//               size={25}
//               onClick={() => setModalOpen(false)}
//               className="cursor-pointer"
//             />
//           </div>
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin="dense"
//               id="name"
//               label="First Name"
//               type="text"
//               fullWidth
//               variant="outlined"
//               value={formData.name}
//           onChange={handleInputChange}
//             />
            
//             <TextField
//               autoFocus
//               margin="dense"
//               id="email"
//               label="Email Address"
//               type="email"
//               fullWidth
//               variant="outlined"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             <TextField
//               autoFocus
//               margin="dense"
//               id="phone"
//               label="Mobile Number"
//               type="text"
//               fullWidth
//               variant="outlined"
//               value={formData.phone}
//           onChange={handleInputChange}
//             />
//             <TextField
//               autoFocus
//               margin="dense"
//               id="address"
//               label=" Address"
//               type="text"
//               fullWidth
//               variant="outlined"
//               value={formData.address}
//               onChange={handleInputChange}
//             />
//             <TextField
//               autoFocus
//               margin="dense"
//               id="pincode"
//               label="Pin Code"
//               type="teq"
//               fullWidth
//               variant="outlined"
//               value={formData.pincode}
//               onChange={handleInputChange}
//             />
//           </DialogContent>
//           <div className="flex justify-center items-center py-3">
//           <Link href={`/payment?subtotal=${calculateTotal()}&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}&address=${encodeURIComponent(formData.address)}&pincode=${encodeURIComponent(formData.pincode)}`}>
//               <button className="btn-primary" onClick={handlePackageCloseFunction}>Submit</button>
//             </Link>
//           </div>
//         </Dialog>
//         <Dialog maxWidth="md" onClose={handlePackageClose} open={open}>
//           <div className="flex flex-col ">
//             <div className=" border-4 flex flex-col md:flex-row m-5">
//               <div className="p-5 m-5 items-start justify-between text-justify">
//                 <div className="text-3xl mb-5 ">Greh Shanti</div>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Voluptatibus nam nulla cumque velit provident nesciunt iure enim
//                 ab incidunt dicta quia iusto recusandae omnis assumenda
//                 quibusdam necessitatibus quas fugit sint, minus excepturi! Saepe
//                 eligendi perspiciatis eos odit reprehenderit similique quos
//                 aspernatur assumenda eaque, laboriosam ipsa atque pariatur,
//                 optio fugiat! Consectetur, non pariatur voluptates et, aliquam
//                 veniam qui earum magnam totam culpa incidunt accusantium cum
//                 placeat.
//               </div>
//               <div className="flex flex-row text-center  py-5">
//                 <div className="mr-5 w-60">
//                   <h1 className="pb-5 text-xl font-bold mt-5">
//                     Number of Panditji
//                   </h1>
//                   <select className="h-14 w-40 border px-14 cursor-pointer text-xl" onChange={handlePanditjiChange}
//         value={numberOfPanditji}>
//                     <option>2</option>
//                     <option>5</option>
//                     <option>11</option>
//                   </select>
//                   <div className="text-xl mt-5">
//                     <input
//                       type="checkbox"
//                       className="mx-4 w-4 h-4 accent-secondary"
//                       onClick={() => handleSamagri()}
//                     />
//                     Include Samagri
//                   </div>
//                   <div className="flex items-center text-xl font-semibold  mt-5 ml-10">
//                     {/* Total : {currency.inr}500 */}
//                   Total: {currency.inr}{total()}
//                   </div>
//                   <div className="flex items-center text-xl mt-3 ml-10">
//                     {samagriPrice && (
//                       <span>samagri added : {currency.inr}200</span>
//                     )}
//                   </div>

//                   <div className="flex items-center text-xl font-semibold  mt-3 ml-10">
//                     {/* Sub Total : {currency.inr}700 */}
//                     Sub Total : {currency.inr}{calculateTotal()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <Link href={`/payment?subtotal=${calculateTotal()}`}>
//                 <button className="px-6 py-4 mt-5 rounded bg-secondary  text-primary my-2 text-xl-primary">
//                 Select
//                 </button>
//               </Link>
//             </div>
          
//           </div>
//         </Dialog>
        
//       </Container>
   
//     </div>
//   );
// }

// export default ServiceDetails;







import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { RxCross1 } from "react-icons/rx";
import DialogContent from "@mui/material/DialogContent";
import Image from "next/image";
import { Box } from "@mui/system";
import { Tab, Tabs } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Container from "../../components/Container";
import { currency } from "../../themes/currency";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const emails = ["username@gmail.com", "user02@gmail.com"];

function ServiceDetails({ data }) {


  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const [selectedPackageAmount, setSelectedPackageAmount] = useState(0);


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 5 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  // console.log(data);
  const [modalOpen, setModalOpen] = useState(false);
  const [numberOfPanditji, setNumberOfPanditji] = useState(2);
  const [includeSamagri, setIncludeSamagri] = useState(false);
        const samagriPrice = includeSamagri ? 200 : 0;
      
        const handlePanditjiChange = (event) => {
          const selectedPanditji = parseInt(event.target.value, 10);
          setNumberOfPanditji(selectedPanditji);
        };
      

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSamagri = () => {
    setIncludeSamagri(!includeSamagri);
  };

  const panditjiPrice = data?.price || 500;

  const calculateTotal = () => {
     // Change this based on your actual pricing
    const subTotal = panditjiPrice * numberOfPanditji + samagriPrice;
    return subTotal;
  };

  
  const handlePayment = () => {
    rzp.open();

    // Redirect to the payment page with the subtotal as a query parameter
    router.push(`/payment?subtotal=${calculateTotal()}`);
  };

  const total = () => {
       // Change this based on your actual pricing
      const totalPrice = panditjiPrice * numberOfPanditji ;
      return totalPrice;
    };

    const handlePackageClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
      
      // Update the selected package amount here
      const panditjiPrice = 500; // Change this based on your actual pricing
      const subTotal = panditjiPrice * numberOfPanditji + (value ? 200 : 0);
      setSelectedPackageAmount(subTotal);
    };

    const router = useRouter();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
      pincode: '',
      date: '',
      time: '',
    });
  
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    };
  
    const handlePackageCloseFunction = () => {
      // Handle any additional logic if needed
      setModalOpen(false);
    };
  
    // const p = services?.data?.[0]?.attributes;
    // console.log(data.cities)

  return (
    <div>
      <Container >
                 <div  className="flex  px-2 md:px-10 py-10 flex-wrap">
                 <div className="w-full md:w-2/3 px-1 py-3 lg:py-0 md:px-5 md:mb-20 lg:px-10  md:order-1 ">
                  
                   <p className="text-2xl md:text-4xl lg:text-6xl font-bold my-10 " >{data.name}</p>
                   
                  <p className="mx-auto lg:mr-10 lg:pr-10 text-justify pb-5">{data.description}</p>

               {/* <h1 className="pb-2  text-xl font-bold">Date</h1>
               <input
                 type="date"
                 className="h-10 w-60 border px-3 cursor-pointer text-xl "
               /> */}
               <h1 className=" pb-2 text-xl font-bold mt-3">Select Package</h1>
               <div className="h-10 w-60 border rounded-lg flex justify-between">
                 <div className="pl-10 py-2">{currency.inr}{calculateTotal()}</div> 
                 <button
                   className="border rounded-full h-8 w-20 float-right my-1 mr-2 hover:border-2 hover:border-primaryDark"
                   onClick={() => setOpen(true)}
                   // value={packageName}
                 >
                   select
                 </button>
               </div>
               <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
               <button
                 className="px-6 py-2 mt-3 rounded bg-secondary text-primary my-2 text-xl"
                 onClick={() => setModalOpen(true)
                 }
               >
                 Buy Now
               </button>
               <Link href="/contact">
               <button
                 className="px-6 py-2 mt-3 rounded w-full bg-secondary text-primary my-2 text-xl"
               >
                 Contact Us
               </button>
               </Link>
              
               </div>
              
              </div>
   
              <div className=" md:h-screen w-full md:w-1/4 order-1 flex flex-col justify-center items-center bg-primary rounded-3xl ">
               <div className="h-80 w-80 rounded-xl ">
                <Image
                   src={data.image.url}
                   alt="Pandit jii"
                   placeholder="blur"
                   width={80}
                   // objectFit="cover"
                   height={80}
                   blurDataURL="/assets/images/homeassets/Services_Picture/download.jfif"
                   className="w-full h-full object-cover rounded-full border-4"
                />
               </div>
              </div>
           </div>
       
      <div className=" w-full justify-center bg-amber-300 border-2 ">
         <div className="h-180 md:h-full w-3/4 ml-20 text-secondary pt-5 ">
         <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    label="About Pooja"
                    {...a11yProps(0)}
                    className="mr-5 "
                    sx={{ mr: 5, fontWeight: "bold" }}
                  />
                  <Tab
                    label="Samagri"
                    {...a11yProps(1)}
                    sx={{mr: 5, fontWeight: "bold" }}
                  />
                  <Tab
                    label="Contact Us"
                    {...a11yProps(2)}
                    sx={{ mr: 5, fontWeight: "bold" }}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0} sx={{ fontWeight: "bold"}} 
              className="text-sm md:text-xl py-2 items-start justify-between text-justify " >
                {data.description}
              </TabPanel>
              <TabPanel value={value} index={1} sx={{ fontWeight: "bold" }}
               className="text-sm md:text-xl py-2 items-start justify-between text-justify ">
              {data.tab2}
              </TabPanel>
              <TabPanel value={value} index={2} sx={{ fontWeight: "bold" }}
               className="text-sm md:text-xl py-2 items-start justify-between text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                ullam provident vero, possimus doloremque at praesentium nulla
                distinctio ex expedita impedit cum, temporibus repellendus
                aperiam vel eos quo cumque error quam minus voluptatum
                perspiciatis quasi? Laborum explicabo aspernatur blanditiis
                autem, tenetur dolorem, earum illo quae quis voluptate, iste
                recusandae. Nostrum error ex assumenda nihil repudiandae maiores
                cum provident fugit fuga.
              </TabPanel>
            </Box>
         </div>
      </div>

      <Dialog open={modalOpen} onClose={handleClose}>
          <div className="flex px-5 justify-between items-center">
            <DialogTitle>Enter the following details to checkout</DialogTitle>
            <RxCross1
              size={25}
              onClick={() => setModalOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.name}
          onChange={handleInputChange}
            />
            
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Mobile Number"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.phone}
          onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="address"
              label=" Address"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.address}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="pincode"
              label="Pin Code"
              type="teq"
              fullWidth
              variant="outlined"
              value={formData.pincode}
              onChange={handleInputChange}
            />
                 <div className="flex flex-row gap-5">
              <TextField
                autoFocus
                margin="dense"
                id="date"
                // label="Available "
                type="date"
                fullWidth
                variant="outlined"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                id="time"
                // label="Available Time"
                type="time"
                fullWidth
                variant="outlined"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
              />
              </div>
          </DialogContent>
          <div className="flex justify-center items-center py-3">
          <Link href={`/payment?subtotal=${calculateTotal()}&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}&address=${encodeURIComponent(formData.address)}&pincode=${encodeURIComponent(formData.pincode)}`}>
              <button className="btn-primary" onClick={handlePackageCloseFunction}>Submit</button>
            </Link>
          </div>
        </Dialog>
        <Dialog maxWidth="md" onClose={handlePackageClose} open={open}>
           <div className="flex flex-col ">
            <div className=" border-4 flex flex-col md:flex-row m-5"> 
              <div className="p-5 m-5 items-start justify-between text-justify">
                <div className="text-3xl mb-5 ">Greh Shanti</div>
                {data.package[0]?.packagedes?.text}
                 
                {/* <div className="flex items-center border-2 border-red-500 my-3">
                 <div className="w-12 h-12 overflow-hidden rounded-r-full bg-blue-500 mr-4">
                  <Image className="object-cover w-full h-full" src="/assets/images/cities/delhi.jpg"
                   height={100} width={100} alt=""
                  />
                 </div>
                 <div>
                <h2 className="text-xl font-bold">{data.name}</h2>
                  </div>
               </div> */}
        <p className="font-medium mt-2 text-primary">{data.name} <span className="text-secondary">Available in these cities:</span> </p>
        {data.cities.map((city) => (
          <div key={city.id} className="flex items-center my-3">
            <div className="w-10 h-10 overflow-hidden rounded-r-full mr-4">
              <Image
                className="object-cover w-full h-full"
                src={city.image.url}
                alt={city.name}
                height={100}
                width={100}
              />
            </div>
            <div>
              <h2 className="text-lg ">{city.name}</h2>
            </div>
          </div>
        ))}


              </div>  
               
              
              <div className="flex flex-row text-center  py-5">
                <div className="mr-5 w-60">
                  <h1 className="pb-5 text-xl font-bold mt-5">
                    Number of Panditji
                  </h1>
                  <select className="h-14 w-40 border px-14 cursor-pointer text-xl" onChange={handlePanditjiChange}
        value={numberOfPanditji}>
                    <option>2</option>
                    <option>5</option>
                    <option>11</option>
                  </select>
                  <div className="text-xl mt-5">
                    <input
                      type="checkbox"
                      className="mx-4 w-4 h-4 accent-secondary"
                      onClick={() => handleSamagri()}
                    />
                    Include Samagri
                  </div>
                  <div className="flex items-center text-xl font-semibold  mt-5 ml-10">
                    {/* Total : {currency.inr}500 */}
                  Total: {currency.inr}{total()}
                  </div>
                  <div className="flex items-center text-xl mt-3 ml-10">
                    {samagriPrice && (
                      <span>samagri added : {currency.inr}{data.package[0].samagriPrice}</span>
                    )}
                  </div>

                  <div className="flex items-center text-xl font-semibold  mt-3 ml-10">
                    {/* Sub Total : {currency.inr}700 */}
                    Sub Total : {currency.inr}{calculateTotal()}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href={`/payment?subtotal=${calculateTotal()}`}>
                <button className="px-6 py-4 mt-5 rounded bg-secondary  text-primary my-2 text-xl-primary">
                Select
                </button>
              </Link>
            </div>
          
          </div>
        </Dialog>
        
      </Container>
   
    </div>
  );
}

export default ServiceDetails;
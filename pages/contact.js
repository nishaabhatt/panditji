"use client"
import React, { useState, useEffect } from "react"
import { gql } from "@apollo/client";
import apolloClient from "../lib/apolloClient";
import { Container } from "@mui/material";
import Herobanner from "../src/components/Herobanner"
import {HiPhone} from "react-icons/hi";
import {IoMail} from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import Button from "../src/components/Button";
import { CgNotes } from "react-icons/cg";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import {FaQuestion } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { MdPrivacyTip } from "react-icons/md";
import { db } from "../src/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = ({data}) => {

  
async function addDataToFireStore(name, email, phone, message, selectedService ){
  try{
    const docRef = await addDoc(collection(db, "ContactForm"), {
      name: name,
      email: email,
      phone: phone,
      message: message,
      selectedService: selectedService,
    });
    console.log("first", docRef.id);
    return true;
  } catch (error) {
    console.error("error adding document", error)
    return false;
  }
}
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    setDetail(data?.servicePages);
  }, [data?.servicePages]);
  console.log(detail)

  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => {
    setModalOpen(false);
  };
  
    

    const [userData, setUserData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
      selectedService: "",
    });
  
    let name, value;
    const postUserData = (event) => {
      name = event.target.name;
      value = event.target.value;
  
      setUserData({ ...userData, [name]: value });
    };
  

      const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await addDataToFireStore(userData.name, userData.email, userData.phone, userData.message, userData.selectedService);
        if(added) {
           setUserData("");

           alert ("Data stored to database");
        }
      };

  return (
    <div>
        
         <Herobanner
        title="Contact Us"
        imgUri="/assets/images/cities/delhi.jpg"
      />
        <Container>
       

<div className="flex items-center p-10 justify-center">
  <h2 className="text-xl md:text-2xl">NEED HELP</h2>
  <span className="inline text-primary text-xl md:text-2xl ml-2">CONTACT US</span>
</div>


      {/* blocks */}
       <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5">
        <div className="border-2 border-primary w-full rounded-2xl bg-primaryLight md:w-[300px]">

            <div className="h-[120px] w-[120px] my-5 mx-auto border-2 border-secondary rounded-full">
            <div className=" h-32 w-32 rounded-xl  my-10 mx-10 ">
                 <HiPhone className="w-10 h-10  rounded-full  text-secondary " />
            </div>
            </div>
            
            
            <div className=" h-20 w-full rounded-b-lg p-3 flex items-center justify-center text-center  flex-col">
                <h2 className="text-xl font-bold font-sans text-secondary">Customer Care</h2>
                <p className="text-md text-gray-700">+91-141-669-1112</p>
            </div>
        </div>

        <div className="border-2 border-primary w-full rounded-2xl bg-primaryLight md:w-[300px]">
          <div className="h-[120px] w-[120px] my-5 mx-auto border-2 border-secondary rounded-full flex items-center justify-center">
            <div className="h-32 w-32 rounded-full  flex items-center justify-center">
              <IoMail className="w-10 h-10 text-secondary" />
            </div>
          </div>

            <div className=" h-20 w-full rounded-b-lg p-3  flex items-center justify-center text-center  flex-col">
                <h2 className="text-xl font-bold font-sans text-secondary">Email</h2>
                <p className="text-md text-gray-700">+91-141-669-1112</p>
            </div>
        </div>
        <div className="border-2 border-primary w-full rounded-2xl bg-primaryLight md:w-[300px]">
        <div className="h-[120px] w-[120px] my-5 mx-auto border-2 border-secondary rounded-full flex items-center justify-center">
            <div className="h-32 w-32 rounded-xl my-10 mx-10 flex items-center justify-center">
           < RiWhatsappFill className="w-12 h-10  rounded-full  text-secondary " />
            </div>
           </div>
                  <div className=" h-20 w-full rounded-b-lg p-3 flex items-center justify-center text-center  flex-col">
                  <h2 className="text-xl font-bold font-sans text-secondary">Chat with us</h2>
                  <p className="text-md text-gray-700">+91-141-669-1112</p>
                </div>
        </div>
       </div>

       {/* feedback form */}
        
       <div className="flex items-center p-10 justify-center">
            <h2 className="text-xl md:text-2xl">FEEDBACK /</h2>
            <span className="inline text-primary text-xl md:text-2xl ml-2">ENQUIRY FORM</span>
          </div>
        <Container>

        <div className="flex flex-col md:flex-row">
        
       <form method="POST" className="bg-slate-50 p-2 shadow-2xl w-full md:w-1/2 mx-auto my-4" onSubmit={handleSubmit}>
        <div className="mb-4 ">
         <label htmlFor="name" className="block text-gray-600 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={postUserData}
          className="mt-1 p-2 w-full border rounded-md bg-slate-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={postUserData}
          className="mt-1 p-2 w-full border rounded-md bg-slate-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-600 text-sm font-medium">
            Phone Number
        </label>
        <input 
        type="number"
        id="phone"
        name="phone"
        value={userData.phone}
        onChange={postUserData}
        rows="4"
        className="mt-1 p-2 w-full border rounded-md bg-slate-100"
        required
         />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-600 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={userData.message}
          onChange={postUserData}
          rows="4"
          className="mt-1 p-2 w-full border rounded-md bg-slate-100"
          required
        ></textarea>
      </div>

      <div className="mb-4">
          <label htmlFor="selectedService" className="block text-gray-600 text-sm font-medium">
            Select Service
          </label>
          <select
            id="selectedService"
            name="selectedService" 
            value={userData.selectedService} 
            onChange={postUserData} 
            className="mt-1 p-2 w-full border rounded-md bg-slate-100"
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {detail?.map((service, index) => (
            <option key={index} value={service.name}>
              {service.name}
            </option>
          ))}
          </select>
        </div>

      <button
        type="submit"
        className="bg-primary text-white w-full px-4 py-2 rounded-full hover:bg-secondary transition-colors"
          >
        Submit
      </button>
    </form>
 </div>  
          
        </Container>  
        
    </Container>

    {/* last section */}

    <div className="flex justify-evenly my-8 flex-wrap  bg-primary  h-full py-8">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl font-semibold">
            Call now 
          </h4>
          
          <div className="w-40 h-24 bg-secondary rounded-xl border-2 border-primary flex justify-center items-center">
          <Button 
            show="block" 
            name={<CgNotes className="text-primary text-5xl " />}
            handleFunction={() => setModalOpen(true)} 
            >
            <CgNotes className="text-primary text-5xl " />
            </Button>
          </div>

        </div>

        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl font-semibold">
            Pay <span className="text-secondary">Online</span>
          </h4>
          <div className="w-40 h-24 bg-secondary rounded-xl border-2 border-primary flex justify-center items-center">
            {" "}
            <BsFillCreditCardFill className="text-primary text-5xl" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl font-semibold">
            Privacy <span className="text-secondary"> policy</span>
          </h4>
          <div className="w-40 h-24 bg-secondary rounded-xl border-2 border-primary flex justify-center items-center">
            {" "}
            <MdPrivacyTip className="text-primary text-5xl" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl font-semibold">
             Warranty 
          </h4>
          <div className="w-40 h-24 bg-secondary rounded-xl border-2 border-primary flex justify-center items-center">
            {" "}
            <GiConfirmed className="text-primary text-5xl" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl font-semibold">
            Make <span className="text-primaryLight">a Call</span>
          </h4>
          <div className="w-40 h-24 bg-secondary rounded-xl border-2 border-primary flex justify-center items-center">
            {" "}
            <FiPhoneCall className="text-primary text-5xl" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl font-semibold">
            Ask <span className="text-secondary"> Question</span>
          </h4>
          <div className="w-40 h-24 bg-secondary rounded-xl border-2 border-primary flex justify-center items-center">
            {" "}
            <FaQuestion  className="text-primary text-5xl" />
          </div>
        </div>

        </div>

    </div>
  )
}

export default Contact


export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query MyQuery {
        servicePages {
          name
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
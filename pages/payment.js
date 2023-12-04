import { useRouter } from 'next/router';
import RazorpayPayment from './../src/components/RazorpayPayment';
import { Checkbox, Container } from "@mui/material";
import { useState } from "react";
import { currency } from "../src/themes/currency";
import Link from "next/link";

const PaymentPage = () => {
  const router = useRouter();
  // const [isFormFilled, setIsFormFilled] = useState(false);
  const { subtotal,name, email, phone, address, pincode, date, time } = router.query;


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // const isFilled = Object.values(formData).every((field) => field.trim() !== '');
    // setIsFormFilled(isFilled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can perform validation or send the data to a server
    console.log('Form submitted:', formData);
  };
  

  return (
    <div>
       <h2 className="text-center my-10 text-2xl md:text-3xl lg:text-4xl">Payment</h2>
      <Container>
        
       <div className="flex flex-col md:flex-row">
      

    <form onSubmit={handleSubmit} className="w-full lg:w-5/2 border-1 bg-white shadow-2xl my-10 p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-500">
          Name<span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="fname"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
          className="mt-1 p-2  w-full bg-slate-50"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email<span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          className="mt-1 p-2 border w-full bg-slate-50"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
          Phone<span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={handleChange}
          className="mt-1 p-2 border w-full bg-slate-50"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-600">
          Address<span className="text-red-600">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          placeholder="Address"
          value={address}
          onChange={handleChange}
          className="mt-1 p-2 border w-full bg-slate-50"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="pincode" className="block text-sm font-medium text-gray-600">
          Pin Code<span className="text-red-600">*</span>
        </label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          placeholder="Pincode"
          value={pincode}
          onChange={handleChange}
          className="mt-1 p-2 border w-full bg-slate-50"
        />
      </div>
      <div className="flex flex-row">
      <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-600">
            Date<span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            // placeholder="Pincode"
            value={date}
            onChange={handleChange}
            className="mt-1 p-2 border w-full bg-slate-50"
          />
        </div>
          <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-600">
            Time<span className="text-red-600">*</span>
          </label>
          <input
            type="time"
            id="time"
            name="time"
            // placeholder="Pincode"
            value={time}
            onChange={handleChange}
            className="mt-1 p-2 border w-full bg-slate-50"
          />
        </div>
      </div>
      

      <div className="flex flex-row mt-10">
        <Checkbox size="10" /><p className="text-gray-600 text-[14px] mt-1.5"> Ship to a different address?</p>
      </div>

      <div className="border p-5">
        <p className="text-[13px] text-gray-400 mb-2">Order Notes (optional)</p>
        <input type="text" className="bg-gray-100 w-full p-3 text-[12px]" placeholder="Note about your order"/>
      </div>
    </form>
 



        <div className="w-full lg:w-2/3 bg-white shadow-md my-5 lg:my-10  pt-10">

         <div className=" p-5">
          <div className="flex flex-row justify-between px-20">
            <p className="text-gray-600 font-bold">Subtotal: </p>
            <p className="text-gray-500 font-medium">{currency.inr}{subtotal}</p>
          </div>
          <div className="flex flex-row justify-between px-20 my-5">
            <p className="text-gray-600 font-bold">Subtotal: </p>
            <p className="text-gray-500 font-medium">{currency.inr}{subtotal}</p>
          </div>
          <div className="flex flex-row justify-between px-20 my-5">
            <p className="text-gray-600 font-bold ">Shipping </p>
            <p className="text-gray-500 font-medium justify-start">Free shipping</p>
          </div>
         </div>

         <div className="p-5 border">
           <p className="text-gray-400 text-[14px]">Direct bank transfer</p>
           <div className="bg-gray-100 p-4">
              <p className="text-[12px] text-gray-400">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
           </div>
           <div className="flex flex-row p-2">
           <Checkbox size="10"/>
           <p className="text-[12px] text-gray-400 mt-1"> I would like to receive exclusive emails with discounts and product information</p>
           </div>   

           <div className="py-2 px-3">
            <p className="text-[11px] text-gray-400 leading-relaxed text-justify">Your personal data will be used to process your order, support your experience throughout
               this website, and for other purposes described in our <Link href="/privacyPolicy"><span className="text-blue-400">privacy policy</span> .</Link></p>
           </div>

         </div>
        
        <div className=" text-center mb-10">
        <button className="bg-primary px-4 py-2 rounded-full mt-10 "><RazorpayPayment /></button>
        </div>
          {/* {isFormFilled && (
              <div className="text-center mb-10">
                <button className="bg-primary px-4 py-2 rounded-full mt-10">
                  <RazorpayPayment />
                </button>
              </div>
            )} */}
         
        </div>

         

       </div>
      </Container>
    </div>
   
  );
};

export default PaymentPage;


"use client"

import { useState } from "react";

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState(-1);
  const redirectToWhatsapp = (phoneNo) => {
    let url = 'https://api.whatsapp.com/send?phone=6' + phoneNo;
    location.replace(url);
  }
  return (
    <>
        <div className="bg-primary"></div>
            <input type="text" name="tel_no" id="" placeholder="Enter phone number" className="rounded-xl px-5 py-2 block m-auto mt-5" onChange={(e) => setPhoneNumber(e.target.value)}/>
            <button  className="text-white bg-green-500 rounded-3xl block m-auto mt-2 p-3 " onClick={() => redirectToWhatsapp(phoneNumber)}>Start messaging</button>
    </>
  )
}

export default Form
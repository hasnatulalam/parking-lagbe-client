
import React, { useContext, useState } from "react";
import { UserContext } from "../Context/Context";
import axios from "../Pages/Token/axiosInterceptor";


const AddParking = () => {

  const [state,setState]=useContext(UserContext)
 
const [parkingAddress,setParkingAddress] =useState(" ")
const [ownerName,setOwnerName]=useState(" ")
const[ownerMobile,setOwnerMobile]=useState(" ")
const [securityNumber,setSecurityNumber]=useState(" ")
const[division,setDivision] =useState(" ")
const [locality,setLocality]=useState(" ")
const[allowBike,setAllowBike] =useState(" ")
const[ bikeSlotBooking,setBikeSlotBooking] =useState()
const [allowCar,setAllowCar]=useState(" ")
const[carSlotBooking,setCarSlotBooking] =useState()
const [allowMonthly,setAllowMonthly] =useState("Yes")
const [allowHourly, setAllowHourly] =useState(" ")
const [monthlyCost,setMonthlyCost] =useState()
const[startTime,setStartTime] =useState()
const[endTime,setEndTime] =useState()


/* const data ={parkingAddress,ownerName,ownerMobile,securityNumber, division, locality,allowBike, bikeSlotBooking,allowCar,carSlotBooking,
           allowMonthly, allowHourly,monthlyCost,startTime,endTime, } */



  const handleAddParking = async (e) => {
    e.preventDefault();
    
    try {
     
        const response= await axios.post("api/parking/addparking",{parkingAddress,ownerName,ownerMobile,securityNumber, division, locality,allowBike, bikeSlotBooking,allowCar,carSlotBooking,
          allowMonthly, allowHourly,monthlyCost,startTime,endTime, })
       
     
        if (response.status === 200) {
         
          alert(response.data.message);
          
       
        // localStorage.setItem("token", response.data.token);
         // localStorage.setItem("name", response.data.name);
         // localStorage.setItem("email", response.data.email);
        
         
        
        }
       
      }
     catch (error) {
        alert(error.response.data.message);
      }
    };
       

    
    return (
      <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
    <form onSubmit={handleAddParking}>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
            Parking Location
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" name="ParkingAddress" type="text" placeholder="Parking Location"  value={parkingAddress}
                        onChange={(e) =>
                          setParkingAddress(
                           
                           e.target.value
                          )
                        }/>
            
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Owner Name
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"  type="text" name="ownerName" placeholder="Owner Name"  value={ownerName}
                        onChange={(e) =>setOwnerName(e.target.value)}/>
                         
                        
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
            Owner Mobile
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" name="ownerMobile" type="text" placeholder="Owner Mobile Number" value={ownerMobile}
                        onChange={(e) =>setOwnerMobile(e.target.value)}/>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Security Number(if available)
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" name="securityNumber" type="text" placeholder="Software Engineer" value={securityNumber}
              onChange={(e) =>setSecurityNumber(e.target.value)}/>
          </div>
        </div>
        
        <div class="-mx-3 md:flex mb-2">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="location">
            Division
            </label>
            <div>
              <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location" value={division} onChange={(e)=>setDivision(e.target.value)}>
                       
                <option>Chittagong</option>
                <option>Dhaka</option>
              </select>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="job-type">
            Locality
            </label>
            <div>
              <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type" value={locality}
                       onChange={(e) =>setLocality(e.target.value)}>
               
                <option>GEC</option>
                <option>ChawkBazar</option>
              </select>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="department">
            Allow Bike?
            </label>
            <div>
              <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department" value={allowBike} onChange={(e)=>setAllowBike(e.target.value)}>
                <option>Yes</option>
                <option>No</option>
               
              </select>
            </div>
          </div>
        </div>
        <div class="-mx-3 md:flex mb-2">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="location">
            Total Slot Bike
            </label>
            <div>
              
              <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" name="bikeSlotBooking" type="text" placeholder="Total Slot Booking" value={bikeSlotBooking} 
              onChange={(e)=>setBikeSlotBooking(e.target.value)}
                        />
             
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="job-type">
            Allow Car?
            </label>
            <div>
              <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type" value={allowCar} onChange={(e)=>setAllowCar(e.target.value)}>
                <option>Yes</option>
                        
                <option>No</option>
                
              </select>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="department">
            Total Slot Car
            </label>
            <div>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" name="carSlotBooking" type="text" placeholder="Software Engineer" value={carSlotBooking}
                 onChange={(e)=>setCarSlotBooking(e.target.value)}/>
            </div>
          </div>
        </div>


        <div class="-mx-3 md:flex mb-2">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="location">
            Allow Monthly?
            </label>
            <div>
              
            <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department" value={allowMonthly} 
            onChange={(e)=>setAllowMonthly(e.target.value)}>
                <option>Yes</option>
                <option>No</option>
               
              </select>
             
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="job-type">
            Allow Hourly?
            </label>
            <div>
              <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type" value={allowHourly} onChange={(e)=>setAllowHourly(e.target.value)}>
                <option>Yes</option>
                <option>No</option>
                
              </select>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="department">
          Monthly Cost
            </label>
            <div>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" name="monthlyCost" type="text" placeholder="Software Engineer"  value={monthlyCost}
            onChange={(e)=>setMonthlyCost(e.target.value)}
                        />
            </div>
          </div>
        </div>

        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
              Start Time
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" name="startTime" type="time" placeholder="Tutsplus"  value={startTime}
                onChange={(e)=>setStartTime(e.target.value)}       />
            
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
              End Time
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" name="endTime" type="time" placeholder="Software Engineer"  value={endTime}
              onChange={(e)=>setEndTime(e.target.value)}          />
          </div>
        </div>

       
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
       
        <div class="-mx-3 md:flex mt-2">
          <div class="md:w-full px-3">
            <button type="submit" class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
              Button
            </button>
          </div>
        </div>
      </div>
      </div>
    </form>
  </div>
    );
};

export default AddParking;
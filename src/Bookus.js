import React from "react";
import "./index.css"

const Bookus = () => {
  return (
    
    <>
   
    
   
    <div class="container-fluid back-img">
		<div>
			<br /> <br /> <br /> <br />
			<h1 class="text-center text-white ">BOOKING</h1>
		</div>
<br />

	</div>
      <div>
      <div class="card">
        <div class="row"> 
  <div class="column">
 
  <h2>BOOKING & CONTACT</h2>
  <hr />
  
  <div class="contain">
  <form action="/">
  <div class="row">
    <div class="col-25">
      <label for="fname">Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" required/>
    </div>
    </div>

    <div class="row">
    <div class="col-25">
      <label for="fname">Email</label>
    </div>
    <div class="col-75">
      <input type="email" id="fname" name="firstname" required/>
    </div>
    </div>
    <div class="row">
    <div class="col-25">
      <label for="fname">Phone</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" required/>
    </div>
    </div>


  <div class="row">
    <div class="col-15">
      <label for="fname">State</label>
    </div>
    <div class="col-65">
      <input type="text" id="fname" name="Pincode" required/>
    </div>
    <div class="col-15">
      <label for="fname">Aadhaar</label>
    </div>
    <div class="col-65">
      <input type="text" id="fname" required/>
    </div>
    </div>

    <div class="row">
    <div class="col-15">
      <label for="fname">City</label>
    </div>
    <div class="col-65">
      <input type="text" id="fname" required/>
    </div>
    <div class="col-15">
      <label for="fname">PostCode</label>
    </div>
    <div class="col-65">
      <input type="text" id="fname" required/>
    </div>
    </div>

   
    <div class="row">
    <div class="col-25">
      <label for="fname">Country</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" required/>
    </div>
    </div>
    <br/>
    
    <h2>DETAILS</h2>
    <hr />
    <div class="row">
    <div class="col-15">
    <label for="arrive" class="label-date"><i class="fa fa-calendar"></i>&nbsp;&nbsp;Arrive</label>
    </div>
    <div class="col-65">
    <input type="datetime-local" id="arrive" class="floatLabel" name="arrive" />
    </div>
    <div class="col-15">
    <label for="depart" class="label-date"><i class="fa fa-calendar"></i>&nbsp;&nbsp; Depart</label>
    </div>
    <div class="col-65">
    <input type="datetime-local" id="depart" class="floatLabel" name="depart" />
    </div>
    </div>
   
   

    <div class="row">
    <div class="col-35">
    <label for="fruit"><i class="fa fa-male"></i>&nbsp;&nbsp;People</label>
    </div>
    <div class="col-85">
      <input type="number" id="fname" />
    </div>
    <div class="col-35">
    <label for="fruit"><i class="fa fa-building"></i>&nbsp;&nbsp;Building</label>
    </div>
    <div class="col-85">
    
      <select class="floatLabel">
        <option value="blank">BUILDING</option>
        <option value="aryabhatta">Aryabhatta Building</option>
        <option value="maddhusudan">Madhusudan Building</option>
        
      </select>
    </div>
    <div class="col-35">
    <label for="fruit"><i class="fa fa-bed"></i>&nbsp;&nbsp;Room</label>
    </div>
    <div class="col-85">
    <select class="floatLabel">
    <option>Select room </option>
                    <optgroup label="Aryabhatta Building">
                        <option value="seminar hall">Seminar Hall no-6 Ground Floor CUTM(AC)</option>
                       <option value="board room">Board Room First Floor CUTM(AC)</option>
                        <option vlaue="room no 18">Room no-18 Ground Floor CUTM(AC)</option>
                        <option vlaue="room no 210">Room no-320 Third Floor CUTM(NON-AC)</option>
                        </optgroup>
                   <optgroup label="Madhusudan Building">
                         <option value="auditorium"> Auditorium Hall CUTM(AC)</option>
                  </optgroup>
 </select>
  </div>
    </div>

    <br />
    <br />
            <div class="checkbox-dropdown">Choose Furniture
              <ul class="checkbox-dropdown-list">
    
      <label>
        <input type="checkbox" value="chair and table" name="city"/>Chair and Table</label>
    
    
      <label>
        <input type="checkbox" value="sofa" name="city" />Sofa</label>
    
    
      <label>
        <input type="checkbox" value="desk and bench" name="city" />Desk and Bench</label>
    
    
      <label>
        <input type="checkbox" value="vip chair" name="city" />VIP Chair</label>
    
    
  </ul>
</div>

<br></br>
<div class="checkbox-dropdown">Choose Electronics
              <ul class="checkbox-dropdown-list">
    
      <label>
        <input type="checkbox" value="tubelight" name="city"/>Tubelight</label>
    
    
      <label>
        <input type="checkbox" value="fan" name="city" />Fan</label>
    
    
      <label>
        <input type="checkbox" value="city" name="city" />AC</label>
    
    
      <label>
        <input type="checkbox" value="projector" name="city" />Projector</label>

</ul>
</div>

<br></br>
<div class="checkbox-dropdown">Choose Food
              <ul class="checkbox-dropdown-list">
    
      <label>
        <input type="checkbox" value="before event started" name="city"/>Food(Before Event Started)
</label>
    
    
      <label>
        <input type="checkbox" value="after completing event" name="city" />Food(After Completing the Event)</label>
</ul>
</div>


    
<div class="row">
     <p class="info-text">Please describe your needs here.</p>
    <textarea type="text" id="fname" />
   </div>
</form>
    <br />
    <br />
    <div class="row">
      <div class="col-76">
    <input type="submit" value="Save & Submit"/>
   
    
    </div>
  </div>
  </div>
   </div>
  </div>
     
      </div>

      </div>
    </>
  );
};

export default Bookus;
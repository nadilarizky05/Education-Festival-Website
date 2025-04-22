// "use client";

// import React, { useState, useEffect } from "react";
// import { Controller, useForm } from "react-hook-form";
// import PhoneInput from 'react-phone-input-2'
// import API_URL from '../API/index'
// import Swal from "sweetalert2";
// import "react-phone-input-2/lib/bootstrap.css";
// import '../FormConfirmationDiscount/FormConfirmationDiscount.css'
// import html2pdf from 'html2pdf.js';

// const FormConfirmationDiscount = () => {
//   const {control, register, handleSubmit, watch, setValue, formState: { errors }, unregister } = useForm({
//     defaultValues: {
//       selectedCities: [],
//       trialSelectedCities: []
//     }
//   });
  
//   const selectedPrice = watch('price'); // AUD 6000, AUD 1250
//   const selectedPriceTrial = watch('price_trial'); // AUD 4000, AUD 1000
//   const selectedPricePlatinum = watch('price_platinum'); // AUD 13500
//   const selectedCities = watch('selectedCities') || []; //6 Kota + Bandung
//   const selectedTrialCities = watch('trialSelectedCities') || []; //6 Kota aja
//   const [showCities, setShowCities] = useState(false); //pertama di hide dulu city-nya
//   const [showTrialCities, setShowTrialCities] = useState(false); // ini juga di hide dulu city trial nya
//   const voucherInput = watch('voucherCode'); // input voucher
//   const [voucherValid, setVoucherValid] = useState(false); //voucher valid - FIXED: proper state definition
//   const [guestFields, setGuestFields] = useState([{ id: 1 }]); //variable tamu appreciation night
//   const [btnLoading, setBtnLoading] = useState(false); //btn-loading
//   const confirmCheckbox = watch('confirm');

//   useEffect(() => {
//     if (selectedPrice) {
//       setShowCities(true); //jika harga di select, show city
//     }
    
//     if (selectedPrice === "6000") { //jika harga select 6000
//       const allCities = ["Medan", "Jakarta", "Yogyakarta", "Surabaya", "Denpasar", "Makassar"]; 
//       setValue('selectedCities', allCities); //set nilai select city menjadi value dari allCity
//     } else if (selectedPrice === "1250") { //jika harga select 1250
//       setValue('selectedCities', []); //set nilai select citynya menjadi array kosong dulu
//     }
//   }, [selectedPrice, setValue]); //tentukan select pricenya berdasarkan setvalue di kondisi atas 

//   useEffect(() => {
//     if (selectedPriceTrial) {
//       setShowTrialCities(true); //jika harga di select trial, show city
//     }
    
//     if (selectedPriceTrial === "4200") { //jika select trial AUD 4200
//       const allTrialCities = ["Medan", "Jakarta", "Yogyakarta", "Surabaya", "Denpasar", "Makassar"];
//       setValue('trialSelectedCities', allTrialCities); //set nilai Trial city menjadi value dari allTrialCity
//     } else if (selectedPriceTrial === "1000") { //jika select trial AUD 1000
//       setValue('trialSelectedCities', []); //set nilai Trial city menjadi array kosong
//     }
//   }, [selectedPriceTrial, setValue]); //tentukan select pricenya berdasarkan setvalue di kondisi atas 

//   const invitationValue = watch('invitation');
//   useEffect(() => {
//     if (invitationValue === '0') {
//       setValue('guests', []);
//       setGuestFields([]);
//     } else if (invitationValue === '1' && guestFields.length === 0) {
//       setGuestFields([{ id: 1 }]);
//     }
//   }, [invitationValue, setValue]);

//   const calculateTotalPrice = () => {
//     let total = 0;
//     let originalTotal = 0;
    
//     // REGULAR PACKAGE
//     if (selectedPrice) {
//       if (selectedPrice === "6000") {
//         total += 6000;
//         originalTotal += 6000;
        
//         if (selectedCities && selectedCities.includes("Bandung")) {
//           total += 500;
//           originalTotal += 500;
//         }
//       } else if (selectedPrice === "1250") {
//         const regularCities = selectedCities ? selectedCities.filter(city => city !== "Bandung") : [];
//         const cityCount = regularCities.length;

//         total += cityCount * 1250;
//         originalTotal += cityCount * 1250;
      
//         if (selectedCities && selectedCities.includes("Bandung")) {
//           total += 500;
//           originalTotal += 500;
//         }
//       }
//     }
  
//     // TRIAL PACKAGE
//     if (selectedPriceTrial) {
//       if (selectedPriceTrial === "4200") {
//         total += 4200;
//         originalTotal += 4200;
//       } else if (selectedPriceTrial === "1000") {
//         const cityCount = selectedTrialCities ? selectedTrialCities.length : 0;
//         total += cityCount * 1000;
//         originalTotal += cityCount * 1000;
//       }
//     }
    
//     // PLATINUM PACKAGE
//     if (selectedPricePlatinum === "13500") {
//       total += 13500;
//       originalTotal += 13500;
//     }
    
//     const discountedTotal = voucherValid ? total * 0.5 : total;
//     return { 
//       discountedTotal: discountedTotal,
//       originalTotal: originalTotal
//     };
//   };

//   const validateVoucher = () => {
//     const validVoucherCode = 'NIECWEF50'; //set code vouchernya
//     if (voucherInput?.toUpperCase() === validVoucherCode) { //set voucher yg diinput jadi uppercase dan cocokan dgn variable validVoucher
//       setVoucherValid(true); // FIXED: Update state when voucher is valid
//       Swal.fire({ //jikas sukses show ini
//         icon: 'success',
//         title: 'Voucher Applied!',
//         text: 'You get a 50% discount!'
//       });
//     } else {
//       setVoucherValid(false);
//       Swal.fire({ //jika gagal show ini
//         icon: 'error',
//         title: 'Invalid Voucher',
//         text: 'Please enter a valid voucher code.'
//       });
//     }
//   };

//   const generatePriceDetails = () => { //semacam nota belanja gitu
//     const details = []; //untuk nyimpan detail belanja kita
//     const selectedSchedules = watch('schedule'); //ngambil value jadwal event yg dipilih
    
//     //REGULAR PACKAGE
//     if (selectedPrice === "6000") { //jika select harga = AUD 6000
//       const detailParts = ["- Regular Package: AUD 6000 / 6 city"]; //tampilkan teks ini
      
//       if (selectedCities.includes("Bandung")) { //jika select kota = Bandung
//         detailParts.push("+ Bandung (AUD 500)"); //tambahkan teks ini
//       }
//       details.push(detailParts.join(" ")); //lalu enter kebawah

//     } else if (selectedPrice === "1250") { //jika select harga = AUD 1250
//       const regularCities = selectedCities.filter(city => city !== "Bandung"); //variable yg menampung data SELAIN bandung
//       const bandung = selectedCities.includes("Bandung") ? ["Bandung"] : []; ///variable yg menampung KHUSUS bandung
      
//       if (regularCities.length > 0) { //jika SELAIN bandung lebih dari 0
//         details.push(`- Regular Package: AUD ${regularCities.length * 1250} (${regularCities.join(", ")})`); //di kali 1250 per city dan pisahkan dengan koma
//       }
      
//       if (bandung.length > 0) { //jika ada Bandung
//         details.push(`- Additional City: AUD 500 (Bandung)`); //tambahkan text ini
//       }
//     }

//     //TRIAL PACKAGE
//     if (selectedPriceTrial === "4200") {  //jika select harga trial = AUD 4200
//       details.push("- Trial Package: AUD 4200 / 6 city"); //masukan text ini
//     } else if (selectedPriceTrial === "1000") { //selain itu
//       details.push(`- Trial Package: AUD ${selectedTrialCities.length * 1000} (${selectedTrialCities.join(", ")})`); //hitung per city-nya dikali 1000
//     }

//     //PLATINUM PACKAGE
//     if (selectedPricePlatinum === "13500") { 
//       details.push("- Platinum Partner: AUD 13500");
//     }
    
//     //SELECT SCHEDULE
//     if (selectedSchedules) {
//       details.push(`- Scheduled for ${selectedSchedules}`);
//     }

//     //INFO VOUCHER VALID
//     if (voucherValid) {
//       details.push("- 50% Discount Applied");
//     }
//     return details; //kembalikan nilai DETAIL BELANJA
//   };

//   const addGuestField = () => {
//     if (guestFields.length >= 3) {
//       Swal.fire({
//         title: "Maximum Limit Reached",
//         text: "You can only add up to 3 guests",
//         icon: "warning",
//         confirmButtonText: "OK"
//       });
//       return;
//     }
//     const newId = guestFields.length > 0 ? Math.max(...guestFields.map(field => field.id)) + 1 : 1;
//     setGuestFields([...guestFields, { id: newId }]);
//   };

//   const removeGuestField = (idToRemove) => {
//     if (guestFields.length > 1) {
//       const index = guestFields.findIndex(field => field.id === idToRemove);
//       const updatedGuestFields = guestFields.filter(field => field.id !== idToRemove);
//       const currentGuests = [...(watch('guests') || [])];
      
//       if (index !== -1 && currentGuests.length > index) {
//         currentGuests.splice(index, 1);
//         setValue('guests', currentGuests);
//       }
      
//       setGuestFields(updatedGuestFields);
//       unregister(`guests[${index}].fullName`);
//       unregister(`guests[${index}].email`);
//       unregister(`guests[${index}].phone`);
//       unregister(`guests[${index}].institution`);
//     }
//   };

//   const { discountedTotal, originalTotal } = calculateTotalPrice(); //kepake di onSubmit
//   const priceDetails = generatePriceDetails(); //kepake di onSubmit
//   const onSubmit = async (data) => {
//     setBtnLoading(true);
      
//     try {
//       const formDataObj = new FormData();
      
//       let guestsData = [];
//       if (data.invitation === '1' && data.guests) {
//         guestsData = data.guests.filter(guest => 
//           guest && guest.fullName && guest.email && guest.phone && guest.institution
//         );
//       }
      
//       const jsonData = {
//         ...data,
//         price: data.price || null,
//         selectedCities: data.selectedCities || [],
//         price_trial: data.price_trial || null,
//         trialSelectedCities: data.trialSelectedCities || [],
//         price_platinum: data.price_platinum || null,
//         notes: data.notes || null,
//         priceAfterDiscount: discountedTotal,
//         priceBeforeDiscount: originalTotal,
//         priceDetails: priceDetails,
//         schedule: data.schedule || null,
//         voucherCode: data.voucherCode || '',
//         voucherApplied: voucherValid,
//         codeVoucher: voucherValid ? voucherInput?.toUpperCase() : null,
//         guests: guestsData
//       };
      
//       formDataObj.append('data', JSON.stringify(jsonData));

//       if (data.signedDocument && data.signedDocument[0]) {
//         formDataObj.append('signedDocument', data.signedDocument[0]);
//       }
      
//       console.log("Form Data:", jsonData);
  
//       const response = await API_URL.eventUrl.post('form-confirmation-edufest', formDataObj, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
  
//       if (response.status === 201) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Submission Successful',
//           text: 'Your form has been submitted!'
//         }).then(() => {
//           window.location.reload();
//         });
//       } else {
//         throw new Error('Submission failed');
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       const errorMessage = error.response?.data?.message || error.message || 'Submission failed';
//       Swal.fire({
//         icon: 'error',
//         title: 'Submission Failed',
//         text: errorMessage
//       });
//     } finally {
//       setBtnLoading(false);
//     }
//   };
 
//   const generatePDF = () => {
//     const formData = {
//       fullName: watch('fullName'),
//       institution: watch('institution'),
//       officialRepresentative: watch('officialRepresentative'),
//       email: watch('email'),
//       phone: watch('phone'),
//       notes: watch('notes')
//     };
  
//     const printableContent = document.createElement('div');
//     printableContent.innerHTML = `
//       <div style="font-family: Arial, sans-serif; padding: 10px; font-size: 10pt; display: flex; flex-direction: column; min-height: 100%;">
//         <div style="flex: 0;">
//           <h3 style="text-align: center; color: #dc3545; margin: 5px 0;">NIEC WORLD EDUCATION FESTIVAL 2025</h3>
//           <h4 style="text-align: center; margin: 5px 0 10px 0;">Registration Summary & Commitment Statement</h4><br />
          
//           <p style="color: #dc3545; margin: 5px 0;">For the university/institution who gets 50% off, there will be no accommodation provided</p>
//           <h4 style="margin: 5px 0;">Personal Information</h4>
//           <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 9pt;">
//             <tr style="background-color: #f8f9fa;">
//               <th style="border: 1px solid #dee2e6; padding: 3px; text-align: left; width: 35%;">Field</th>
//               <th style="border: 1px solid #dee2e6; padding: 3px; text-align: left;">Value</th>
//             </tr>
//             <tr>
//               <td style="border: 1px solid #dee2e6; padding: 3px;">Full Name</td>
//               <td style="border: 1px solid #dee2e6; padding: 3px;">${formData.fullName || ""}</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//               <td style="border: 1px solid #dee2e6; padding: 3px;">Institution</td>
//               <td style="border: 1px solid #dee2e6; padding: 3px;">${formData.institution || ""}</td>
//             </tr>
//             <tr>
//               <td style="border: 1px solid #dee2e6; padding: 3px;">Official Representative</td>
//               <td style="border: 1px solid #dee2e6; padding: 3px;">${formData.officialRepresentative || ""}</td>
//             </tr>
//             <tr style="background-color: #f8f9fa;">
//               <td style="border: 1px solid #dee2e6; padding: 3px;">Email</td>
//               <td style="border: 1px solid #dee2e6; padding: 3px;">${formData.email || ""}</td>
//             </tr>
//             <tr>
//               <td style="border: 1px solid #dee2e6; padding: 3px;">Phone</td>
//               <td style="border: 1px solid #dee2e6; padding: 3px;">${formData.phone || ""}</td>
//             </tr>
//           </table>
          
//           <br />
//           <div style="display: flex; gap: 10px;">
//             <div style="flex: 1;">
//               <h4 style="margin: 5px 0;">Price Summary</h4>
//               <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 9pt;">
//                 <tr style="background-color: #f8f9fa;">
//                   <th style="border: 1px solid #dee2e6; padding: 3px; text-align: left;">Price Details</th>
//                 </tr>
//                 ${priceDetails.map(detail => `
//                   <tr>
//                     <td style="border: 1px solid #dee2e6; padding: 3px;">${detail}</td>
//                   </tr>
//                 `).join('')}
//                 <tr style="background-color: #f8f9fa;">
//                   <td style="border: 1px solid #dee2e6; padding: 3px; font-weight: bold;">
//                     ${voucherValid 
//                       ? `Original Total: AUD ${originalTotal.toLocaleString()}<br>
//                          Discounted Total: AUD ${discountedTotal.toLocaleString()}`
//                       : `Total: AUD ${discountedTotal.toLocaleString()}`
//                     }
//                   </td>
//                 </tr>
//               </table>
//             </div>
            
//             <div style="flex: 1;">
//               <h4 style="margin: 5px 0;">Payment Information</h4>
//               <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 9pt;">
//                 <tr style="background-color: #f8f9fa;">
//                   <th style="border: 1px solid #dee2e6; padding: 3px; text-align: left; width: 30%;">Field</th>
//                   <th style="border: 1px solid #dee2e6; padding: 3px; text-align: left;">Details</th>
//                 </tr>
//                 <tr>
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">Bank</td>
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">OCBC NISP, BRANCH TEUKU UMAR DENPASAR BALI</td>
//                 </tr>
//                 <tr style="background-color: #f8f9fa;">
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">Account Name</td>
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">CV Naresy Indonesia</td>
//                 </tr>
//                 <tr>
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">Account Number</td>
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">160800014310</td>
//                 </tr>
//                 <tr style="background-color: #f8f9fa;">
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">Swift Code</td>
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">NISPIDJA</td>
//                 </tr>
//                 <tr>
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">Branch Code</td>
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">07160</td>
//                 </tr>
//                 <tr style="background-color: #f8f9fa;">
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">Bank Code</td>
//                   <td style="border: 1px solid #dee2e6; padding: 3px;">028</td>
//                 </tr>
//               </table>
//             </div>
//           </div>

//           <div style="flex: 1; margin-top: 15px;">
//             <p style="margin: 5px 0; font-weight: bold;">Notes:</p>
//             <div style="width: 100%; border: 1px solid #dee2e6; padding: 15px; min-height: 150px; margin-bottom: 10px; font-size: 9pt; background-color: #f8f9fa;">
//               ${formData.notes ? formData.notes.replace(/\n/g, '<br>') : ''}
//             </div>
//           </div>
//         </div>
  
//         <!-- Signature section yang selalu berada di bawah -->
//         <div style="flex: 0; margin-top: 30px; margin-bottom: 10px; font-size: 9pt;">
//           <div style="display: flex;">
//             <div style="flex: 1;">
//               <p style="margin: 0 0 5px 0;"><strong>Place and Date:</strong></p>
//               <div style="border-bottom: 1px solid #000; width: 80%;"></div>
//             </div>
//             <div style="flex: 1; text-align: center;">
//               <p style="margin: 0 0 15px 0;"><strong>Signature:</strong></p><br /><br /><br />
//               <div style="border-bottom: 1px solid #000; width: 80%; margin: 0 auto;"></div>
//               <p style="margin: 5px 0 0 0;"><strong>${formData.fullName || ""}</strong><br>${formData.institution || ""}</p>
//             </div>
//           </div>
          
//           <p style="font-size: 8pt; text-align: center; margin: 10px 0 0 0;">
//             This is an official document from your NIEC World Education Festival 2025 registration. Generated on: ${new Date().toLocaleDateString()}
//           </p>
//         </div>
//       </div>
//     `;
  
//     document.body.appendChild(printableContent);
    
//     const fileName = `NIEC_Registration_${formData.fullName || 'Document'}.pdf`;
    
//     const options = {
//       margin: [5, 5, 5, 5],  // Reduced margins [top, right, bottom, left]
//       filename: fileName,
//       image: { type: 'jpeg', quality: 0.95 },
//       html2canvas: { scale: 2, useCORS: true },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };
    
//     html2pdf()
//       .from(printableContent)
//       .set(options)
//       .save()
//       .then(() => {
//         document.body.removeChild(printableContent);
//         console.log('PDF berhasil diunduh');
//       })
//       .catch(error => {
//         console.error('Terjadi kesalahan saat mengunduh PDF:', error);
//         if (document.body.contains(printableContent)) {
//           document.body.removeChild(printableContent);
//         }
//       });
//   };

//   return (
//       <>
//         <div style={{maxWidth: '630px'}} className="container">
//         <div className="title-form">
//             <h2 className="title" >Confirmation of Participant</h2>
//             <h2 className="title-2" >NIEC WORLD EDUCATION FESTIVAL 2025</h2>
//         </div>
//           <div className="Row" id="daftar">
//             <div className="col-lg-12 ">
//               <p style={{ color:"red", margin:'0px' }}>For the university/institution who gets 50% off, there will be no accommodation provided</p>
//               <form onSubmit={handleSubmit(onSubmit)} className="form">
//                 <div className="py-2">
//                     <input 
//                       {...register("fullName", { required: "Full Name is required" })} 
//                       type="text" 
//                       className={`form-control ${errors.fullName ? "is-invalid" : ""}`} 
//                       placeholder="Full Name" 
//                     />
//                     {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
//                 </div>

//                 <div className="py-2">
//                     <input 
//                       {...register("institution", { required: "Institution Name is required" })} 
//                       type="text" 
//                       className={`form-control ${errors.institution ? "is-invalid" : ""}`} 
//                       placeholder="Name of Institution" 
//                     />
//                     {errors.institution && <div className="invalid-feedback">{errors.institution.message}</div>}
//                 </div>

//                 <div className="py-2">
//                     <input 
//                       {...register("officialRepresentative", { required: "Official Representative Name is required" })} 
//                       type="text" 
//                       className={`form-control ${errors.officialRepresentative ? "is-invalid" : ""}`} 
//                       placeholder="Name of Official Representative" 
//                     />
//                     {errors.officialRepresentative && <div className="invalid-feedback">{errors.officialRepresentative.message}</div>}
//                 </div>

//                 <div className="py-2">
//                   <input 
//                     {...register("email", { 
//                       required: "Email is required", 
//                       pattern: { 
//                         value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 
//                         message: "Invalid email address" 
//                       } 
//                     })} 
//                     type="text" 
//                     className={`form-control ${errors.email ? "is-invalid" : ""}`} 
//                     placeholder="Email Address" 
//                   />
//                   {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
//                 </div>

//                 <div className="py-2">
//                   <Controller
//                     control={control}
//                     name="phone"
//                     rules={{ required: 'Phone Number is required' }}
//                     render={({ field: { ref, ...field } }) => (
//                       <PhoneInput
//                         {...field}
//                         inputExtraProps={{
//                           ref,
//                           required: true,
//                         }}
//                         country={"id"}
//                         countryCodeEditable={false}
//                         inputClass={`form-control ${errors.phone && 'is-invalid'}`}
//                         inputStyle={{width:'100%', height: '45px'}}
//                       />
//                     )}
//                   />
//                   {errors.phone?.message && (<div className="text-invalids text-danger">{errors.phone.message}</div>) }
//                 </div>
                
//                 <div className="bg-light p-3 mt-2">
//                   <p><strong>REGULAR PACKAGE (OFFLINE)</strong> </p>
//                   <div className="mx-0 px-0">
//                     <div className="row">
//                     <div className="row">
//                       <div className="col-lg-12">
//                         <div>
//                           <label className="label-offline">
//                             <input 
//                               type="checkbox" 
//                               checked={selectedPrice === "6000"}
//                               onChange={() => {
//                                 if (selectedPrice === "6000") {
//                                   setValue("price", "");
//                                   setShowCities(false);
//                                 } else {
//                                   setValue("price", "6000");
//                                 }
//                               }}
//                             /> AUD 6000 / 6 city <br />
//                             <input 
//                               type="checkbox" 
//                               checked={selectedPrice === "1250"}
//                               onChange={() => {
//                                 if (selectedPrice === "1250") {
//                                   setValue("price", "");
//                                   setShowCities(false);
//                                 } else {
//                                   setValue("price", "1250");
//                                 }
//                               }}
//                             /> AUD 1250 / city <br />
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                     </div>
//                     {showCities && (
//                       <div className="row">
//                         <div className="col-lg-12">
//                           <div>
//                             <span><strong>Choose the name of the city:</strong></span>
//                             <div className="city-column mt-1">
//                               {selectedPrice === "6000" ? (
//                                 <>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Medan <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Thursday, 26 June 2025)</i></span></label>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Jakarta <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Saturday, 28 June 2025)</i></span></label>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Yogyakarta <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Sunday, 29 June 2025)</i></span></label>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Surabaya <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Thursday, 03 July 2025)</i></span></label>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Denpasar <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Saturday, 05 July 2025)</i></span></label>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Makassar <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Friday, 04 July 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("selectedCities")} type="checkbox" value="Bandung" /> Bandung (AUD 500) <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Sunday, 29 June 2025)</i></span></label>
//                                 </>
//                               ) : (
//                                 <>
//                                   <label className="m-0"><input {...register("selectedCities")} type="checkbox" value="Medan" /> Medan <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Thursday, 26 June 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("selectedCities")} type="checkbox" value="Jakarta" /> Jakarta <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Saturday, 28 June 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("selectedCities")} type="checkbox" value="Yogyakarta" /> Yogyakarta <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Sunday, 29 June 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("selectedCities")} type="checkbox" value="Surabaya" /> Surabaya <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Thursday, 03 July 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("selectedCities")} type="checkbox" value="Denpasar" /> Denpasar <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Saturday, 05 July 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("selectedCities")} type="checkbox" value="Makassar" /> Makassar <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Friday, 04 July 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("selectedCities")} type="checkbox" value="Bandung" /> Bandung (AUD 500) <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Sunday, 29 June 2025)</i></span></label>
//                                 </>
//                               )}
//                             </div>
//                           </div>    
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="bg-light p-3 mt-2">
//                   <p><strong>TRIAL PACKAGE (OFFLINE)</strong></p>
//                   <div className="mx-0 px-0">
//                     <div className="row">
//                       <div className="col-lg-12">
//                         <div>
//                           <label className="label-offline">
//                             <input 
//                               type="checkbox" 
//                               checked={selectedPriceTrial === "4200"}
//                               onChange={() => {
//                                 if (selectedPriceTrial === "4200") {
//                                   setValue("price_trial", "");
//                                   setShowTrialCities(false);
//                                 } else {
//                                   setValue("price_trial", "4200");
//                                 }
//                               }}
//                             /> AUD 4200 / 6 city <br />
//                             <input 
//                               type="checkbox" 
//                               checked={selectedPriceTrial === "1000"}
//                               onChange={() => {
//                                 if (selectedPriceTrial === "1000") {
//                                   setValue("price_trial", "");
//                                   setShowTrialCities(false);
//                                 } else {
//                                   setValue("price_trial", "1000");
//                                 }
//                               }}
//                             /> AUD 1000 / city <br />
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                     {showTrialCities && (
//                       <div className="row">
//                         <div className="col-lg-12">
//                           <div>
//                             <span><strong>Choose the name of the city:</strong></span>
//                             <div className="city-column mt-1">
//                               {selectedPriceTrial === "4200" ? (
//                                 <>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Medan <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Thursday, 26 June 2025)</i></span></label>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Jakarta <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Saturday, 28 June 2025)</i></span></label>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Yogyakarta <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Sunday, 29 June 2025)</i></span></label>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Surabaya <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Thursday, 03 July 2025)</i></span></label>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Denpasar <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Saturday, 05 July 2025)</i></span></label>
//                                   <label className="m-0"><input type="checkbox" checked disabled /> Makassar <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Friday, 04 July 2025)</i></span></label>
//                                 </>
//                               ) : (
//                                 <>
//                                   <label className="m-0"><input {...register("trialSelectedCities")} type="checkbox" value="Medan" /> Medan <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Thursday, 26 June 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("trialSelectedCities")} type="checkbox" value="Jakarta" /> Jakarta <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Saturday, 28 June 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("trialSelectedCities")} type="checkbox" value="Yogyakarta" /> Yogyakarta <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Sunday, 29 June 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("trialSelectedCities")} type="checkbox" value="Surabaya" /> Surabaya <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Thursday, 03 July 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("trialSelectedCities")} type="checkbox" value="Denpasar" /> Denpasar <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Saturday, 05 July 2025)</i></span></label>
//                                   <label className="m-0"><input {...register("trialSelectedCities")} type="checkbox" value="Makassar" /> Makassar <span><i style={{ fontSize:'12px', fontWeight:'bold', color:'gray' }}>(Friday, 04 July 2025)</i></span></label>
//                                 </>
//                               )}
//                             </div>
//                           </div>    
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="bg-light p-3 mt-2">
//                     <div className="d-flex">
//                         <div>
//                             <p><strong>PLATINUM PARTNER</strong></p>
//                             <div>
//                                 <label>
//                                     <input {...register("price_platinum")} type="checkbox" value="13500"/> AUD 13500<br />
//                                 </label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="bg-light p-3 mt-2 rounded">
//                     <div className="d-flex flex-column">
//                         <p><strong>SCHEDULE</strong></p>
//                         <div className="d-flex justify-content-between">
//                             <label className="d-flex align-items-center">
//                               <input {...register("schedule", { required: "Please select a schedule" })} type="radio" value="JUN 2025" style={{ marginRight: '8px' }} /> JUN 2025
//                             </label>
//                             <label className="d-flex align-items-center">
//                                 <input {...register("schedule")} type="radio" value="OCT 2025" style={{ marginRight: '8px' }} /> OCT 2025
//                             </label>
//                             <label className="d-flex align-items-center">
//                                 <input {...register("schedule")} type="radio" value="FEB 2026" style={{ marginRight: '8px' }} /> FEB 2026
//                             </label>
//                         </div>
//                         {errors.schedule && <div className="text-danger">{errors.schedule.message}
//                       </div>}
//                     </div>
//                 </div>
//                 <div className="bg-light p-3 mt-2 rounded">
//                     <div className="d-flex flex-column">
//                         <p><strong>NOTES</strong></p>
//                         <textarea 
//                             {...register("notes")} 
//                             className="form-control" 
//                             rows="4"
//                             placeholder="Enter your notes here">
//                         </textarea>
//                     </div>
//                 </div>
//                 <div className="bg-light p-3 mt-2 rounded">
//                     <div className="d-flex flex-column">
//                       <p><strong>TOTAL PRICE</strong></p>
//                       <div className="d-flex flex-column">
//                           <div className="d-flex align-items-center">
//                             {voucherValid && (
//                                 <h3 className="d-inline-block mr-3" style={{
//                                 textDecoration: 'line-through', 
//                                 color: 'gray', 
//                                 marginRight: '1rem'
//                                 }}> 
//                                 AUD {originalTotal.toLocaleString()}
//                                 </h3>
//                             )}
//                             <h3 className="d-inline-block text-danger">AUD {discountedTotal.toLocaleString()}</h3>
//                           </div>
//                           <div className="text-muted">
//                             <p><strong>Order Details:</strong></p>
//                             {priceDetails.map((detail, index) => (
//                                 <p key={index} className="mb-1">{detail}</p>
//                             ))}
//                           </div>
//                       </div>
//                     </div>

//                     <div className="py-2">
//                     <div className="d-flex">
//                       <input {...register("voucherCode")} type="text" className="form-control mr-2" placeholder="Enter Voucher Code" /> <br />
//                       <button type="button" className="btn-danger" onClick={validateVoucher}>Apply Voucher</button>
//                     </div>
//                     <label>
//                       <input 
//                         {...register("confirm", { required: "You must confirm joining the festival" })} 
//                         type="checkbox" 
//                         value="yes" 
//                         style={{ marginRight: '8px', marginTop:'20px' }} 
//                       />
//                       We Confirm to Join at Education Festival 2025
//                     </label>
//                     {errors.confirm && <div className="text-danger">{errors.confirm.message}</div>}
//                   </div>
//             </div>

//             {confirmCheckbox === "yes" && (
//               <div className="bg-light p-3 mt-2 rounded">
//                 <div className="d-flex flex-column">
//                   <p><strong>FORMAL STATEMENT OF COMMITMENT</strong></p>
//                   <div className="d-flex flex-column">
//                     <button 
//                       type="button" 
//                       className="btn btn-success mt-2"
//                       onClick={generatePDF}
//                     >
//                       Download PDF
//                     </button>

//                     <div className="mt-3">
//                       <label htmlFor="signedDocument" className="form-label">Upload Signed Document <span className="text-danger">(*)</span></label>
//                       <input 
//                         {...register("signedDocument", { required: "Please upload the signed commitment document here." })}
//                         type="file" 
//                         className="form-control" 
//                         id="signedDocument"
//                         aria-describedby="fileHelp"
//                       />
//                       {errors.signedDocument && <div className="text-danger">{errors.signedDocument.message}</div>}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="bg-light p-3 mt-2 rounded">
//               <div className="d-flex flex-column">
//                 <p><strong>Free Invitation for Joining the NIEC Appreciation Night, Harris Hotel Cokroaminoto Bali, on (Sunday, 6 July 2025), at 18.00 - 21.00 Bali Time</strong></p>
//                 <label>
//                   <input {...register("invitation", { required: "Please select an invitation option" })} type="radio" value="1" style={{ marginRight: '8px' }} /> YES
//                 </label>
//                 <label>
//                   <input {...register("invitation", { required: "Please select an invitation option" })} type="radio" value="0" style={{ marginRight: '8px' }} /> NO
//                 </label>
//                 {errors.invitation && <div className="text-danger">{errors.invitation.message}</div>}

//                 {watch('invitation') === '1' && (
//                 <div>
//                   <div className="d-flex justify-content-end mb-2">
//                     <button type="button" className="btn btn-danger" style={{ fontSize:'20px', padding:'5px 10px', borderRadius:'5px' }} onClick={addGuestField}>+</button>
//                   </div>
                  
//                   {guestFields.map((field, index) => (
//                     <React.Fragment key={field.id}>
//                         {index > 0 && (
//                           <div className="guest-divider my-4">
//                             <hr className="border-2 border-secondary" />
//                             <div className="text-center bg-light position-relative" style={{ marginTop: '-18px' }}>
//                               <span className="px-3 text-secondary">Guest {index + 1}</span>
//                             </div>
//                           </div>
//                         )}

//                         <div className="card-invitation mb-4 position-relative p-3 border rounded bg-white">
//                           <input 
//                             {...register(`guests[${index}].fullName`, { required: "Guest Full Name is required" })} 
//                             type="text" 
//                             className={`form-control mb-2 ${errors.guests?.[index]?.fullName ? "is-invalid" : ""}`} 
//                             placeholder="Full Name" 
//                           />
//                           {errors.guests?.[index]?.fullName && <div className="invalid-feedback">{errors.guests[index].fullName.message}</div>}
                          
//                           <input 
//                             {...register(`guests[${index}].email`, { 
//                               required: "Guest Email is required", 
//                               pattern: { 
//                                 value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 
//                                 message: "Invalid email address" 
//                               } 
//                             })} 
//                             type="text" 
//                             className={`form-control mb-2 ${errors.guests?.[index]?.email ? "is-invalid" : ""}`} 
//                             placeholder="Email Address" 
//                           />
//                           {errors.guests?.[index]?.email && <div className="invalid-feedback">{errors.guests[index].email.message}</div>}
                          
//                           <Controller
//                             control={control}
//                             name={`guests[${index}].phone`}
//                             rules={{ required: 'Guest Phone Number is required' }}
//                             render={({ field: { ref, ...field } }) => (
//                               <PhoneInput
//                                 {...field}
//                                 inputExtraProps={{
//                                   ref,
//                                   required: true,
//                                 }}
//                                 country={"id"}
//                                 countryCodeEditable={false}
//                                 inputClass={`form-control ${errors.guests?.[index]?.phone && 'is-invalid'}`}
//                                 inputStyle={{width:'100%', height: '45px'}}
//                                 className="mb-2"
//                               />
//                             )}
//                           />
//                           {errors.guests?.[index]?.phone && <div className="text-danger">{errors.guests[index].phone.message}</div>}
                          
//                           <input 
//                             {...register(`guests[${index}].institution`, { required: "Guest Institution Name is required" })} 
//                             type="text" 
//                             className={`form-control mb-2 ${errors.guests?.[index]?.institution ? "is-invalid" : ""}`} 
//                             placeholder="Name of Institution" 
//                           />
//                           {errors.guests?.[index]?.institution && <div className="invalid-feedback">{errors.guests[index].institution.message}</div>}
                          
//                           {guestFields.length > 1 && (
//                           <button 
//                             type="button" 
//                             className="btn-sm btn-outline-danger position-absolute" 
//                             style={{ top: '10px', right: '10px',  }} 
//                             onClick={() => removeGuestField(field.id)}
//                           >
//                             &times;
//                           </button>
//                         )}
//                       </div>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="d-flex justify-content-center">
//             <button type="submit" className="btn3 btn-danger btn-lg button1" disabled={btnLoading}>
//               {btnLoading ? "Loading..." : "Submit"}
//               </button>
//             </div>
//             </form>
//           </div>
          
//           <div className="mb-5">
//             <p>Participant fee must be transferred to: <br />
//               <strong>OCBC NISP, BRANCH TEUKU UMAR DENPASAR BALI</strong>
//             </p>
//             <p>Account Name: CV Naresy Indonesia <br />
//                 Account Number :160800014310 <br />
//                 Swift Code: NISPIDJA <br />
//                 Branch Code: 07160 <br />
//                 Bank Code: 028
//             </p>
//             </div>
//           </div>
//         </div>
//       </>
//     );
// }

// export default FormConfirmationDiscount
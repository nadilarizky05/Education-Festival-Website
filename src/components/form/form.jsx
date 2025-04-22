// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import { Controller, useForm } from "react-hook-form";
// import PhoneInput from 'react-phone-input-2'
// import API_URL from '../API/index'
// import Swal from "sweetalert2";
// import { useSearchParams } from "react-router-dom";
// // import { Typeahead } from "react-bootstrap-typeahead";
// import "react-phone-input-2/lib/bootstrap.css";
// import '../form/form.css'

// const FormRegister = () => {
//   const {control, register, handleSubmit, formState: { errors } } = useForm();
//   const [kabkota, setKabKota] = useState([{ kabupaten: { id_kabkota: "", nama_kabkota: "" } }]);
//   const [provinsi, setProvinsi] = useState([{ id: "", province_name: "" }]);
//   const [sekolah, setSekolah] = useState([{ id_sekolah: "", nama_sekolah: "" }]);
//   const [jenjang, setJenjang] = useState([{ code_jenjang: "", jenjang_pendidikan: "" }]);
//   const [id_propinsi, setIdPropinsi] = useState("");
//   const [code_jenjang, setCodeJenjang] = useState("");
//   const [kode_sekolah, setCodeSekolah] = useState("");
//   const [btnLoading, setBtnLoading] = useState(false);

//   const [searchParams] = useSearchParams();
//   const ads = searchParams.get('source'); 

//   const typeaheadRef = useRef(null);

//   const clearTypeahead = () => {
//     typeaheadRef.current?.clear();
//   };

//   const onSubmit = async (data) => {
//     setBtnLoading(true);
//     data = { ...data, id_konten: API_URL.id_event, keterangan: "", sekolah: kode_sekolah, code_leads: ads };
//     try {
//       await API_URL.eventUrl.post("register", data);
//       Swal.fire({
//         title: "Registrasi Berhasil",
//         icon: "success",
//         text: "Anda telah mendaftar di event NIEC World Education Festival, cek email/spam anda untuk info selanjutnya",
//         confirmButtonColor: "#3085d6",
//       }).then(() => {
//         window.location.reload();
//       });
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setBtnLoading(false);
//     }
//   };

//   useEffect(() => {
//     getCityByEvent();
//     getProvinsi();
//     getJenjang();
//   }, []);

//   const getCityByEvent = async () => {
//     try {
//       const response = await API_URL.eventUrl.get(`world-education-festival/master-event/${API_URL.id_event}`);
//       setKabKota(response.data.data.event_lokasi);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getProvinsi = async () => {
//     try {
//       const response = await API_URL.baseUrl.get("master/provinces");
//       setProvinsi(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getJenjang = async () => {
//     try {
//       const response = await API_URL.baseUrl.get("master/jenjang");
//       setJenjang(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const pilihPropinsi = (e) => {
//     setIdPropinsi(e.target.value);
//     setCodeJenjang("");
//     clearTypeahead();
//   };

//   const pilihSekolahJenjang = async (e) => {
//     setCodeJenjang(e.target.value);
//     clearTypeahead();
//     try {
//       const response = await API_URL.baseUrl.get(`sekolah-indonesia?province_id=${id_propinsi}&jenjang=${e.target.value}`);
//       setSekolah(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const changeSekolah = (kode) => {
//     kode.length > 0 ? setCodeSekolah(kode[0].kode_sekolah) : setCodeSekolah("");
//   };

//   console.log(ads)

//   return (
//     <>

//       <div style={{maxWidth: '630px'}} className="container" id="daftar">
//       <div className="subscribe-area .area">
//           <h2>Form Pendaftaran</h2>
//       </div>
//         <div className="Row">
//           <div className="Col-lg-12">
//             <form onSubmit={handleSubmit(onSubmit)} className="form">
//               <div className="jarak">
//                 <select {...register("id_kabkota", { required: "Jadwal Wajib Dipilih" })} className={`form-control ${errors.id_kabkota ? "is-invalid" : ""}`}>
//                   <option value="">Pilih Jadwal</option>
//                   {kabkota.map((kab, i) => (
//                     <option key={i} value={kab.kabupaten.id_kabkota}>{kab.kabupaten.nama_kabkota}</option>
//                   ))}
//                 </select>
//                 {errors.id_kabkota && <div className="invalid-feedback">{errors.id_kabkota.message}</div>}
//               </div>

//               <div className="jarak">
//                 <input {...register("email", { required: "Email Wajib diisi", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: "Email tidak valid" } })} type="text" className={`form-control ${errors.email ? "is-invalid" : ""}`} placeholder="Email" />
//                 {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
//               </div>

//               <div className="jarak">
//                 <input {...register("name", { required: "Nama Lengkap Wajib Diisi" })} type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`} placeholder="Nama Lengkap" />
//                 {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
//               </div>

//               <div className="jarak">
//                 <Controller
//                   // style={{ border:'2px solid' }}
//                   control={control}
//                   name ="phone"
//                   rules={{ required: 'Nomor Whatsapp Wajib Diisi'}}
//                   render={({ field: { ref, ...field } }) => (
//                     <PhoneInput
//                       {...field}
//                       inputExtraProps={{
//                         ref,
//                         required: true,
//                       }}
//                         country={"id"}
//                         countryCodeEditable={false}
//                         inputClass={`form-control ${errors.source && 'is-invalid'}`}
//                         inputStyle={{width:'100%', height: '45px'}}
//                     />
//                   )}
//                 />
//                 {errors.phone?.message && (<div className="text-invalids">{errors.phone.message}</div>) }
//               </div>

//           {/* <div className="jarak">
//             <select className="form-control" onChange={pilihPropinsi}>
//               <option value="">Pilih Provinsi</option>
//               {provinsi.map((prov, i) => (
//                 <option key={i} value={prov.id}>{prov.province_name}</option>
//               ))}
//             </select>
//           </div> */}

//           {/* <div className="jarak">
//             <select className="form-control" value={code_jenjang} onChange={pilihSekolahJenjang}>
//               <option value="">Pilih Jenjang</option>
//               {jenjang.map((jen, i) => (
//                 <option key={i} value={jen.code_jenjang}>{jen.jenjang_pendidikan}</option>
//               ))}
//             </select>
//           </div> */}

//           {/* <div className="jarak">
//             <Typeahead
//               id="basic-typeahead"
//               labelKey="nama_sekolah"
//               options={sekolah}
//               onChange={changeSekolah}
//               placeholder="Pilih Sekolah"
//               ref={typeaheadRef}
//             />
//           </div> */}

//           {/* <div className="jarak">
//             <input {...register("phone", { required: true })} type="text" className={`form-control ${errors.phone ? "is-invalid" : ""}`} placeholder="Nomor Telepon" />
//             {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
//           </div> */}


//               {/* ============ PILIH JADWAL ============= */}
//               <div className='jarak'>
//                 <select {...register("source", { required: true })} className={`form-control ${errors.source && 'is-invalid'}`} >
//                   <option value=""> Pilih Sumber Informasi </option>
//                   <option value="Instagram"> Instagram </option>
//                   <option value="Facebook"> Facebook </option>
//                   <option value="TikTok"> TikTok </option>
//                   <option value="Sekolah"> Sekolah </option>
//                   <option value="Konsultan NIEC"> Konsultan NIEC </option>
//                 </select>
//               </div>

//               {/* ============ KODE REFERRAL============= */}
//               <div className="jarak">
//                 <input {...register("kode_referal")}  type="text" className="form-control" id="kode" placeholder="Hanya diisi jika mendapat kode undangan dari Ambassador"/>
//               </div>

//               <div className="d-flex justify-content-center">
//                 <button type="submit" className="btn3 btn-lg button1" disabled={btnLoading} style={{ backgroundColor:'#f6048f' }}>
//                   {btnLoading ? "Loading..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FormRegister;

import React from 'react'

const form = () => {
  return (
    <div>Ini form</div>
  )
}

export default form
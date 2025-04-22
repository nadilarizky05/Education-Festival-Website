// import React, {Component} from 'react';
// import API_URL from "../API";
// import { useParams } from 'react-router-dom';
// import {Container, Row, Col} from "reactstrap";
// import Swal from "sweetalert2";
// import '../attendance/attendance.css'
// import Logo from '../Assets/Logo_PrioritasMember-07.png'

// const withRouterParams = (Component) => {
//     return(props) => {
//         const params = useParams()
//         return <Component {...params} params={params} />
//     }
// }

// class Attendance extends Component {
//     constructor() {
//         super();
//         this.state = {
//             id_event: API_URL.id_event,
//             code_register: '',
//             height:window.innerHeight,
//             register_city_all: []
//         }
//         this.setFullScreen.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     componentDidMount() {
//         window.addEventListener('resize', this.setFullScreen);
//     }

//     componenWillUnmount() {
//         window.removeEventListener('resize', this.setFullScreen);
//     }

//     setFullScreen = () => {
//         var size = document.getElementById('home-fullscreen')
//         if(size.clientHeight>0) {
//             var windowHeight = window.innerHeight;
//             this.setState({
//                 height: windowHeight,
//                 width: window.innerWidth
//             });
//         }
//     }

//     handleChange(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit(event) {
//         let formData = new FormData()

//         formData.append('id_event', this.state.id_event)
//         formData.append('code_register', this.state.code_register)
//         formData.append('status', 1)

//         API_URL.eventUrl.post('world-education-festival/attandance', formData)
//         .then(response => {
//             response.data.message === 'Attandance Member' ?
//             Swal.fire({
//                 imageUrl: Logo,
//                 imageWidth: 450,
//                 imageHeight: 150,
//                 imageAlt: "Logo Prioritas Member",
//                 title: "Register Berhasil"
//             }).then((result) => {
//                 if(result.isConfirmed) {
//                     window.location.reload();
//                 }
//             })
//             :
//             Swal.fire({
//                 title: "Register Berhasil",
//                 icon: 'success',
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     window.location.reload();
//                 }
//             })
//         })
//         .catch(error => {
//             Swal.fire({
//                 title: "Register Gagal",
//                 icon: 'error',
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     window.location.reload();
//                 }
//             })
//         })

//         event.preventDefault();
//     }

//     render() {
//         return (
//             <div className="bg-header-banner">
//                 <div>
//                     <Container>
//                         <div className="home-fullscreen" id="home-fullscreen" style={{height : this.state.height+"px"}}>
//                             <div className="full-screen">
//                             <div className="home-wrapper home-wrapper-alt">
//                                     <form onSubmit={this.handleSubmit}>
//                                         <Row className='justify-content-center'>
//                                             <Col sm='6'>
//                                                 <h1 className='font-helloween py-3'>Attendance</h1>
//                                             </Col>
//                                         </Row>
//                                         <Row className='justify-content-center'>
//                                             <Col sm='6'>
//                                                 <input className='form-control' type="text" name="code_register" autoFocus="autoFocus" onChange={(e) => this.handleChange(e)} />
//                                             </Col>
//                                         </Row>
//                                         <Row className='justify-content-center'>
//                                             <Col sm='2' className='my-3 d-flex justify-content-center'>
//                                                 <button className="btn btn-custom font-helloween-h2" type="submit">ENTER</button>
//                                             </Col>
//                                         </Row>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </Container>
//                 </div>
//             </div>
//         )
//     }

// }

// export default withRouterParams(Attendance);
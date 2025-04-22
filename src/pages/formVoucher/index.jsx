import React from 'react';
import '../FormConfirmation/FormConfirmation.css'
import Navbar from '../Navbar/navbar';
import FormConfirmationDiscount from '../FormConfirmationDiscount/FormConfirmationDiscount.jsx'
import Footer from '../Footer/footer';

const Index = () => {
  return (
    <>
        <Navbar />
        <FormConfirmationDiscount />
        <Footer />
    </>
  )
}

export default Index
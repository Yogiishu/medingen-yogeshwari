import { Box } from '@mui/material'
import  React from 'react'
import Header from './Components/Header/Header'
import MedicineDetails from './Components/ProductLists/MedicineDetails'
import ProductDataList2 from './Components/ProductLists/ProductDataList2'
import FAQSection from './Components/FAQSection/FAQSection'
import RatingsReview from './Components/Rating&Review/RatingReview'
import Footer from './Components/Footer/Footer'
function App() {
 
  return (
    <>
      <Box sx={{backgroundColor:'#fff'}}>
      <Header/>
      <MedicineDetails />
      <ProductDataList2/>
      <FAQSection/>
      <RatingsReview/>
      <Footer/>
      </Box>
    </>
  )
}

export default App

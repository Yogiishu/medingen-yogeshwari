import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Card, Grid } from "@mui/material";
import axios from 'axios';
const medicineData = [
  {
    name: "DOLOWIN PLUS TAB",
    company: "Micro Labs Limited",
    composition: "Paracetamol 650",
    price: "Rs. 34",
    discount: "75% less Price",
    imgSrc: "https://via.placeholder.com/60", // Replace with actual image URL
  },
];

function ProductDataList1() {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('http://localhost:5000/medicines')
        .then(response => {
          console.log(response.data);
            setMedicines(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching medicines:', error);
            setLoading(false);
        });
}, []);

  return (
    <div>
      {" "}
     <Grid container spacing={2}>
        {medicines
          .map((medicine, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  boxShadow: "none",
                  border: "1px solid #eee",
                  borderRadius: 3,
                }}
              >
                {/* Medicine Image */}
                <Box
                  component="img"
                  src={"https://m.media-amazon.com/images/I/91PYiM15cDL.jpg"}
                  alt="Medicine"
                  sx={{ width: 50, height: 50, marginRight: 2 }}
                />

                {/* Medicine Details */}
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" fontWeight="bold">
                    {medicine.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {medicine.company}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {medicine.generic_name}
                  </Typography>

                  {/* Price & Discount */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      sx={{ marginRight: 1 }}
                    >
                      {medicine.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        backgroundColor: "#DFFFD6",
                        color: "green",
                        padding: "3px 8px",
                        borderRadius: "10px",
                        fontSize: "12px",
                      }}
                    >
                      {medicine.discount_price}
                    </Typography>
                  </Box>
                </Box>

                {/* Add Button */}
                <Button
                  variant="outlined"
                  color="dark"
                  sx={{
                    borderRadius: "20px",
                    padding: "5px 15px",
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  + Add
                </Button>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default ProductDataList1;

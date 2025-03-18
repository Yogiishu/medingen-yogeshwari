import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import axios from "axios";
// import "./ProductDataList2.css";

const medicines = [
  {
    name: "Dolo 650 mg",
    manufacturer: "MICRO LABS LIMITED",
    genericName: "Paracetamol 650 mg",
    avgPrice: "Rs 120",
    price: "Rs. 34",
    discount: "Original Price",
    composition: "CH02 || CH02",
    rating: 4.0,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dolo 650 mg",
    manufacturer: "MICRO LABS LIMITED",
    genericName: "Paracetamol 650 mg",
    avgPrice: "Rs 120",
    price: "Rs. 34",
    discount: "15% Off",
    composition: "CH02 || CH02",
    rating: 4.0,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dolo 650 mg",
    manufacturer: "MICRO LABS LIMITED",
    genericName: "Paracetamol 650 mg",
    avgPrice: "Rs 120",
    price: "Rs. 34",
    discount: "15% Off",
    composition: "CH02 || CH02",
    rating: 4.0,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dolo 650 mg",
    manufacturer: "MICRO LABS LIMITED",
    genericName: "Paracetamol 650 mg",
    avgPrice: "Rs 120",
    price: "Rs. 34",
    discount: "15% Off",
    composition: "CH02 || CH02",
    rating: 4.0,
    image: "https://via.placeholder.com/150",
  },
];

const MedicineComparison = () => {
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
    <Box sx={{ padding:"20px 45px",backgroundColor:"#fff"}}>
      <Typography variant="h5" fontWeight="bold" textAlign="left" color="#000">
        Compare medicine
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ marginBottom: 2 }}
        textAlign="left"
      >
        Compare medicines price composition to make your decision
      </Typography>
      <Grid container spacing={3}>
        {medicines.slice(0, 4).map((med, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: "12px" }}>
              <CardMedia
                component="img"
                height="140"
                image={med.image_url}
                alt={med.name}
                sx={{ padding: "10px", borderRadius: "12px" }}
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h6" fontWeight="bold">
                  {med.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  By {med.manufacturer}
                </Typography>
                <Typography variant="body2" fontWeight="bold" paddingTop={2}>
                  Generic Name:
                </Typography>
                <Typography variant="body2">{med.generic_name}</Typography>
                <Typography
                  variant="body2"
                  paddingTop={1}
                  fontWeight="bold"
                  mt={1}
                >
                  Average Price:
                </Typography>
                <Typography variant="body2">{med.price}</Typography>
                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    borderRadius: "5px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: '8px 15px',
                    marginY: 2,
                  }}
                >
                  <Typography variant="body2">original Price</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {med.discount_price}
                  </Typography>
                </Box>
                <Divider />

                <Typography variant="body2" fontWeight="bold" mt={2}>
                  Chemical formation:
                </Typography>
                <Typography variant="body2">{med.chemical_formulation}</Typography>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2" sx={{ marginLeft: "auto" }}>
                    Ratings & Review
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} sx={{ color: "gold" }} />
                    ))}
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ backgroundColor: "#f5f5f5", borderRadius: "5px",padding:"4px 12px",ml:2 }}
                    >
                     {(4).toFixed(1)}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" mt={1}>
                  "The medicine is good, it is a bit costly when compared with
                  the exact generic medicine."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MedicineComparison;

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Rating,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import axios from "axios";

const reviews = [
  {
    rating: 4,
    text: "The medicine is good, it is a bit costly when compared with the exact generic medicine",
  },
  {
    rating: 3,
    text: "The medicine is good, it is a bit costly when compared with the exact generic medicine",
  },
  {
    rating: 5,
    text: "The medicine is good, it is a bit costly when compared with the exact generic medicine",
  },
];

const RatingsReview = () => {
   const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      axios.get('http://localhost:5000/reviews/1')
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
    <Box sx={{ padding: "20px 48px" }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ color: "#000" }}
        gutterBottom
      >
        Ratings & Review
      </Typography>
      {!loading&&medicines.map((review, index) => (
        <Box key={index}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Rating value={review.rating} readOnly precision={0.5} />
            <Typography
              variant="body2"
              sx={{
                ml: 1,
                bgcolor: "#f0f0f0",
                color: "#000",
                px: 1,
                borderRadius: 1,
              }}
            >
              {parseInt(review?.rating).toFixed(1)}
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: "#000", mb: 2 }}>
            "{review.review_text}"
          </Typography>
        </Box>
      ))}

      <Typography variant="h6" fontWeight="bold" sx={{ color: "#000" }} mt={4}>
        Disclaimer:
      </Typography>
      <Typography variant="body2" color="textSecondary">
        The contents here are for informational purposes only and not intended
        to be a substitute for professional medical advice, diagnosis, or
        treatment. Please seek the advice of a physician or other qualified
        health provider with any questions you may have regarding a medical
        condition...
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          marginY: "60px",
          color: "#000",
        }}
      >
        {" "}
        <Grid container spacing={4} justifyContent="center">
          {/* Safe and Secured Payment */}
          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <PaymentIcon sx={{ fontSize: 50, color: "#007BFF" }} />
            <Typography variant="body1" fontWeight="bold" mt={1}>
              Safe and Secured Payment
            </Typography>
          </Grid>

          {/* 100% Authentic Products */}
          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <VerifiedUserIcon sx={{ fontSize: 50, color: "#28A745" }} />
            <Typography variant="body1" fontWeight="bold" mt={1}>
              100% Authentic Products
            </Typography>
          </Grid>

          {/* 6 Lac+ Happy Customers */}
          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <ThumbUpIcon sx={{ fontSize: 50, color: "#FFC107" }} />
            <Typography variant="body1" fontWeight="bold" mt={1}>
              6 lac + Happy Customers
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RatingsReview;

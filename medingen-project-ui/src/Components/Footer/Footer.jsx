import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import logo from "../../assets/migfulllogo.png";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Logo & Description */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ margin: "8px 6px 0px 0px",bgcolor:"#fff",width:55 }}>
              <img src={logo} alt="Preview" width="50px" />
            </Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Medingen
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 300 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
              urna et leo rhoncus mattis. Maecenas vel scelerisque nunc.
            </Typography>
          </Grid>

          {/* Website Links */}
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Website
            </Typography>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Features
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              How it works
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Whats our customers say?
            </Link>
          </Grid>

          {/* Follow Us Links */}
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Instagram
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Facebook
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Twitter
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Youtube
            </Link>
          </Grid>

          {/* More Links */}
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              More
            </Typography>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Help Center
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Become Member
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Events
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Terms & Conditions
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ textAlign: "center", py: 2, backgroundColor: "#111" }}>
        <Typography variant="body2">
          @2024 Medingen. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

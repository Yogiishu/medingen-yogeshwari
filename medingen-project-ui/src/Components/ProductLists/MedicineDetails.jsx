import React from "react";
import {
  Box,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ProductDataList1 from "./ProductDataList1";


const MedicineDetails = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#fff" }}>
      {/* Header */}
      <Typography variant="h6" sx={{ color: "#000",fontSize:16,fontWeight:600,paddingBottom:2 }} gutterBottom>
        <ArrowBackIosIcon sx={{ fontSize: 16 }} />
        <span > Paracetamol/Acetaminophen</span>
      
      </Typography>

      {/* Medicine Details */}
      <Stack direction="row" gap={3}>
        <Box sx={{ flex: 2 }}>
          <Box
            sx={{
              flex: 2,
              backgroundColor: "#f9fafb",
              mb: 1,
              borderRadius: 2,
              p: 2,
            }}
          >
            <Typography sx={{ color: "#000", textAlign: "center",fontWeight:600 }}>
              Medicine Details
            </Typography>
          </Box>
          <Box
            sx={{ flex: 2, backgroundColor: "#f9fafb", p: 3, borderRadius: 2 }}
          >
            <Typography variant="h5" fontWeight={600} gutterBottom color="#333">
              About UDILIV 300MG TABLET 15'S
            </Typography>
            <Typography variant="body1" color="#6D6D6D" gutterBottom>
            UDILIV 300MG TABLET 15'S (UDCA) is a naturally occurring bile acid derived from bear bile, and it is also produced synthetically. It has been used for several decades as a therapeutic agent to manage various liver disorders. UDCA is primarily known for its hepatoprotective properties and is used in the treatment of gallstones, primary biliary cholangitis (PBC), and other cholestatic liver conditions. This bile acid works by reducing cholesterol absorption, improving bile flow, and exerting anti-inflammatory effects, thereby promoting liver health.
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" fontWeight={600} gutterBottom color="#333">
              Uses of UDILIV 300MG TABLET 15'S
            </Typography>
            <Typography variant="body1" color="#6D6D6D">
              • Helps in dissolving gallstones.
              <br />
              • Is used in the treatment of primary biliary cholangitis (PBC).
              <br />
              • Aids in managing other cholestatic liver disorders.
              <br />
              • Can be used to prevent gallstone formation.
              <br />• Assists in improving liver function.
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" fontWeight={600} gutterBottom color="#333">
              How UDILIV 300MG TABLET 15'S Works
            </Typography>
            <Typography variant="body1" color="#6D6D6D">
              <strong>Dosage for children:</strong> The dosage of UDILIV 300MG TABLET 15'S for children depends on their body weight and the specific liver disorder being treated. It is typically prescribed by a pediatrician or gastroenterologist who will determine the appropriate dosage.
            </Typography>
            <Typography variant="body1" color="#6D6D6D" sx={{ mt: 1 }}>
              <strong>Dosage for adults:</strong>  The recommended dosage of UDILIV 300MG TABLET 15'S for adults varies depending on the indication. For gallstone dissolution, the usual dose is 8-10 mg/kg body weight per day, divided into two to three doses. In the treatment of primary biliary cholangitis (PBC), the typical dose ranges from 13-15 mg/kg body weight per day, also divided into multiple doses. However, dosages may differ based on individual patient factors, and it is essential to follow the specific instructions provided by a healthcare professional.


            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" fontWeight={600} gutterBottom color="#333">
              Side Effects Of UDILIV 300MG TABLET 15'S
            </Typography>
            <Typography variant="body1" color="#6D6D6D">
              • Diarrhea
              <br />
              • Abdominal discomfort
              <br />
              • Nausea
              <br />
              • Vomiting
              <br />• Hair loss (rare)
            </Typography>
          </Box>
        </Box>

        {/* Generic Medicine Alternative */}
        <Box sx={{ flex: 1, backgroundColor: "#fff", p: 3, borderRadius: 2 }}>
          <Typography fontWeight={600} pb={1} gutterBottom color="#333">
            Generic Medicine Alternative
          </Typography>

          <ProductDataList1/>
          {/* {[...Array(5)].map((_, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{ mb: 2, borderRadius: 2, backgroundColor: "#f9fafb" }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="body1" fontWeight={600} color="#333">
                    DOLOWIN PLUS TAB
                  </Typography>
                  <Typography variant="body2" color="#6D6D6D">
                    Micro Labs Limited
                  </Typography>
                  <Typography variant="body2" color="#6D6D6D">
                    Paracetamol 650
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#4CAF50", fontWeight: 600 }}
                  >
                    Rs. 34{" "}
                    <span style={{ fontSize: "0.8rem", color: "#6D6D6D" }}>
                      {" "}
                      7.5% Less Price
                    </span>
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#1976D2",
                    color: "#FFFFFF",
                    "&:hover": { backgroundColor: "#125A9E" },
                  }}
                >
                  + Add
                </Button>
              </CardContent>
            </Card>
          ))} */}
         
        </Box>
      </Stack>
    </Box>
  );
};

export default MedicineDetails;

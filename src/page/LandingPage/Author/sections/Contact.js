import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import MKTypography from "components/MKTypography";

import bgImage from "assets/images/contact.jpg";

function Contact() {
  return (
    <MKBox component="section" alignItems="center" display="flex" justifyContent="center">
      <Container>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Grid
            item
            sx={{
              backgroundImage: ({ palette: { gradients }, functions: { rgba, linearGradient } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.8),
                  rgba(gradients.dark.state, 0.8)
                )}, url(${bgImage})`,
              backgroundSize: "cover",
              borderRadius: 3,
              boxShadow: 10,
            }}
          >
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                <MKTypography variant="h3" color="white" mb={1}>
                  Contact Information
                </MKTypography>
                <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                  I am currently open to new roles and available immediately
                </MKTypography>
                <MKBox display="flex" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-phone" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    (+44) 07429068764
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-envelope" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    jack.buckley21@gmail.com
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-map-marker-alt" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    Cheshire, United Kingdom
                  </MKTypography>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;

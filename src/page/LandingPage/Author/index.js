import Card from "@mui/material/Card";

import MKBox from "components/MKBox";

import DefaultNavbar from "navigation/Navbars/DefaultNavbar";

import Profile from "page/LandingPage/Author/sections/Profile";
import Posts from "page/LandingPage/Author/sections/Projects";
import Contact from "page/LandingPage/Author/sections/Contact";
import Footer from "page/LandingPage/Author/sections/Footer";

import routes from "routes";

import bgImage from "assets/images/moon.jpg";

function Author() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.7),
                rgba(gradients.dark.state, 0.5)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile />
          <Posts />
        </Card>
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

export default Author;

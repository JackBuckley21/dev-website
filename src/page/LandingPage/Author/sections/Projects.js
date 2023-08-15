import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import TransparentBlogCard from "navigation/Cards/SiteCards/TransparentSiteCard";
import BackgroundBlogCard from "navigation/Cards/SiteCards/BackgroundSiteCard";
import post1 from "assets/images/speech-aid.png";
import post2 from "assets/images/wren.png";
import post3 from "assets/images/todo.png";
import post4 from "assets/images/background.jpeg";

function Places() {
  return (
    <MKBox component="section">
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check my latest projects
          </MKTypography>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Flutter/Dart Speech Aid Application"
              description="This Flutter/Dart speech aid application was created by myself for a family member who had a stroke. It helps people who have difficulty speaking to communicate more effectively by converting their speech to text. The application is still an ongoing personal project, but it has already helped my family to communicate better with us."
              action={{
                type: "external",
                route: "https://github.com/JackBuckley21/speech-aid",
                color: "info",
                label: "GitHub Repo",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Wren Kitchens Kitchen Planner"
              description="I have been helping with the development and maintenance of a web-based kitchen planner at Wren Kitchens for 3 years. The planner allowed users to create 2D and 3D plans of their kitchens, take accurate measurements, and generate automatic customer documentation."
              action={{
                type: "external",
                route: "https://www.wrenkitchens.com/kitchen-design/online-planner",
                color: "info",
                label: "Wren Kitchens",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="TypeScript Todo List"
              description="A simple and powerful todo list app built with TypeScript, React, and Node.js.
                           This app is perfect for anyone who wants to keep track of their tasks and stay organized. It is easy to use and has all the features you need to manage your todo list"
              action={{
                type: "external",
                route: "https://github.com/JackBuckley21/Todo-List",
                color: "info",
                label: "GitHub Repo",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Featured Skills"
              description=" •  JavaScript / TypeScript •  Node.js •  React.js •  Flutter / Dart •  Docker •  AdobeXD •  Figma"
              action={{
                type: "external",
                route:
                  "https://static1.squarespace.com/static/644ad3a9d519c85d720b8456/t/646e347cfd93bf1fd7d741df/1684943997346/Jack-Buckley-CV+%281%29.pdf",
                label: "Full Resume",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;

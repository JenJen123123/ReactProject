import { Box, Typography } from "@mui/material";

const About = () => {
    return (
        <Box>
            <Typography sx={{mb:3}} variant="h2">About</Typography>
            <Typography variant="button" display="block" gutterBottom>
                Welcome to my project, a cutting-edge web application built with React and enhanced by the sleek design principles of Material-UI. Our project represents a harmonious blend of powerful functionality and aesthetic elegance, providing users with an exceptional online experience.
            </Typography>

            <Typography variant="button" display="block" gutterBottom>
                <Typography sx={{ m: 3 }} variant="h6">My Mission</Typography>
                I driven by a commitment to deliver innovative solutions that meet the evolving needs of our users. Whether you're a casual visitor or a frequent user, my goal is to provide a seamless and enjoyable experience that goes beyond conventional web applications.
            </Typography>

            <Typography variant="button" display="block" gutterBottom>
                <Typography sx={{ mb: 3, mt:3 }} variant="h4">The Technology Behind the Magic</Typography>
                <Typography sx={{ m: 3 }} variant="h6">React: Powering Dynamic Interfaces</Typography>
                
                The project is built using React, a JavaScript library maintained by Facebook. React's component-based architecture allows us to create interactive and dynamic user interfaces with unparalleled efficiency. The virtual DOM ensures that updates are applied optimally, resulting in a smoother and faster user experience.
            </Typography>

            <Typography variant="button" display="block" gutterBottom>
                <Typography sx={{ m: 3 }} variant="h6">Material-UI: Elevating Design Standards</Typography>
                
                To achieve a modern and visually appealing design, we've embraced Material-UI, a React component library that implements Google's Material Design. This choice not only ensures a consistent and polished look across our application but also provides a rich set of customizable components that enhance the overall user interface.
            </Typography>

        </Box>
    )
};

export default About
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import { Typography, Container, Paper, Grid } from '@mui/material';

const ShowCard = () => {
    const { id: _id } = useParams();
    const [dataFromServer, setDataFromServer] = useState();
    useEffect(() => {
        axios
            .get("/cards/"+_id)
            .then(({ data }) => {
                setDataFromServer(data);
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);

    return (dataFromServer ?
    <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Grid container spacing={3}>
                {/* Left column for image */}
                <Grid item xs={12} md={4}>
                    <img src={dataFromServer.image ? dataFromServer.image.url : "no pic"} alt="Company Logo" style={{ width: '100%', height: 'auto' }} />
                </Grid>

                {/* Right column for information */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" gutterBottom>
                        {dataFromServer.title}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {dataFromServer.subtitle}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {dataFromServer.description}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Phone:</strong> {dataFromServer.phone}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Email:</strong> {dataFromServer.email}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Web:</strong> {dataFromServer.web}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Address:</strong> 
                            {" " + dataFromServer.address.country},
                            {" " + dataFromServer.address.city},
                            {" " + dataFromServer.address.street},
                            {" " + dataFromServer.address.houseNumber}.
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </Container> : "Loading"
    )
}

export default ShowCard;
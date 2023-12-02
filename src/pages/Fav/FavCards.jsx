import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import homePageNormalization from "../home/homePageNormalization";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useQueryParams from "../../hooks/useQueryParams";
import { useMemo } from "react";
import { Grid, Container } from "@mui/material";
import CardComponent from "../../components/CardComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";

const FavCards = () => {
    const [dataFromServer, setDataFromServer] = useState([]);
    const userData = useSelector((bigPie) => bigPie.authSlice.userData);
    const query = useQueryParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("/cards")
            .then(({ data }) => {
                if (userData) data = homePageNormalization(data, userData._id);
                console.log(data);
                setDataFromServer(data);
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);


    const filteredCards = useMemo(() => {
        if (!dataFromServer.length) return [];
        const filter = query.filter ? query.filter : "";
        return dataFromServer.filter((card) => card.title.startsWith(filter));
    }, [query, dataFromServer]);

    const handleDeleteCard = (_id) => {
        console.log("_id to delete (HomePage)", _id);
        setDataFromServer((dataFromServerCopy) =>
            dataFromServerCopy.filter((card) => card._id != _id)
        );
    };
    
    const handleEditCard = (_id) => {
        navigate(`${ROUTES.EDITCARD}/${_id}`);
    };

    const handleLikeCard = async (_id) => {
        try {
            const { data } = await axios.patch("/cards/" + _id, []);
            setDataFromServer((currentData) => {
                let item = currentData.find((card) => card._id == _id);
                if (item) {
                    item.likes = !item.likes;
                }
                return [...currentData];
            });
        } catch (err) {
            console.log("err", err);
        }
    };

    let likedCards = filteredCards.filter((card) => card.likes === true);;

    return (<Container>
        <Grid container spacing={2}>
            {likedCards.map((card) => (
                <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
                    <CardComponent
                        _id={card._id}
                        title={card.title}
                        subTitle={card.subtitle}
                        phone={card.phone}
                        address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
                        img={card.image.url}
                        alt={card.image.alt}
                        like={card.likes}
                        cardNumber={card.cardNumber}
                        onDeleteCard={handleDeleteCard}
                        onEditCard={handleEditCard}
                        onLikeCard={handleLikeCard}
                    />
                </Grid>
            ))}
        </Grid>
    </Container>)
}

export default FavCards
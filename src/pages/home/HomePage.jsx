import { useEffect, useMemo, useState } from "react";
import { Container, Grid } from "@mui/material";
import CardComponent from "../../components/CardComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import homePageNormalization from "./homePageNormalization";
import { useSelector } from "react-redux";
import useQueryParams from "../../hooks/useQueryParams";

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const query = useQueryParams();
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        data = homePageNormalization(data, userData ? userData._id : "");
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
      setDataFromServer((currentData)=> {
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

  const handleShowCard = (_id) => {
    navigate(`${ROUTES.CARD}/${_id}`);
};

return (
  <Container>
    <Grid container spacing={2}>
      {filteredCards.map((card) => (
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
            onShowCard={handleShowCard}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);
};

export default HomePage;

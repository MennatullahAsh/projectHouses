
import HouseCard from "../Cardes";
import { Grid } from "@mui/material";

const CardContainer = ({ houses }) => {
  return (
    
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {houses.map((house, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <HouseCard house={house} />
        </Grid>
      ))}
    </Grid>


  );
}

export default CardContainer;

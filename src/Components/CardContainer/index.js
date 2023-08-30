
import HouseCard from "../Cardes";
import { Grid } from "@mui/material";
import Footer from "../Footer"
const CardContainer = ({ houses }) => {
  return (

    <div>
      <Grid style={{
        marginBottom: '30px'
      }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {houses.map((house, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <HouseCard house={house} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>


  );
}

export default CardContainer;

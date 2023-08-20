// import HouseCard from "../Cardes";
// import api from '../../Pages/Landing';
// import { Grid } from "@mui/material";

// const CardContainer = ({ houses }) => {
//   return (
//     <>

//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {Array.from(Array(6)).map((_, index) => (
//           <Grid item xs={2} sm={4} md={4} key={index}>

//             {houses.length && houses.map((house) => <HouseCard house={house} />)}

//           </Grid>
//         ))}
//       </Grid>

//     </>
//   );
// }
// export default CardContainer

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

    
    // <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
    //   {houses.map((house, index) => (
    //     <Grid item xs={12} sm={6} md={4} key={index}>
    //       <HouseCard house={house} />
    //     </Grid>
    //   ))}
    // </Grid>




  );
}

export default CardContainer;

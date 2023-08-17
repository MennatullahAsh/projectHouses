import HouseCard from "../Cardes";
import api from '../../Pages/Landing';

const CardContainer = ({ houses }) => {
    return (
        <>
      {houses.length && houses.map((house) => <HouseCard house={house} />)}
        </>
    );
}
export default CardContainer
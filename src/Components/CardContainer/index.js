const CardContainer = ({ houses }) => {
    return (
        <>
            {houses.length && houses.map((house) => <HouseCard house={house} />)}
        </>
    );
}
export default CardContainer
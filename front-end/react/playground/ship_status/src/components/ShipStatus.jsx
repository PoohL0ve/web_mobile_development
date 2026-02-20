// import PropTypes from "prop-types"

function ShipStatus({ fuelLevel, isEngineHot, name, logo }) {
    {/*Keep raw variables outside of the return, leaving the return for the view*/}
    const engineStatusMessage = isEngineHot ? "OVERHEATING 🔴" : "SYSTEM'S NORMAL 🟢";
    const isFuelLow = fuelLevel < 20;

    return (
        <section>
            <h3>{name} Ship Status</h3>
            <p>Engine Temperature: {engineStatusMessage}</p>

            {/*Display if true*/}
            {
                isFuelLow && (
                    <h3>WARNING: LOW FUEL!!!</h3>
                )
            }
            <h3>{logo}</h3>
        </section>
    )
}

// Property Type Validation
/*ShipStatus.propTypes = {
    name: PropTypes.string,
    isEngineHot: PropTypes.bool,
    fuelLevel: PropTypes.number,
    logo: PropTypes.string
}

ShipStatus.defaultProps = {
    name: "Enchanté",
    isEngineHot: false,
    fuelLevel: 30,
    logo: "Lost"
}*/

export default ShipStatus
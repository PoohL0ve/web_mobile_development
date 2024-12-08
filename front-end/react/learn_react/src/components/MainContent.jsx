import PropTypes from "prop-types"

const MainContent = () => {
  return (
    <main>
        <Article name="Data Analysis"  isProficient={true} years={1}/>
        <Article name="Backend Developer"  isProficient={false} years={2}/>
        <Article name="Blockchain Developer"  isProficient={false} years={1/6}/>
    </main>
  );
}

{/* This component will be used to show how props work */}

function Article({ name, isProficient, years }) {
    return (
        <section>
            <h3>Career Path: {name}</h3>
            <p> Are You Proficient: {isProficient ? "Yes" : "No"}</p>
            <p>Experience: {years} years</p>
        </section>
    )
}

{/* Validate the Props */}
Article.propTypes = {
    name: PropTypes.string,
    isProficient: PropTypes.bool,
    years: PropTypes.number
}

export default MainContent
import Fact from './Fact/Fact'

const Section = ({ facts }) => {
    return (
        <section className="section">
            <ul className="facts-list">
                {facts.map((fact) => (
                    <Fact key={fact.id} fact={fact} />
                ))}
            </ul>
        </section>

    )

}

export default Section
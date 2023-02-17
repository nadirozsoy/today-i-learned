import Fact from './Fact/Fact'

const Section = ({ facts, setFacts }) => {
    if (facts.length === 0)
        return (
            <p
                className='message'
            >
                No facts for this category yet! Create the first one 🎃
            </p>
        )


    return (
        <section className="section">
            <ul className="facts-list">
                {facts.map((fact) => (
                    <Fact
                        key={fact.id}
                        fact={fact}
                        setFacts={setFacts}
                    />
                ))}
            </ul>
            <h3>
                There are {facts.length} facts in the database. Add your own 🤠
            </h3>
        </section>

    )

}

export default Section
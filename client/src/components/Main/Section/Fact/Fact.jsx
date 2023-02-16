const CATEGORIES = [
    { name: 'technology', color: '#3b82f6' },
    { name: 'science', color: '#16a34a' },
    { name: 'finance', color: '#ef4444' },
    { name: 'society', color: '#eab308' },
    { name: 'entertainment', color: '#db2777' },
    { name: 'health', color: '#14b8a6' },
    { name: 'history', color: '#f97316' },
    { name: 'news', color: '#8b5cf6' },
]


const Fact = ({ fact }) => {
    return (
        <li className="section__fact">
            <p className="section__text">
                {fact.text}
                <a href={fact.source} target='_blank'
                    className="section__text--source">(Source)</a>
            </p>
            <span className="section__tag" style={{ backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category).color }} >#{fact.category}#</span>
            <div className="section__vote-buttons">
                <button>👍 {fact.votesInteresting}</button>
                <button>🤯 {fact.votesMindblowing}</button>
                <button>⛔️ {fact.votesFalse}</button>
            </div>
        </li>
    )
}

export default Fact
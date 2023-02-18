const Header = ({ setShowForm, showForm }) => {
    return (
        <header className="header">
            <img
                src="logo.png"
                alt="Today I Learned"
                className="header__logo"
            />
            <h1 className="heading-1">Today I Learned</h1>
            <button
                className="btn header__btn btn-lg"
                //3. update state variable
                onClick={() => setShowForm((show) => !show)}
            >
                {showForm ? "Close" : "Share a fact"}
            </button>
        </header>
    )
}

export default Header
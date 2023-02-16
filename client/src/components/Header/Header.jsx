const Header = () => {
    return (
        <header className="header">
            <img
                src="logo.png"
                alt="Today I Learned"
                height="68"
                width="68"
                className="header__logo"
            />
            <h1 className="heading-1">Today I Learned</h1>
            <button className="btn header__btn btn-lg">Share a fact</button>
        </header>
    )

}

export default Header
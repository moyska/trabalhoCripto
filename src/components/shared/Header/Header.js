import './Header.css'

export const Header = () => {
    return (
        <header>
            <div className="website-title header-container">
                <img src="/images/InfinityPlay (1).png" width="100" alt="" />
                <h1 className="title">InfinityPlay</h1>
            </div>

            <nav className="navigation header-container">
                <div className="nav-obj">
                    <a href="/">Loja</a>
                </div>
                <div className="nav-obj">
                    <a href="/">Carrinho</a>
                </div>
                <div className="nav-obj">
                    <a href="/">Ajuda</a>
                </div>
            </nav>
        </header>
    )
}
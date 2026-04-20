import logo from "../img/dc-logo.png";

export default function AppHeader() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <img src={logo} alt="" />
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                                Comics
                            </a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                                Movies
                            </a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                                Tv
                            </a>
                        </div>
                    </div>
                                        <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                                Games
                            </a>
                        </div>
                    </div>
                                        <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                                Collectibles
                            </a>
                        </div>
                    </div>
                                        <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                                Videos
                            </a>
                        </div>
                    </div>
                                        <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                                Fans
                            </a>
                        </div>
                    </div>
                                        <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                                News
                            </a>
                        </div>
                    </div>
                                        <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                                Shop
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

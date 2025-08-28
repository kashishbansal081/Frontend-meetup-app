import logo from "../images/mettup.png";


export default function Navbar() {
 
  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand mx-auto mx-md-0 text-center" href="/">
              <img src={logo} alt="Bootstrap" width="100" height="50" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

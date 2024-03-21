function Footer() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <span className="navbar-text">&copy; {new Date().getFullYear()} BMS</span>
        </div>
      </nav>
    </>
  );
}
export default Footer;

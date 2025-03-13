import Logo from "@/components/atoms/Logo";
import Nav from "@/components/atoms/Nav";
// import Search from "@/components/atoms/Search";
import AuthButtons from "@/components/atoms/AuthButtons";

interface headerProps {
  authHandler: (val: boolean) => void;
}

const Header = ({authHandler}:headerProps) => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Logo />
          <Nav />
          {/* <Search /> */}
          <AuthButtons authHandler={authHandler} />
        </div>
      </div>
    </header>
  );
};

export default Header;

const Nav = () => {
    return (
      <ul className="nav ms-auto mb-2 justify-content-end mb-md-0">
        {["Courses", "Notice Board", "FAQs", "About"].map((item, index) => (
          <li key={index}>
            <a href="#" className="nav-link px-2 text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Nav;
  
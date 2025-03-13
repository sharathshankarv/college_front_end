import Link from "next/link";

const Nav = () => {
  const headerLinks = [
    { name: "Courses", url: "/courses" },
    { name: "Notice Board", url: "/notice_board" },
    { name: "FAQs", url: "/faq" },
    { name: "About", url: "/about" },
  ]
    return (
      <ul className="nav ms-auto mb-2 justify-content-end mb-md-0">
        {headerLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.url} className="nav-link px-2 text-white">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Nav;
  
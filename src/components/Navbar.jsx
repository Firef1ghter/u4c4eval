import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */
     <>
      <Link className="Home"to={"/"}>Home</Link>

      <Link  className="about"to={"/about"}>About</Link>
      <Link className="products" to={"/products"}>Products</Link>
      <Link className="men" to={"/products/men"}>Men</Link>
      <Link className="women" to={"/products/women"}>Women</Link>
      <Link className="kids" to={"/products/kids"}>Kids</Link>
      <Link className="Home" to={"/products/homedecor"}>Home Decor</Link>
      </>
      }
    </nav>
  );
};

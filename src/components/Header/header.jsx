
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/all.actions";

import Logo from "../../img/argentBankLogo.avif";

import "./header.css";

function Header() {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.login.isConnected);
  const userName = useSelector((state) => state.user.userName); 
  const navigate = useNavigate();

  const handleLogout = async() => {
    await localStorage.clear()
    await dispatch(logout());
    navigate("/")
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Bank Logo" />
        </Link>
        <div className="not-connected">
          {isConnected ? (
            <>
              <i className="fa-solid fa-circle-user"></i>
              <Link to="/profil">
                <p>{userName}</p> {/* Affichez le nom d'utilisateur */}
              </Link>
              <i className="fa fa-sign-out"></i>
              <Link onClick={handleLogout}>
                <p>Logout</p>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <p>Sign In</p>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;


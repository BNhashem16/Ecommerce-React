import { CounterContextProvider } from 'context/CounterContext'
import { tokenContext } from 'context/TokenContext'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  let { token } = useContext(tokenContext)
  console.log(token)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src="./assets/images/freshcart-logo.svg" alt="logo" width="100" height="40" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {token && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="cart" className="nav-link">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="register" className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
            )}

            <ul className="d-flex list-unstyled mb-0">
              <li>
                <i className="mx-2 fa-brands fa-youtube"></i>
              </li>
              <li>
                <i className="mx-2 fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="mx-2 fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="mx-2 fa-brands fa-twitter"></i>
              </li>
              {token ? (
                           <li className="mx-2">
                           <div>Logout</div>
                         </li>
              ) : (
                <>
                  <li className="mx-2">
                    <div>Register</div>
                  </li>

                  <li className="mx-2">
                    <div>Login</div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

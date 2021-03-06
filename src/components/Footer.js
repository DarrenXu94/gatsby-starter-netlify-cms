import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/ChoccyRatings.svg'
import linkedin from '../img/social/linkedin.svg'
import github from '../img/social/github.svg'
import instagram from '../img/social/instagram.svg'
import globe from '../img/social/globe.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered backgroundDots">
          <img
            src={logo}
            alt="Kaldi"
            style={{ height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest reviews
                      </Link>

                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="LinkedIn" href="https://www.linkedin.com/in/darren-xu-profile/">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="Github" href="https://github.com/DarrenXu94">
                  <img
                    className="fas fa-lg"
                    src={github}
                    alt="Github"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="My Website" href="https://darrenxu.com">
                  <img
                    src={globe}
                    alt="globe"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>

              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

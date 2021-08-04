import React, { useState, useEffect } from 'react';
import './sideBar.css';

const SideBar = ({ fullName }) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/students')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <>
      <div>
        <aside
          className='sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left'
          id='show-side-navigation1'
        >
          <i
            className='uil-bars close-aside d-md-none d-lg-none'
            data-close='show-side-navigation1'
          />
          <div className='sidebar-header d-flex justify-content-between align-items-center px-3 py-4'>
            <img
              className='rounded-pill img-fluid'
              style={{ marginLeft: '10px' }}
              width={65}
              src='https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png'
              alt=''
            />
            <div className='ms-2'>
              <h5 className='fs-6 mb-0'>
                <a className='text-decoration-none' href='#'>
                  {fullName}
                </a>
              </h5>
              <p className='mt-1 mb-0'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className='search position-relative text-center px-4 py-3 mt-2'>
            <input
              type='text'
              className='form-control w-100 border-0 bg-transparent'
              placeholder='Search here'
            />
            <i className='fa fa-search position-absolute d-block fs-6' />
          </div>
          <ul className='categories list-unstyled'>
            <li className='has-dropdown'>
              <i className='uil-estate fa-fw' />
              <a href='#'> Dashboard</a>
            </li>
            <li className>
              <i className='uil-folder' />
              <a href='#'> File manager</a>
            </li>
            <li className='has-dropdown'>
              <i className='uil-calendar-alt' />
              <a href='#'> Calender</a>
            </li>
            <li className='has-dropdown'>
              <i className='uil-envelope-download fa-fw' />
              <a href='#'> Mailbox</a>
            </li>
            <li className='has-dropdown'>
              <i className='uil-shopping-cart-alt' />
              <a href='#'> Ecommerce</a>
            </li>
            <li className='has-dropdown'>
              <i className='uil-bag' />
              <a href='#'> Projects</a>
            </li>
            <li className>
              <i className='uil-setting' />
              <a href='#'> Settings</a>
              <ul className='sidebar-dropdown list-unstyled'>
                <li>
                  <a href='#'>Lorem ipsum</a>
                </li>
                <li>
                  <a href='#'>ipsum dolor</a>
                </li>
                <li>
                  <a href='#'>dolor ipsum</a>
                </li>
                <li>
                  <a href='#'>amet consectetur</a>
                </li>
                <li>
                  <a href='#'>ipsum dolor sit</a>
                </li>
              </ul>
            </li>
            <li className='has-dropdown'>
              <i className='uil-chart-pie-alt' />
              <a href='#'> Components</a>
            </li>
            <li className='has-dropdown'>
              <i className='uil-panel-add' />
              <a href='#'> Charts</a>
            </li>
            <li className>
              <i className='uil-map-marker' />
              <a href='#'> Maps</a>
            </li>
          </ul>
        </aside>
        <section id='wrapper'>
          <nav className='navbar navbar-expand-md'>
            <div className='container-fluid mx-2'>
              <div className='navbar-header'>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#toggle-navbar'
                  aria-controls='toggle-navbar'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <i className='uil-bars text-white' />
                </button>
                <a className='navbar-brand' href='#'>
                  <span className='main-color'>טק </span>
                  קריירה
                </a>
              </div>
              <div className='collapse navbar-collapse' id='toggle-navbar'>
                <ul className='navbar-nav ms-auto'>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      href='#'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Settings
                    </a>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'
                    >
                      <li>
                        <a className='dropdown-item' href='#'>
                          My account
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-item' href='#'>
                          My inbox
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Help
                        </a>
                      </li>
                      <li>
                        <hr className='dropdown-divider' />
                      </li>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Log out
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      <i className='uil-comments-alt' />
                      <span>23</span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      <i className='uil-bell' />
                      <span>98</span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      <i
                        data-show='show-side-navigation1'
                        className='uil-bars show-side-btn'
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='p-4'>
            <div className='welcome'>
              <div className='content rounded-3 p-3'>
                <h1 className='fs-3'>Welcome {fullName}</h1>
                <p className='mb-0'>
                  Hello Jone Doe, welcome to your awesome dashboard!
                </p>
              </div>
            </div>
            <section className='statistics mt-4'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3'>
                    <i className='uil-envelope-shield fs-2 text-center bg-primary rounded-circle' />
                    <div className='ms-3'>
                      <div className='d-flex align-items-center'>
                        <h3 className='mb-0'>1,245</h3>{' '}
                        <span className='d-block ms-2'>Emails</span>
                      </div>
                      <p className='fs-normal mb-0'>
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3'>
                    <i className='uil-file fs-2 text-center bg-danger rounded-circle' />
                    <div className='ms-3'>
                      <div className='d-flex align-items-center'>
                        <h3 className='mb-0'>34</h3>{' '}
                        <span className='d-block ms-2'>Projects</span>
                      </div>
                      <p className='fs-normal mb-0'>
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='box d-flex rounded-2 align-items-center p-3'>
                    <i className='uil-users-alt fs-2 text-center bg-success rounded-circle' />
                    <div className='ms-3'>
                      <div className='d-flex align-items-center'>
                        <h3 className='mb-0'>5,245</h3>{' '}
                        <span className='d-block ms-2'>Users</span>
                      </div>
                      <p className='fs-normal mb-0'>
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='admins mt-4'>
              <div className='row'>
                {/* <h4>Admins:</h4> */}
                {students?.map((student, i) => {
                  return (
                    <>
                      <div key={student._id || i} className='col-md-6'>
                        <div className='box'>
                          <div className='admin d-flex align-items-center rounded-2 p-3 mb-4'>
                            <div className='img'>
                              <img
                                className='img-fluid rounded-pill'
                                width={75}
                                height={75}
                                src='https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png'
                                alt='admin'
                              />
                            </div>
                            <div className='ms-3'>
                              <h3 className='fs-5 mb-1'>
                                {student.firstName} {student.lastName}
                              </h3>
                              <p className='mb-0'>
                                Lorem ipsum dolor sit amet consectetur elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </section>
            <section className='statis mt-4 text-center'>
              <div className='row'>
                <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
                  <div className='box bg-primary p-3'>
                    <i className='uil-eye' />
                    <h3>5,154</h3>
                    <p className='lead'>Page views</p>
                  </div>
                </div>
                <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
                  <div className='box bg-danger p-3'>
                    <i className='uil-user' />
                    <h3>245</h3>
                    <p className='lead'>User registered</p>
                  </div>
                </div>
                <div className='col-md-6 col-lg-3 mb-4 mb-md-0'>
                  <div className='box bg-warning p-3'>
                    <i className='uil-shopping-cart' />
                    <h3>5,154</h3>
                    <p className='lead'>Product sales</p>
                  </div>
                </div>
                <div className='col-md-6 col-lg-3'>
                  <div className='box bg-success p-3'>
                    <i className='uil-feedback' />
                    <h3>5,154</h3>
                    <p className='lead'>Transactions</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default SideBar;

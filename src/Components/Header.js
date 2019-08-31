import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <div>
                      <div>
        <div>
        </div>
        <div>
        <nav className="navbar navbar-default navbar-fixed-top topbar">
		<div className="container-fluid" >

			<div className="navbar-header">

				<a href="/" className="navbar-brand">
					<span className="hidden-xs">OpenSky</span>
				</a>

				{/* <p className="navbar-text">
					<a href="#" className="sidebar-toggle">
                        <i className="fa fa-bars"></i>
                    </a>
				</p> */}

			</div>

			<div className="navbar-collapse collapse" id="navbar-collapse-main">

				<ul className="nav navbar-nav navbar-right">
                    
                    <li>
                        {/* <button className="navbar-btn"> */}
                            {/* <i className="fa fa-bell"></i> */}
                            Logout
                        {/* </button> */}
                    </li>
                    
					<li className="dropdown">
						<button className="navbar-btn" data-toggle="dropdown">
						</button>
						<ul className="dropdown-menu">
							<li><a href="#">Account</a></li>
							<li><a href="#">Dashboard</a></li>
							<li className="nav-divider"></li>
							<li><a href="#">Logout</a></li>
						</ul>
					</li>

				</ul>

			</div>
		</div>
	</nav>
	
        </div>
      </div>
            </div>
        )
    }
}
export default Header;

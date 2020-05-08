import React from "react";

export const Navbar = ({ children }) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a class="navbar-brand" href="#">
                        RyanMustofa
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div class="navbar-nav ml-auto">
                            <a class="nav-item nav-link" href="#home">
                                Home{" "}
                            </a>
                            <a class="nav-item nav-link" href="#portofolio">
                                Portofolio
                            </a>
                            <a class="nav-item nav-link" href="#about">
                                About
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
};

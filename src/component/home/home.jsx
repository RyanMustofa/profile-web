import React from "react";
import { Portofolio } from "../portofolio";
import { Footer } from "../footer";

const Home = () => {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid" id="home">
                <div class="container">
                    <h1 class="display-4">Work To Better And Faster</h1>
                    <a
                        className="btn btn-primary tombol"
                        id="about"
                        href="https://github.com/RyanMustofa"
                    >
                        JOIN US
                    </a>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-10 info-panel">
                    <div className="row">
                        <div class="col-lg">
                            <i
                                class="fas fa-smile-beam font float-left mr-2"
                                style={{
                                    fontSize: "50pt",
                                    color: "black !important"
                                }}
                            >
                            </i>
                            <h4>PROFILE</h4>
                            <p>My Name Is Ryan Mustofa 28 October 2003</p>
                        </div>
                        <div class="col-lg">
                            <i
                                class="fab fa-whatsapp-square font float-left mr-2"
                                style={{
                                    fontSize: "50pt",
                                    color: "black !important"
                                }}
                            >
                            </i>
                            <h4>Contact</h4>
                            <p>
                                WA/Telp <code>087823622701</code>
                            </p>
                        </div>
                        <div class="col-lg">
                            <i
                                class="fas fa-map-marker font float-left mr-2"
                                style={{
                                    fontSize: "50pt",
                                    color: "black !important"
                                }}
                            >
                            </i>
                            <h4>Location</h4>
                            <p>
                                Lemahbang, Jumapolo, Kabupaten, Karanganyar,
                                Jawa Tengah
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Portofolio />
            <Footer />
        </div>
    );
};

export default Home;

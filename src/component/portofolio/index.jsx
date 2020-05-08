import React from "react";
import Pendaftaran from "./2020-03-10-112640_1366x768_scrot.png";
import News from "./2020-03-10-113838_1366x768_scrot.png";
import Chat from "./2020-03-30-205928_1366x768_scrot.png";

export const Portofolio = () => {
    return (
        <div>
            <div className="container portofolio" id="portofolio">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            className="img-fluid"
                            src={Pendaftaran}
                            alt="pendaftaran sekolah"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>Project Pendaftaran Sekolah</h2>
                        <p> Dengan Menggunakan Bootstrap Laravel Dan React</p>
                        <button className="btn btn-primary tombol">
                            SHOW PROJECT
                        </button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2>Project NEWS Detik.com</h2>
                        <p> Dengan Menggunakan Bootstrap Laravel Dan React</p>
                        <button className="btn btn-primary tombol">
                            SHOW PROJECT
                        </button>
                    </div>
                    <div className="col-md-6">
                        <img
                            className="img-fluid"
                            src={News}
                            alt="pendaftaran sekolah"
                        />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img
                            className="img-fluid"
                            src={Chat}
                            alt="Chat Online"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>Project ONE-CHAT</h2>
                        <p> Dengan Menggunakan Bootstrap Laravel Dan React</p>
                        <button className="btn btn-primary tombol">
                            SHOW PROJECT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

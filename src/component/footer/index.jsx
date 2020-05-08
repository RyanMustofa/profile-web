import React from "react";
import Profile from "./WhatsApp Image 2020-05-08 at 19.20.47.jpeg";

export const Footer = () => {
    return (
        <div>
            <div className="container profile">
                <h3 className="text-center">
                    "Jangan Pernah Menyerah Karena Sebuah Kegagalan Adalah Awal
                    Dari Keberhasilan"
                </h3>
                <div className="row justify-content-center">
                    <div className="col-6 d-flex justify-content-center">
                        <img
                            src={Profile}
                            class="rounded-circle"
                            width="70"
                            height="70"
                            alt="profile"
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <h5 className="text-center">Ryan Mustofa</h5>
                </div>
            </div>
            <div className="container footer">
                <div className="row justify-content-center">
                    <div className="col-6 d-flex justify-content-center">
                        2020 Created by ryan mustofa
                    </div>
                </div>
            </div>
        </div>
    );
};

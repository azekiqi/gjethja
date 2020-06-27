import React from 'react';
import './Sidebar.scss'
import FeatherIcon from 'feather-icons';


export default function Sidebar() {
        return (
            <div className={"sidebar"}>
                <div className="sidebar-title">
                    Kategoritë
                </div>
                <div className="sidebar-link">
                    Kujdesi për fëmijë
                </div>
                <div className="sidebar-link">
                    Kujdesi për të moshuar
                </div>
                <div className="sidebar-link">
                    Kujdesi për kafshët
                </div>
                <div className="sidebar-link">
                    Mirëmbajtje e shtëpisë
                </div>

                <div className="sidebar-title">
                    Filtro sipas:
                </div>
                <div className="sidebar-link">
                    Moshës
                </div>
                <div className="sidebar-link">
                    Gjinisë
                </div>
                <div className="sidebar-link">
                    Vendndodhjes
                </div>
                <div className="sidebar-link">
                    Edukimit
                </div>
                <div className="sidebar-link">
                    Vlerêsimeve
                </div>
            </div>
        )
    }

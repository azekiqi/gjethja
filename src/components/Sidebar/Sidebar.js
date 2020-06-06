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
                    Postet
                </div>
                <div className="sidebar-link">
                    Profilet
                </div>

                <div className="sidebar-title">
                    Filtro sipas:
                </div>
                <div className="sidebar-link">
                    moshës
                </div>
                <div className="sidebar-link">
                    gjinisë
                </div>
                <div className="sidebar-link">
                    vendndodhjes
                </div>
                <div className="sidebar-link">
                    edukimit
                </div>
                <div className="sidebar-link">
                    kualifikimeve
                </div>
                <div className="sidebar-link">
                    vlerêsimeve
                </div>
            </div>
        )
    }

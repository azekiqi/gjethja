import React from 'react';
import './Sidebar.scss'

export default function Sidebar() {
    return(
        <div className={"sidebar"}>
            <div className="sidebar-title">
                Categories
            </div>
            <div className="sidebar-link">
                Posts
            </div>
            <div className="sidebar-link">
                Profiles
            </div>

            <div className="sidebar-title">
                Filter
            </div>
            <div className="sidebar-link">
                by age
            </div>
            <div className="sidebar-link">
                by gender
            </div>
            <div className="sidebar-link">
                by qualification
            </div>
            <div className="sidebar-link">
                by education
            </div>
            <div className="sidebar-link">
                by location
            </div>
            <div className="sidebar-link">
                by rating
            </div>
        </div>
    )
}

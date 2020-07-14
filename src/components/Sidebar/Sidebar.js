import React from 'react';
import './Sidebar.scss'
import FeatherIcon from 'feather-icons';
import {setFilter} from "../../actions";
import { connect } from "react-redux";
import {getPosts} from "../../actions/posts";

function Sidebar(props) {
    const { startAgeFilter, endAgeFilter, cityFilter, educationFilter, setFilter, getPosts } = props;

    const filter = (filter, value) => {
        setFilter(filter, value);
        const filters = { startAgeFilter, endAgeFilter, cityFilter, educationFilter };
        getPosts(filters);
    }

    return (
        <div className={"sidebar"}>

            <div className="sidebar-title">
                Filtro sipas:
            </div>
            <div className="sidebar-link">
                Moshës
            </div>
            <div className="row">
                <div className="col">
                    <input type="text"
                           className="form-control"
                           placeholder="Prej"
                           value={startAgeFilter}
                           onChange={(e) => filter("startAgeFilter", e.target.value)}/>
                </div>
                <div className="mt-2">-</div>
                <div className="col">
                    <input type="text"
                           className="form-control"
                           placeholder="Deri"
                           value={endAgeFilter}
                           onChange={(e) => filter("endAgeFilter", e.target.value)}/>
                </div>
            </div>

            <div className="sidebar-link">
                Qytetit
            </div>
            <div className="row">
                <div className="col">
                       <select type="text"
                               className="form-control"
                               placeholder="Qyteti"
                               onChange={(e) => filter("cityFilter", e.target.value)}>
                            <option></option>
                            <option>Prishtinë</option>
                            <option>Prizren</option>
                            <option>Mitrovicë</option>
                       </select>
                </div>
            </div>

            <div className="sidebar-link">
                Edukimit
            </div>
            <div className="row">
                <div className="col">
                    <select type="text"
                            className="form-control"
                            placeholder="Edukimi"
                            onChange={(e) => filter("educationFilter", e.target.value)}>
                        <option></option>
                        <option>Fillor</option>
                        <option>Mesëm</option>
                        <option>Lartë</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        startAgeFilter: state.startAgeFilter,
        endAgeFilter: state.endAgeFilter,
        cityFilter: state.cityFilter,
        educationFilter: state.educationFilter,
    }
}

const mapDispatchToProps = dispatch => ({
    getPosts: data => dispatch(getPosts(data)),
    setFilter: (filter, value) => dispatch(setFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

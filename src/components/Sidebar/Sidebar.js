import React from 'react';
import './Sidebar.scss'
import FeatherIcon from 'feather-icons';
import {setFilter} from "../../actions";
import { connect } from "react-redux";
import {getProfiles} from "../../actions/profiles";
import {Select} from "antd";

function Sidebar(props) {
    const { startAgeFilter, endAgeFilter, cityFilter, educationFilter, setFilter, getProfiles } = props;

    const filter = (filter, value) => {
        setFilter(filter, value);
        const filters = { startAgeFilter, endAgeFilter, cityFilter, educationFilter };
        getProfiles(filters);
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
                           <option value="Prishtine">Prishtinë</option>
                           <option value="Peje">Pejë</option>
                           <option value="Prizren">Prizren</option>
                           <option value="Ferizaj">Ferizaj</option>
                           <option value="Gjakove">Gjakove</option>
                           <option value="Mitrovice">Mitrovice</option>
                           <option value="Peje">Peje</option>
                           <option value="Gjilan">Gjilan</option>
                           <option value="Vushtrri">Vushtrri</option>
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
                        <option value="Ulet">Ulët</option>
                        <option value="Mesem">Mesëm</option>
                        <option value="Larte">Lartë</option>
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
    getProfiles: data => dispatch(getProfiles(data)),
    setFilter: (filter, value) => dispatch(setFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

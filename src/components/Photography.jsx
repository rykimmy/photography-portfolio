import { Link, Outlet } from 'react-router-dom';
import people from '../img/people/people.jpg';
import nature from '../img/nature/nature.jpg';
import sports from '../img/sports/sports.jpg';
import film from '../img/film/film.jpg';

function Photography() {
    return (
        <div>
            <div className="sectionContainer">
                {/* PEOPLE */}
                <div className="itemContainer">
                    <Link to="/people"><img className="sectionItem" src={people} /></Link>
                    <div className="centeredSectionMenuTitle">People</div>
                </div>

                {/* NATURE */}
                <div className="itemContainer">
                    <Link to="/nature"><img className="sectionItem" src={nature} /></Link>
                    <div className="centeredSectionMenuTitle">Nature</div>
                </div>

                {/* SPORTS */}
                <div className="itemContainer">
                    <Link to="/sports"><img className="sectionItem" src={sports} /></Link>
                    <div className="centeredSectionMenuTitle">Sports</div>
                </div>

                {/* FILM */}
                <div className="itemContainer">
                    <Link to="/film"><img className="sectionItem" src={film} /></Link>
                    <div className="centeredSectionMenuTitle">Film</div>
                </div>
            </div>
        </div>
    );
};

export default Photography;
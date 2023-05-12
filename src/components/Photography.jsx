import { Link, Outlet } from 'react-router-dom';
import People from './People';

function Photography() {
    return (
        <div>
            <div className="sectionContainer">
                {/* PEOPLE */}
                <div className="itemContainer">
                    <a href={<People />}><img className="sectionItem" src="people.jpg" /></a>
                    {/* <Link to="/photography/people"><img className="sectionItem" src="people.jpg"/></Link> */}
                    <div className="centeredSectionTitle">People</div>
                </div>

                {/* NATURE */}
                <div className="itemContainer">
                    <a><img className="sectionItem" src="watersplash.jpg" /></a>
                    <div className="centeredSectionTitle">Nature</div>
                </div>

                {/* SPORTS */}
                <div className="itemContainer">
                    <a><img className="sectionItem" src="heading.jpg" /></a>
                    <div className="centeredSectionTitle">Sports</div>
                </div>

                {/* FILM */}
                <div className="itemContainer">
                    <a><img className="sectionItem" src="film.jpg" /></a>
                    <div className="centeredSectionTitle">Film</div>
                </div>
            </div>
        </div>
    );
};

export default Photography;
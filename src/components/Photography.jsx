import { Link } from 'react-router-dom';
import PhotographyItems from './PhotographyItems';

const Photography = () => {
    return (
        <div className="sectionContainer">
            {PhotographyItems.map((item, index) => {
                return (
                    <div className="itemContainer">
                        <Link to={item.to}><img className="sectionItem" src={item.logo} /></Link>
                        <div className="centeredSectionMenuTitle">{item.section}</div>
                    </div>
                );
            })}
        </div>
    );
};

// function Photography() {
//     return (
//         <div>
//             <div className="sectionContainer">
//                 {/* PEOPLE */}
//                 <div className="itemContainer">
//                     <Link to="/people"><img className="sectionItem" src={people} /></Link>
//                     <div className="centeredSectionMenuTitle">People</div>
//                 </div>

//                 {/* NATURE */}
//                 <div className="itemContainer">
//                     <Link to="/nature"><img className="sectionItem" src={nature} /></Link>
//                     <div className="centeredSectionMenuTitle">Nature</div>
//                 </div>

//                 {/* SPORTS */}
//                 <div className="itemContainer">
//                     <Link to="/sports"><img className="sectionItem" src={sports} /></Link>
//                     <div className="centeredSectionMenuTitle">Sports</div>
//                 </div>

//                 {/* FILM */}
//                 <div className="itemContainer">
//                     <Link to="/film"><img className="sectionItem" src={film} /></Link>
//                     <div className="centeredSectionMenuTitle">Film</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default Photography;
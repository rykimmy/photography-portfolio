import PhotoAlbum from "react-photo-album";
import people from '../img/people/people.jpg';

function People() {
    return (
        <div>
            <img className="coverPhoto" src={people} />
            <div className="centeredSectionTitle">The People Photos</div>
            <div className="centeredSectionDescription">A collection of images capturing people I know and don't know.</div>
        </div>
    );
};

export default People;
import PhotoAlbum from 'react-photo-album';
import film from '../img/film/film.jpg';
import film1 from '../img/film/film1.jpg';
import film2 from '../img/film/film2.jpg';
import film3 from '../img/film/film3.jpg';
import film4 from '../img/film/film4.jpg';
import film5 from '../img/film/film5.jpg';
import film6 from '../img/film/film6.jpg';
import film7 from '../img/film/film7.jpg';
import film8 from '../img/film/film8.jpg';
import film9 from '../img/film/film9.jpg';
import film10 from '../img/film/film10.jpg';
import film11 from '../img/film/film11.jpg';
import film12 from '../img/film/film12.jpg';
import film13 from '../img/film/film13.jpg';

function Film() {
    const photos = [
        { src: film1, width: 1408, height: 1002 },
        { src: film2, width: 1512, height: 1002 },
        { src: film3, width: 1545, height: 1024 },
        { src: film4, width: 984, height: 984 },
        { src: film5, width: 1401, height: 1037 },
        { src: film6, width: 775, height: 1023 },
        { src: film7, width: 1565, height: 1037 },
        { src: film8, width: 1560, height: 934 },
        { src: film9, width: 1404, height: 938 },
        { src: film10, width: 1565, height: 1037 },
        { src: film11, width: 1565, height: 1037 },
        { src: film12, width: 1545, height: 1024 },
        { src: film13, width: 1357, height: 1002 },
    ];

    return (
        <div>
            <img className="coverPhoto" src={film} />
            <div className="centeredSectionTitle">The Film Photos</div>
            <div className="centeredSectionDescription">A collection of images taken with 35mm film.</div>

            <div className="photoGallery">
                <PhotoAlbum breakpoints={[300]} layout="masonry" photos={photos} />
            </div>
        </div>
    );
};

export default Film;
import PhotoAlbum from 'react-photo-album';
import sports from '../img/sports/sports.jpg';
import north from '../img/sports/north.jpg';
import freekick from '../img/sports/freekick.jpg';
import ankles from '../img/sports/ankles.jpg';
import carter from '../img/sports/carter.jpg';
import oneOnOne from '../img/sports/1v1.jpg';
import freekick2 from '../img/sports/freekick2.jpg';
import score from '../img/sports/score.jpg';
import wrestling from '../img/sports/wrestling.jpg';
import collartie from '../img/sports/collartie.jpg';
import toss from '../img/sports/throw.jpg';
import breakdown from '../img/sports/breakdown.jpg';

function Sports() {
    const photos = [
        { src: north, width: 5184, height: 3456 },
        { src: freekick, width: 5184, height: 3456 },
        { src: ankles, width: 5184, height: 3456 },
        { src: carter, width: 5184, height: 3456 },
        { src: oneOnOne, width: 5184, height: 3456 },
        { src: freekick2, width: 5184, height: 3456 },
        { src: score, width: 5184, height: 3456 },
        { src: wrestling, width: 5184, height: 3456 },
        { src: collartie, width: 970, height: 724 },
        { src: toss, width: 866, height: 724 },
        { src: breakdown, width: 1086, height: 724 },
    ]

    return (
        <div>
            <img className="coverPhoto" src={sports} />
            <div className="centeredSectionTitle">The Sports Photos</div>
            <div className="centeredSectionDescription">A collection of images capturing sports events.</div>

            <div className="photoGallery">
                <PhotoAlbum breakpoints={[300]} layout="masonry" photos={photos} />
            </div>
        </div>
    );
};

export default Sports;
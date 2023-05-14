import PhotoAlbum from 'react-photo-album';
import nature from '../img/nature/nature.jpg';
import nature1 from '../img/nature/barca.jpg';
import nature2 from '../img/nature/bluecity_alley.jpg';
import nature3 from '../img/nature/cat.jpg';
import nature4 from '../img/nature/clouds_rainbow.jpg';
import nature5 from '../img/nature/lake_stick.jpg';
import nature6 from '../img/nature/hawaii.jpg';
import nature7 from '../img/nature/hongkong.jpg';
import nature8 from '../img/nature/bird2.jpg';
import nature9 from '../img/nature/phone.jpg';
import nature10 from '../img/nature/leather.jpg';

import nature11 from '../img/nature/leaves.jpg';
import nature12 from '../img/nature/henna.jpg';
import nature13 from '../img/nature/nyc.jpg';
import nature14 from '../img/nature/llama.jpg';
import nature15 from '../img/nature/paint.jpg';
import nature16 from '../img/nature/lake_mountains.jpg';
import nature17 from '../img/nature/tree.jpg';
import nature18 from '../img/nature/clouds_sun.jpg';
import nature19 from '../img/nature/rooftop_sunset.jpg';
import nature20 from '../img/nature/hike.jpg';

import nature21 from '../img/nature/smalltree.jpg';
import nature22 from '../img/nature/space.jpg';
import nature23 from '../img/nature/sunset.jpg';
import nature24 from '../img/nature/sunset_boats.jpg';
import nature25 from '../img/nature/rooftop_day.jpg';
import nature26 from '../img/nature/hk_hike.jpg';
import nature27 from '../img/nature/travel.jpg';

function Nature() {
    const photos = [
        { src: nature1, width: 3024, height: 4032 },
        { src: nature2, width: 1086, height: 724 },
        { src: nature3, width: 882, height: 724 },
        { src: nature4, width: 4811, height: 3207 },
        { src: nature5, width: 1086, height: 724 },
        { src: nature6, width: 4005, height: 3006 },
        { src: nature7, width: 5184, height: 3456 },
        { src: nature8, width: 1086, height: 724 },
        { src: nature9, width: 1040, height: 693 },
        { src: nature10, width: 1086, height: 724 },
        { src: nature11, width: 5184, height: 3456 },
        { src: nature12, width: 1086, height: 724 },
        { src: nature13, width: 3024, height: 3024 },
        { src: nature14, width: 906, height: 676 },
        { src: nature15, width: 980, height: 696 },
        { src: nature16, width: 5184, height: 3456 },
        { src: nature17, width: 3024, height: 4032 },
        { src: nature18, width: 4032, height: 3024 },
        { src: nature19, width: 5184, height: 3456 },
        { src: nature20, width: 3456, height: 5184 },
        { src: nature21, width: 904, height: 723 },
        { src: nature22, width: 2711, height: 2711 },
        { src: nature23, width: 5184, height: 3456 },
        { src: nature24, width: 3024, height: 4032 },
        { src: nature25, width: 4032, height: 3024 },
        { src: nature26, width: 5184, height: 3456 },
        { src: nature27, width: 3024, height: 3024 },
    ]

    return (
        <div>
            <img className="coverPhoto" src={nature} />
            <div className="centeredSectionTitle">The Nature Photos</div>
            <div className="centeredSectionDescription">A collection of nature scenery and cool places.</div>

            <div className="photoGallery">
                <PhotoAlbum breakpoints={[200]} layout="masonry" photos={photos} />
            </div>
        </div>
    );
};

export default Nature;
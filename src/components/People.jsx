import PhotoAlbum from "react-photo-album";
import people from '../img/people/people.jpg';
import ball from '../img/people/ball.jpg';
import band from '../img/people/band.jpg';
import bandcrowd from '../img/people/bandcrowd.jpg';
import beta from '../img/people/beta.jpg';
import bike from '../img/people/bike.jpeg';
import brian from '../img/people/brian.jpg';
import brianbeach from '../img/people/brianbeach.jpg';
import brunch from '../img/people/brunch.jpg';
import bustygolf from '../img/people/bustygolf.jpg';
import bustyriver from '../img/people/bustyriver.jpg';
import chansisters from '../img/people/chansisters.jpg';
import chloeadrienne from '../img/people/chloeadrienne.jpg';
import chrisdarty from '../img/people/chrisdarty.jpg';
import cooking from '../img/people/cooking.jpg';
import dchanged from '../img/people/dchanged.jpg';
import dumbpong from '../img/people/dumbpong.jpg';
import gabbi from '../img/people/gabbi.jpg';
import glovsky from '../img/people/glovsky.jpg';
import golf from '../img/people/golf.jpg';
import golfcourse from '../img/people/golfcourse.jpg';
import grad2 from '../img/people/grad2.jpg';
import grad3 from '../img/people/grad3.jpg';
import grandparents from '../img/people/grandparents.jpg';
import hikingboys from '../img/people/hikingboys.jpg';
import katboat from '../img/people/katboat.jpg';
import katpose from '../img/people/katpose.jpg';
import kattea from '../img/people/kattea.jpg';
import kid from '../img/people/kid.jpg';
import ksadance from '../img/people/ksadance.jpg';
import lanterns from '../img/people/lanterns.jpg';
import loko from '../img/people/loko.jpg';
import marc from '../img/people/marc.jpg';
import mattcalla from '../img/people/mattcalla.jpg';
import matthawaii from '../img/people/matthawaii.jpg';
import noor from '../img/people/noor.jpg';
import parker from '../img/people/parker.jpg';
import parkerfishing from '../img/people/parkerfishing.jpg';
import pong from '../img/people/pong.jpg';
import rics from '../img/people/rics.jpg';
import rorykent from '../img/people/rorykent.jpg';
import shoota from '../img/people/shoota.jpg';
import smoke from '../img/people/smoke.jpg';
import sunsetbro from '../img/people/sunsetbro.jpg';
import tiannahike from '../img/people/tiannahike.jpg';
import tiannasass from '../img/people/tiannasass.jpg';
import tippakat from '../img/people/tippakat.jpg';
import vancs from '../img/people/vancs.jpg';
import vancs2 from '../img/people/vancs2.jpg';
import yabs from '../img/people/yabs.jpg';
import zahniband from '../img/people/zahniband.jpg';

function People() {
    const photos = [
        { src: ball, width: 3024, height: 4032 },
        { src: band, width: 5184, height: 3456 },
        { src: bandcrowd, width: 5184, height: 3456 },
        { src: beta, width: 5184, height: 3456 },
        { src: bike, width: 1086, height: 724 },
        { src: brian, width: 4843, height: 3456 },
        { src: brianbeach, width: 2904, height: 2904 },
        { src: brunch, width: 3024, height: 4032 },
        { src: bustygolf, width: 4879, height: 3252 },
        { src: bustyriver, width: 5184, height: 3456 },
        { src: chansisters, width: 3456, height: 5184 },
        { src: chloeadrienne, width: 4820, height: 3456 },
        { src: chrisdarty, width: 3947, height: 2960 },
        { src: cooking, width: 1242, height: 1242 },
        { src: dchanged, width: 5184, height: 3456 },
        { src: dumbpong, width: 3451, height: 3451 },
        { src: gabbi, width: 4395, height: 3456 },
        { src: glovsky, width: 3451, height: 3451 },
        { src: golf, width: 4032, height: 3024 },
        { src: golfcourse, width: 3024, height: 3024 },
        { src: grad2, width: 1170, height: 2080 },
        { src: grad3, width: 1170, height: 2080 },
        { src: grandparents, width: 2883, height: 2883 },
        { src: hikingboys, width: 4932, height: 3456 },
        { src: katboat, width: 3024, height: 3024 },
        { src: kattea, width: 3024, height: 3024 },
        { src: kid, width: 4999, height: 3354 },
        { src: ksadance, width: 4638, height: 3456 },
        { src: lanterns, width: 2858, height: 2858 },
        { src: loko, width: 3024, height: 4032 },
        { src: marc, width: 5184, height: 3456 },
        { src: mattcalla, width: 4241, height: 3029 },
        { src: matthawaii, width: 2906, height: 3875 },
        { src: noor, width: 4918, height: 3278 },
        { src: parker, width: 5184, height: 3456 },
        { src: parkerfishing, width: 5184, height: 3456 },
        { src: pong, width: 3456, height: 5184 },
        { src: rics, width: 4032, height: 3024 },
        { src: rorykent, width: 5184, height: 3456 },
        { src: shoota, width: 3451, height: 3451 },
        { src: smoke, width: 4314, height: 3451 },
        { src: sunsetbro, width: 4032, height: 3024 },
        { src: tiannahike, width: 2928, height: 3017 },
        { src: tiannasass, width: 3024, height: 3024 },
        { src: tippakat, width: 3455, height: 3455 },
        { src: vancs, width: 4032, height: 3024 },
        { src: vancs2, width: 4032, height: 3024 },
        { src: yabs, width: 5184, height: 3456 },
        { src: zahniband, width: 5184, height: 3456 },
    ]

    return (
        <div>
            <img className="coverPhoto" src={people} />
            <div className="centeredSectionTitle">The People Photos</div>
            <div className="centeredSectionDescription">A collection of images capturing people I know and don't know.</div>

            <div className="photoGallery">
                <PhotoAlbum breakpoints={[200]} layout="masonry" photos={photos} />
            </div>
        </div>
    );
};

export default People;
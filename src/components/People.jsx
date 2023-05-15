import { useState, useEffect, useLayoutEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import people from '../img/people.jpg';
import * as db from '../services/datastore';
import { Link } from 'react-router-dom';

function People() {
    // Scrolls to top of page
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    // List of images to store all image objects
    const [imageList, setImageList] = useState([]);

    // Fetching photos from firebase backend and updating list
    useEffect(() => {
        setImageList([])
        db.fetchPeople((peoplePhotos) => {
            for (const key in peoplePhotos) {
                setImageList((prev) => [...prev, peoplePhotos[key]]);
            }
        })
    }, [])

    return (
        <div>
            {/* COVER */}
            <img className="coverPhoto" src={people} />
            <div className="centeredSectionTitle">The People Photos</div>
            <div className="centeredSectionDescription">A collection of images capturing people I know and don't know.</div>

            {/* PHOTO GALLERY */}
            <div className="photoGallery">
                <PhotoAlbum breakpoints={[300]} layout="masonry" photos={imageList} />
            </div>

            {/* NEXT PAGES */}
            <div className="nextPageRight">
                <Link className="nextIcon" to='/nature'>Nature →</Link>
            </div>
        </div>
    );
};

// ←→
export default People;
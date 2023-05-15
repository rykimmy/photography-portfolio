import PhotoAlbum from 'react-photo-album';
import sports from '../img/sports.jpg';
import { useState, useEffect, useLayoutEffect } from 'react';
import * as db from '../services/datastore';
import { Link } from 'react-router-dom';

function Sports() {
    // Scrolls to top of page
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    // List of images to store all image objects
    const [imageList, setImageList] = useState([]);

    // Fetching photos from firebase backend and updating list
    useEffect(() => {
        setImageList([])
        db.fetchSports((sportsPhotos) => {
            for (const key in sportsPhotos) {
                setImageList((prev) => [...prev, sportsPhotos[key]]);
            }
        })
    }, [])

    return (
        <div>
            {/* COVER */}
            <img className="coverPhoto" src={sports} />
            <div className="centeredSectionTitle">The Sports Photos</div>
            <div className="centeredSectionDescription">A collection of images capturing sports events.</div>

            {/* PHOTO GALLERY */}
            <div className="photoGallery">
                <PhotoAlbum breakpoints={[200]} layout="masonry" photos={imageList} />
            </div>

            {/* NEXT PAGES */}
            <div className="nextPageBoth">
                <Link className="nextIcon" to='/nature'>← Nature</Link>
                <Link className="nextIcon" to='/film'>Film →</Link>
            </div>
        </div>
    );
};

export default Sports;
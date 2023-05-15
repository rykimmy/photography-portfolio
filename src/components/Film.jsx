import { useState, useEffect, useLayoutEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import film from '../img/film.jpg';
import * as db from '../services/datastore';
import { Link } from 'react-router-dom';

function Film() {
    // Scrolls to top of page
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    // List of images to store all image objects
    const [imageList, setImageList] = useState([]); // keeps track of all image urls

    // Fetching photos from firebase backend and updating list
    useEffect(() => {
        setImageList([])
        db.fetchFilm((filmPhotos) => {
            console.log(filmPhotos)
            for (const key in filmPhotos) {
                setImageList((prev) => [...prev, filmPhotos[key]]);
            }
        })
    }, [])

    return (
        <div>
            {/* COVER */}
            <img className="coverPhoto" src={film} />
            <div className="centeredSectionTitle">The Film Photos</div>
            <div className="centeredSectionDescription">A collection of images taken with 35mm film.</div>

            {/* PHOTO GALLERY */}
            <div className="photoGallery">
                <PhotoAlbum breakpoints={[200]} layout="masonry" photos={imageList} />
            </div>

            {/* NEXT PAGES */}
            <div className="nextPageLeft">
                <Link className="nextIcon" to='/sports'>← Sports</Link>
            </div>
        </div>
    );
};

export default Film;
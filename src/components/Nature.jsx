import { useState, useEffect, useLayoutEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import nature from '../img/nature.jpg';
import * as db from '../services/datastore';
import { Link } from 'react-router-dom';

function Nature() {
    // Scrolls to top of page
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    // List of images to store all image objects
    const [imageList, setImageList] = useState([]);

    // Fetching photos from firebase backend and updating list
    useEffect(() => {
        setImageList([])
        db.fetchNature((naturePhotos) => {
            for (const key in naturePhotos) {
                setImageList((prev) => [...prev, naturePhotos[key]]);
            }
        })
    }, [])

    return (
        <div>
            {/* COVER */}
            <img className="coverPhoto" src={nature} />
            <div className="centeredSectionTitle">The Nature Photos</div>
            <div className="centeredSectionDescription">A collection of nature scenery and cool places.</div>

            {/* PHOTO GALLERY */}
            <div className="photoGallery">
                <PhotoAlbum breakpoints={[300]} layout="masonry" photos={imageList} />
            </div>

            {/* NEXT PAGES */}
            <div className="nextPageBoth">
                <Link className="nextIcon" to='/people'>← People</Link>
                <Link className="nextIcon" to='/sports'>Sports →</Link>
            </div>
        </div>
    );
};

export default Nature;
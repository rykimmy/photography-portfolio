import PhotoAlbum from "react-photo-album";

function Film() {
    const photos = [
        { src: "film1.jpg", width: 1545, height: 1024 },
        { src: "film9.jpg", width: 737, height: 981 },
        { src: "film3.jpg", width: 1545, height: 1024 },
        { src: "film4.jpg", width: 1545, height: 1024 },
        { src: "film5.jpg", width: 1545, height: 1024 },
        { src: "film6.jpg", width: 1545, height: 1024 },
        { src: "film7.jpg", width: 1545, height: 1024 },
        { src: "film8.jpg", width: 1545, height: 1024 },
    ];

    return (
        <div>
            <img className="coverPhoto" src="film_color.jpg" />
            <div className="centeredSectionTitle">The Film Photos</div>
            <div className="centeredSectionDescription">A collection of images taken with 35mm film.</div>

            <div className="photoGallery">
                <PhotoAlbum breakpoints={[300]} layout="masonry" photos={photos} />
            </div>
        </div>
    );
};

export default Film;
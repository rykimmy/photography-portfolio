import nature from '../img/nature/watersplash.jpg';

function Nature() {
    return (
        <div>
            <img className="coverPhoto" src={nature} />
            <div className="centeredSectionTitle">The Nature Photos</div>
            <div className="centeredSectionDescription">A collection of images capturing the beauty of nature.</div>
        </div>
    );
};

export default Nature;
import sports from '../img/sports/heading.jpg';

function Sports() {
    return (
        <div>
            <img className="coverPhoto" src={sports} />
            <div className="centeredSectionTitle">The Sports Photos</div>
            <div className="centeredSectionDescription">A collection of images capturing sports events.</div>
        </div>
    );
};

export default Sports;
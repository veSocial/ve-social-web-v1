import { React } from 'react';
import './../../App.css';

const LandingComponent = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <div className="back-image" style={{ overflow: "hidden" }}>
                <LandingNavBar />
                <LandingPage />
            </div>
        </div>
    );
}

export default LandingComponent;


import NetworkImg from "../assets/maersk-network.png"; // place l'image dans src/assets/
import "./Network.css";
export default function Network() {
    return(
        <section className="network-hero">
            <div className="network-inner">
                <div className="network-text">
                    <h2 className="network-title">The Transitetex East-West Network</h2>
                    <p className="network-desc">
                    With our East-West Network we are setting a new standard for reliability and service quality by reducing port calls on our mainliners, an extensive shuttle network
                    and strategically located hubs delivering world class productivity.
                    </p>
                    <a className="network-cta" href="/network-map" aria-label="Explore our Network">Explore our Network</a>
                </div>
                <div className="network-image">
                    <img src={NetworkImg} alt="Network hub and operations" />
                </div>
            </div>
        </section>
    );
}
    
    
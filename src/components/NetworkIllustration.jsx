import Icon from "./Icon";
import logo from "../../LOGO.png";
function NetworkIllustration() {
  return (
    <div className="network-scene" aria-label="Ilustrasi jaringan BIMATA">
      <div className="scene-halo halo-one" />
      <div className="scene-halo halo-two" />
      <div className="scene-grid" />
      <svg className="scene-connection" viewBox="0 0 600 540" aria-hidden="true">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4de0ff" />
            <stop offset="100%" stopColor="#3986ff" />
          </linearGradient>
        </defs>
        <path d="M300 270 C205 195 175 120 95 112" />
        <path d="M300 270 C405 180 430 125 508 145" />
        <path d="M300 270 C180 300 165 365 90 411" />
        <path d="M300 270 C402 322 420 380 520 395" />
        <path d="M300 270 C290 175 330 110 303 52" />
        <path d="M300 270 C270 365 305 430 280 490" />
      </svg>
      <div className="scene-center">
        <div className="center-orbit" />
        <div className="center-logo">
          <img src={logo} alt="Logo BIMATA" className="center-logo-image" />
        </div>
        <b>BIMATA</b>
        <small>NETWORK CORE</small>
        <div className="online-indicator"><i /> Network concept</div>
      </div>
      <div className="scene-node node-a"><span className="node-dot" /><span className="node-label">OFFICE</span></div>
      <div className="scene-node node-b"><span className="node-dot" /><span className="node-label">BRANCH</span></div>
      <div className="scene-node node-c"><span className="node-dot" /><span className="node-label">DATA</span></div>
      <div className="scene-node node-d"><span className="node-dot" /><span className="node-label">SITE LINK</span></div>
      <div className="scene-node node-e"><span className="node-dot" /></div>
      <div className="scene-node node-f"><span className="node-dot" /></div>
      <div className="floating-card speed-card">
        <span className="floating-icon"><Icon name="zap" size={16} /></span>
        <span><b>Built around you</b><small>Solusi sesuai kebutuhan</small></span>
      </div>
      <div className="floating-card coverage-card">
        <span className="coverage-pulse"><Icon name="globe" size={17} /></span>
        <span><b>Location review</b><small>Kelayakan per lokasi</small></span>
      </div>
    </div>
  );
}

export default NetworkIllustration;

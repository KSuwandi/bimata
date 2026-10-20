import Icon from "./Icon";

function IndonesiaMap() {
  return (
    <div className="indonesia-map-panel">
      <div className="map-top-label"><span><i /> COVERAGE CHECK</span><span>INDONESIA</span></div>
      <div className="map-aurora" />
      <svg className="indonesia-map" viewBox="0 0 720 350" role="img" aria-label="Ilustrasi kepulauan Indonesia">
        <defs>
          <linearGradient id="islandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#72d5ff" />
            <stop offset="100%" stopColor="#2b75e8" />
          </linearGradient>
          <filter id="mapGlow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <g className="map-islands" fill="url(#islandGradient)" filter="url(#mapGlow)">
          <path d="M56 92l30-17 45 10 19 18-11 16-28-7-14 16-29-5-23 11-16-14 10-19z" />
          <path d="M104 159l28-13 19 8 7 21-24 10-12 21-19-4-12-17z" />
          <path d="M188 92l23-13 35 11 21 29-8 18-25-5-17 18-16-16-24-5-9-18z" />
          <path d="M211 175l53-9 43 16 13 24-23 10-31-12-20 16-22-8-29-14z" />
          <path d="M301 104l21-13 17 9 4 17-20 14-14-11z" />
          <path d="M335 172l36-10 44 16 13 15-29 10-35-4-24 8-20-14z" />
          <path d="M393 94l29-15 34 9 9 17-26 10-18 18-26-12z" />
          <path d="M440 157l39-12 26 13-5 17-28 7-18 15-17-14z" />
          <path d="M500 100l23-15 39 8 18 16-12 16-24-7-16 11-20-8z" />
          <path d="M542 164l27-11 30 8 9 15-24 12-19-5-12 10-17-12z" />
          <path d="M604 113l23-7 22 13-10 15-20-2-12 9-12-11z" />
          <path d="M265 246l19-7 19 12-6 12-24 2z" />
          <path d="M357 254l20-8 18 13-4 16-22 2-13-11z" />
          <path d="M472 231l31-10 25 11 2 14-30 8-19-8z" />
        </g>
        <g className="map-routes" fill="none" stroke="#9beaff" strokeWidth="1.2">
          <path d="M115 115Q235 40 337 185T544 110" />
          <path d="M211 112Q357 290 481 166T617 125" />
          <path d="M130 170Q300 300 440 185" />
        </g>
        <g className="map-points">
          <circle cx="115" cy="115" r="4" /><circle cx="337" cy="185" r="4" /><circle cx="544" cy="110" r="4" /><circle cx="481" cy="166" r="4" /><circle cx="617" cy="125" r="4" />
        </g>
      </svg>
      <div className="map-caption"><div className="map-caption-icon"><Icon name="pin" size={18} /></div><span><b>Di mana pun lokasi Anda</b><small>Mulai dengan cek ketersediaan jaringan.</small></span></div>
      <span className="map-coordinate coord-one">06° 12′ S</span>
      <span className="map-coordinate coord-two">NUSANTARA / ID</span>
    </div>
  );
}

export default IndonesiaMap;

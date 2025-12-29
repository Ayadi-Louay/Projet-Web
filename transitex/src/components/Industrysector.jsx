import React from "react";
import "./Industrysector.css";

// Place les images dans src/assets/industries/
// Ex : src/assets/industries/fmcg.png, retail.png, fashion.png, chemicals.png, perishables.png, automotive.png, pharma.png, tech.png
import FmcgImg from "../assets/fmcg.png";
import RetailImg from "../assets/retail.png";
import FashionImg from "../assets/fashion.png";
import ChemicalsImg from "../assets/chemicals.png";
import PerishablesImg from "../assets/perishables.png";
import AutomotiveImg from "../assets/automotive.png";
import PharmaImg from "../assets/pharma.png";
import TechImg from "../assets/tech.png";

const industries = [
  { title: "FMCG", image: FmcgImg },
  { title: "Retail", image: RetailImg },
  { title: "Fashion & Lifestyle", image: FashionImg },
  { title: "Chemicals", image: ChemicalsImg },
  { title: "Perishables", image: PerishablesImg },
  { title: "Automotive", image: AutomotiveImg },
  { title: "Pharma & Healthcare", image: PharmaImg },
  { title: "Technology", image: TechImg },
];

export default function IndustrySectors() {
  return (
    <section className="industry-section" aria-labelledby="industry-title">
      <div className="industry-header">
        <h2 id="industry-title">Industry sectors</h2>
        <p className="industry-sub">
          Regardless of your industry or commodity, Transitex provides tailored
          logistics solutions that help Tunisian and international businesses grow.
        </p>
      </div>

      <div className="industry-grid">
        {industries.map((item, idx) => (
          <div className="industry-card" key={idx}>
            <div className="industry-image" role="img" aria-label={item.title}>
              <img src={item.image} alt={item.title} />
            </div>
            <h4 className="industry-title-card">{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

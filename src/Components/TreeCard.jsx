import "./TreeCard.css";
import Button from "./Button";

export default function TreeCard({ treeName, imgLink, location }) {
  return (
    <div id="treeCard" className="tree-card">
      <h2>{treeName}</h2>
      <img src={imgLink} alt="" className="tree-image" />
      <p className="location-text">{location}</p>
      <Button />
    </div>
  );
}

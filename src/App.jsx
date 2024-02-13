import TreeCard from "./Components/TreeCard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <div className="tree-container">
        <TreeCard
          treeName="Socotra Dragon Tree"
          location="Island of Socotra, Yemen"
          imgLink="https://onetreeplanted.org/cdn/shop/files/socotradragontree.webp?v=1686762384"
        />
        <TreeCard
          treeName="Rainbow Eucalyptus Tree"
          location="Philippines, Indonesia, and Papua New Guinea"
          imgLink="https://www.travelawaits.com/wp-content/uploads/2021/04/a-rainbow-eucalyptus-tree-in371af5.jpg?w=800"
        />
      </div>
      <Footer />
    </div>
  );
}

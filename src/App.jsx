import TreeCard from "./Components/TreeCard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SurpriseTree from "./Components/SurpriseTree";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <SurpriseTree />
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
        <TreeCard
          treeName="Tibetan Cherry Tree"
          location="Western China and Tibet"
          imgLink="https://img.crocdn.co.uk/images/products2/tr/00/00/00/46/tr0000004639.jpg?width=940&height=940"
        />
        <TreeCard
          treeName="Strangler Fig Tree"
          location="Tropical Forests Throughout the World"
          imgLink="https://onetreeplanted.org/cdn/shop/files/StranglerFigatTaProhm.webp?v=1686762719"
        />
        <TreeCard
          treeName="Sequoia Tree"
          location="Sierra Nevada Mountain Range, California"
          imgLink="https://store.experimentalfarmnetwork.org/cdn/shop/products/General_Sherman_Sequoia_Tree-1_1024x1024@2x.jpg?v=1673481085"
        />
        <TreeCard
          treeName="Cherry Blossom Tree"
          location="Japan and USA"
          imgLink="https://onetreeplanted.org/cdn/shop/files/sakurablossomtree.webp?v=1686762903"
        />
      </div>
      <Footer />
    </div>
  );
}

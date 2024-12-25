import { useState } from "react";
import "./App.css";
import Card from "./Components/ProductCard/Card";
import { Data } from "./Data";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
  
    <Header/>
    <main className="Container">
      {Data && Data.length > 0 ? (
        Data.map((e, i) => (
          <Card
            key={e.id || i} // Use a unique `id` from the data if available; fallback to the index
            title={e.title}
            price={e.price}
            Desc={e.description}
            category={e.category}
            image={e.image}
            rate={e.rating.rate}
            count={e.rating.count}
          />
        ))
      ) : (
        <h1>Data Not Available</h1>
      )}
    </main>
    <Footer/>
    </>
  );
};

export default App;

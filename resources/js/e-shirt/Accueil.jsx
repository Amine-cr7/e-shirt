
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
export default function Accueil() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch("/api/produits").then(res => res.json()).then(produits => setData(produits))
      } catch (error) {
        console.error(error);
      }
    };
    fetchData()
  }, []);
  return (
    <div className='container'>
      <div>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="bg.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="logo.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('accueil')).render(
  <Accueil />
);
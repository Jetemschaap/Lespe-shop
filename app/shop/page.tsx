"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Le Spè T-shirt Zwart",
    price: "€39,95",
    image: "/products/tshirt-zwart.png",
    preview: "/catalogus-tshirts-zwart.png",
  },
  {
    id: 2,
    name: "Le Spè T-shirt Rood",
    price: "€39,95",
    image: "/products/tshirt-rood.png",
    preview: "/catalogus-tshirts-rood.png",
  },
  {
    id: 3,
    name: "Le Spè T-shirt Blauw",
    price: "€39,95",
    image: "/products/tshirt-blauw.png",
    preview: "/catalogus-tshirts-blauw.png",
  },
  {
    id: 4,
    name: "Le Spè T-shirt Groen",
    price: "€39,95",
    image: "/products/tshirt-groen.png",
    preview: "/catalogus-tshirts-groen.png",
  },
];

export default function ShopPage() {
  const [selectedImage, setSelectedImage] = useState("/catalogus-tshirts-zwart.png");

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/achtergrond-b.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* NAVIGATIE */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <a href="/">
            <img src="/knop-home.png" style={{ height: "110px" }} />
          </a>
          <img src="/knop-shirts.png" style={{ height: "110px" }} />
          <img src="/knop-hoodies.png" style={{ height: "110px" }} />
          <img src="/knop-tanktops.png" style={{ height: "110px" }} />
          <img src="/knop-jackets.png" style={{ height: "110px" }} />
          <img src="/knop-caps.png" style={{ height: "110px" }} />
        </div>

        {/* CONTENT */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "flex-start",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* LINKS FOTO */}
          <div style={{ flex: "1 1 600px", maxWidth: "700px" }}>
            <img
              src={selectedImage}
              style={{
                width: "100%",
                borderRadius: "20px",
              }}
            />
          </div>

          {/* RECHTS PRODUCTEN */}
          <div style={{ flex: "0 1 420px", width: "100%", maxWidth: "420px" }}>
            {/* LOGO */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <img src="/logo-wit.png" style={{ maxWidth: "250px" }} />
            </div>

            {/* PRODUCT GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    padding: "10px",
                    borderRadius: "15px",
                  }}
                >
                  <img
                    src={product.image}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />

                  <div style={{ fontSize: "14px", marginTop: "6px" }}>
                    {product.name}
                  </div>

                  <div style={{ fontSize: "13px", color: "#ccc" }}>
                    {product.price}
                  </div>

                  <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
                    <button
                      onClick={() => setSelectedImage(product.preview)}
                      style={{
                        flex: 1,
                        background: "transparent",
                        border: "1px solid white",
                        color: "white",
                        borderRadius: "999px",
                        padding: "6px",
                        cursor: "pointer",
                      }}
                    >
                      Bekijk
                    </button>

                    <a
                      href={`/bestellen?id=${product.id}`}
                      style={{
                        flex: 1,
                        background: "white",
                        color: "black",
                        borderRadius: "999px",
                        padding: "6px",
                        textAlign: "center",
                        textDecoration: "none",
                      }}
                    >
                      Koop
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
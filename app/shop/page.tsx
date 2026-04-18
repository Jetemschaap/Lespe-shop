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
      className="min-h-screen text-white flex justify-center py-10"
      style={{
        position: "relative",
        backgroundImage: "url('/achtergrond.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <a href="/">
          <img
            src="/knop-home.png"
            alt="Home"
            style={{ height: "200px", width: "auto", display: "block" }}
          />
        </a>

        <a href="/shop">
          <img
            src="/knop-tshirts.png"
            alt="T-shirts"
            style={{ height: "200px", width: "auto", display: "block" }}
          />
        </a>

        <a href="#">
          <img
            src="/knop-hoodies.png"
            alt="Hoodies"
            style={{ height: "200px", width: "auto", display: "block" }}
          />
        </a>

        <a href="#">
          <img
            src="/knop-tanktops.png"
            alt="Tanktops"
            style={{ height: "200px", width: "auto", display: "block" }}
          />
        </a>

        <a href="#">
          <img
            src="/knop-jackets.png"
            alt="Jackets"
            style={{ height: "200px", width: "auto", display: "block" }}
          />
        </a>

        <a href="#">
          <img
            src="/knop-caps.png"
            alt="Caps"
            style={{ height: "200px", width: "auto", display: "block" }}
          />
        </a>
      </div>

      <div
        className="flex gap-10 items-start"
        style={{ marginTop: "220px" }}
      >
        <div style={{ width: "900px" }}>
          <img
            src={selectedImage}
            alt="catalogus"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
            }}
          />
        </div>

        <div style={{ width: "700px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "70px",
            }}
          >
            <img
              src="/logo-wit.png"
              alt="Le Spè logo"
              style={{ height: "360px", width: "auto" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
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
                  alt={product.name}
                  style={{ width: "100%", borderRadius: "10px" }}
                />

                <div style={{ marginTop: "8px", fontSize: "14px" }}>
                  {product.name}
                </div>

                <div style={{ color: "#aaa", fontSize: "14px" }}>
                  {product.price}
                </div>

                <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
                  <button
                    onClick={() => setSelectedImage(product.preview)}
                    style={{
                      flex: 1,
                      border: "1px solid white",
                      background: "transparent",
                      color: "white",
                      borderRadius: "20px",
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
                      borderRadius: "20px",
                      padding: "6px",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
    </main>
  );
}
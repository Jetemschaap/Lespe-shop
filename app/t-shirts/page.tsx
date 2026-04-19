"use client";

import { useState } from "react";

export default function TshirtsPage() {
  const [activeColor, setActiveColor] = useState<"zwart" | "rood" | "blauw" | "groen">("zwart");

  const products = [
    {
      id: "zwart",
      name: "Le Spè T-shirt Zwart",
      price: "€39,95",
      image: "/products/tshirt-zwart.png",
      catalogus: "/catalogus-shirts-zwart.png",
    },
    {
      id: "rood",
      name: "Le Spè T-shirt Rood",
      price: "€39,95",
      image: "/products/tshirt-rood.png",
      catalogus: "/catalogus-shirts-rood.png",
    },
    {
      id: "blauw",
      name: "Le Spè T-shirt Blauw",
      price: "€39,95",
      image: "/products/tshirt-blauw.png",
      catalogus: "/catalogus-shirts-blauw.png",
    },
    {
      id: "groen",
      name: "Le Spè T-shirt Groen",
      price: "€39,95",
      image: "/products/tshirt-groen.png",
      catalogus: "/catalogus-shirts-groen.png",
    },
  ] as const;

  const activeProduct =
    products.find((product) => product.id === activeColor) ?? products[0];

  const topButtons = [
    { image: "/knop-home.png", href: "/" },
    { image: "/knop-shirts.png", href: "/t-shirts" },
    { image: "/knop-hoodies.png", href: "/hoodies" },
    { image: "/knop-tanktops.png", href: "/tanktops" },
    { image: "/knop-jackets.png", href: "/jackets" },
    { image: "/knop-caps.png", href: "/caps" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/achtergrond.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px 30px 40px 30px",
        boxSizing: "border-box",
      }}
    >
      {/* TOP KNOPPEN */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "22px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {topButtons.map((button, index) => (
          <a key={index} href={button.href}>
            <img
              src={button.image}
              alt=""
              style={{
                height: "75px",
                width: "auto",
                display: "block",
                cursor: "pointer",
              }}
            />
          </a>
        ))}
      </div>

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* GROTE FOTO LINKS */}
        <div>
          <img
            src={activeProduct.catalogus}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "6px",
            }}
          />
        </div>

        {/* RECHTS */}
        <div>
          {/* LOGO (los, geen zwarte achtergrond) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src="/logo.png"
              alt="logo"
              style={{
                width: "260px",
                height: "auto",
              }}
            />
          </div>

          {/* PRODUCTEN */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "22px",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "rgba(0,0,0,0.72)",
                  borderRadius: "18px",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    background: "#d9d4dd",
                    borderRadius: "10px",
                    padding: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src={product.image}
                    alt=""
                    style={{
                      width: "100%",
                      display: "block",
                    }}
                  />
                </div>

                <div style={{ color: "white", fontSize: "15px" }}>
                  {product.name}
                </div>

                <div style={{ color: "#ccc", fontSize: "14px", marginBottom: "10px" }}>
                  {product.price}
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => setActiveColor(product.id)}
                    style={{
                      flex: 1,
                      height: "38px",
                      borderRadius: "999px",
                      border: "2px solid white",
                      background: "transparent",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Bekijk
                  </button>

                  <a
                    href={`/bestellen?product=${product.id}`}
                    style={{
                      flex: 1,
                      height: "38px",
                      borderRadius: "999px",
                      background: "white",
                      color: "black",
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
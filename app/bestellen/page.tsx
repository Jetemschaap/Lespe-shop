"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Le Spè T-shirt Zwart",
    price: "€39,95",
    image: "/products/tshirt-zwart.png",
  },
  {
    id: 2,
    name: "Le Spè T-shirt Rood",
    price: "€39,95",
    image: "/products/tshirt-rood.png",
  },
  {
    id: 3,
    name: "Le Spè T-shirt Blauw",
    price: "€39,95",
    image: "/products/tshirt-blauw.png",
  },
  {
    id: 4,
    name: "Le Spè T-shirt Groen",
    price: "€39,95",
    image: "/products/tshirt-groen.png",
  },
];

function BestellenContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");
  const product = products.find((p) => p.id === Number(id));

  const [maat, setMaat] = useState("M");
  const [aantal, setAantal] = useState(1);

  if (!product) {
    return <div style={{ color: "white", padding: "40px" }}>Product niet gevonden</div>;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/achtergrond.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "200px 40px 40px",
        color: "white",
        position: "relative",
      }}
    >
      <div
  style={{
    position: "absolute",
    top: "30px",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    alignItems: "center",
    left: "50%",
    transform: "translateX(-50%)",
    flexWrap: "nowrap",
    overflow: "hidden",
  }}

>
        <a href="/">
          <img src="/knop-home.png" alt="Home" style={{ height: "200px" }} />
        </a>

        <a href="/shop">
          <img src="/knop-tshirts.png" alt="T-shirts" style={{ height: "200px" }} />
        </a>

        <a href="#">
          <img src="/knop-hoodies.png" alt="Hoodies" style={{ height: "200px" }} />
        </a>

        <a href="#">
          <img src="/knop-tanktops.png" alt="Tanktops" style={{ height: "200px" }} />
        </a>

        <a href="#">
          <img src="/knop-jackets.png" alt="Jackets" style={{ height: "200px" }} />
        </a>

        <a href="#">
          <img src="/knop-caps.png" alt="Caps" style={{ height: "200px" }} />
        </a>
      </div>

      <h1 style={{ fontSize: "48px", marginBottom: "30px" }}>Bestellen</h1>

      <div style={{ marginTop: "30px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "300px",
            borderRadius: "20px",
          }}
        />

        <h2 style={{ marginTop: "20px", fontSize: "32px" }}>{product.name}</h2>
        <p style={{ fontSize: "24px", marginTop: "10px" }}>{product.price}</p>

        <div style={{ marginTop: "30px" }}>
          <label style={{ fontSize: "26px" }}>Maat kiezen:</label>
          <br />
          <select
            value={maat}
            onChange={(e) => setMaat(e.target.value)}
            style={{
              marginTop: "15px",
              padding: "16px 20px",
              borderRadius: "12px",
              fontSize: "22px",
              background: "black",
              color: "white",
              border: "2px solid white",
            }}
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div style={{ marginTop: "25px", fontSize: "26px" }}>
          Gekozen maat: <strong>{maat}</strong>
        </div>

        <div style={{ marginTop: "30px" }}>
          <label style={{ fontSize: "26px" }}>Aantal:</label>
          <br />
          <input
            type="number"
            value={aantal}
            min={1}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 1) setAantal(value);
            }}
            style={{
              marginTop: "15px",
              padding: "16px 20px",
              borderRadius: "12px",
              fontSize: "22px",
              width: "120px",
              background: "black",
              color: "white",
              border: "2px solid white",
            }}
          />
        </div>

        <div style={{ marginTop: "25px", fontSize: "26px" }}>
          Gekozen aantal: <strong>{aantal}</strong>
        </div>

        <div style={{ marginTop: "25px", fontSize: "28px" }}>
          Totaal: <strong>€{(39.95 * aantal).toFixed(2).replace(".", ",")}</strong>
        </div>

        <div style={{ marginTop: "35px" }}>
          <button
            onClick={() => {
              const item = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                maat: maat,
                aantal: aantal,
              };

              const existing = localStorage.getItem("cart");
              const cart = existing ? JSON.parse(existing) : [];

              cart.push(item);

              localStorage.setItem("cart", JSON.stringify(cart));

              router.push("/cart");
            }}
            style={{
              background: "white",
              color: "black",
              border: "none",
              borderRadius: "14px",
              padding: "18px 30px",
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            In winkelmand
          </button>
        </div>
      </div>
    </main>
  );
}

export default function BestellenPage() {
  return (
    <Suspense fallback={<div style={{ color: "white", padding: "40px" }}>Laden...</div>}>
      <BestellenContent />
    </Suspense>
  );
}
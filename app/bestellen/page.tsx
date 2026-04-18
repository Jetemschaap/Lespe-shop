"use client";

import { Suspense, useMemo, useState } from "react";
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

  const productId = Number(searchParams.get("id"));
  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [productId]
  );

  const [maat, setMaat] = useState("M");
  const [aantal, setAantal] = useState(1);
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [adres, setAdres] = useState("");
  const [postcode, setPostcode] = useState("");
  const [plaats, setPlaats] = useState("");

  if (!product) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Product niet gevonden</h1>
        <button
          onClick={() => router.push("/shop")}
          style={{
            padding: "14px 24px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Terug naar shop
        </button>
      </main>
    );
  }

  function handleBestellen(e: React.FormEvent) {
    e.preventDefault();

    alert("Bestelling geplaatst, bedankt voor je bestelling");
    router.push("/shop");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/achtergrond.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.65)",
            borderRadius: "20px",
            padding: "24px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              display: "block",
              margin: "0 auto",
              borderRadius: "16px",
            }}
          />

          <h1
            style={{
              color: "#fff",
              fontSize: "34px",
              marginTop: "24px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              color: "#fff",
              fontSize: "28px",
              textAlign: "center",
              margin: 0,
            }}
          >
            {product.price}
          </p>
        </div>

        <form
          onSubmit={handleBestellen}
          style={{
            background: "rgba(0,0,0,0.65)",
            borderRadius: "20px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "32px",
              margin: 0,
              textAlign: "center",
            }}
          >
            Bestellen
          </h2>

          <label style={{ color: "#fff", fontSize: "18px" }}>
            Naam
            <input
              type="text"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "6px",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
              }}
            />
          </label>

          <label style={{ color: "#fff", fontSize: "18px" }}>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "6px",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
              }}
            />
          </label>

          <label style={{ color: "#fff", fontSize: "18px" }}>
            Adres
            <input
              type="text"
              value={adres}
              onChange={(e) => setAdres(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "6px",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
              }}
            />
          </label>

          <label style={{ color: "#fff", fontSize: "18px" }}>
            Postcode
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "6px",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
              }}
            />
          </label>

          <label style={{ color: "#fff", fontSize: "18px" }}>
            Plaats
            <input
              type="text"
              value={plaats}
              onChange={(e) => setPlaats(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "6px",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
              }}
            />
          </label>

          <label style={{ color: "#fff", fontSize: "18px" }}>
            Maat
            <select
              value={maat}
              onChange={(e) => setMaat(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "6px",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
              }}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </label>

          <label style={{ color: "#fff", fontSize: "18px" }}>
            Aantal
            <select
              value={aantal}
              onChange={(e) => setAantal(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "6px",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>

          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              borderRadius: "14px",
              padding: "16px",
              color: "#fff",
              fontSize: "18px",
              lineHeight: 1.6,
            }}
          >
            <div>Product: {product.name}</div>
            <div>Maat: {maat}</div>
            <div>Aantal: {aantal}</div>
            <div>Prijs per stuk: {product.price}</div>
          </div>

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "18px",
              borderRadius: "12px",
              border: "none",
              fontSize: "22px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Bestelling plaatsen
          </button>

          <button
            type="button"
            onClick={() => router.push("/shop")}
            style={{
              padding: "16px",
              borderRadius: "12px",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            Terug naar shop
          </button>
        </form>
      </div>
    </main>
  );
}

export default function BestellenPage() {
  return (
    <Suspense
      fallback={
        <main
          style={{
            minHeight: "100vh",
            background: "#000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
          }}
        >
          Laden...
        </main>
      }
    >
      <BestellenContent />
    </Suspense>
  );
}
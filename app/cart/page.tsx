"use client";

import { useEffect, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  maat: string;
  aantal: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [besteld, setBesteld] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const verwijderItem = (indexToRemove: number) => {
    const newCart = cart.filter((_, index) => index !== indexToRemove);
    saveCart(newCart);
  };

  const verhoogAantal = (indexToUpdate: number) => {
    const newCart = [...cart];
    newCart[indexToUpdate].aantal += 1;
    saveCart(newCart);
  };

  const verlaagAantal = (indexToUpdate: number) => {
    const newCart = [...cart];
    if (newCart[indexToUpdate].aantal > 1) {
      newCart[indexToUpdate].aantal -= 1;
      saveCart(newCart);
    }
  };

  const winkelmandLegen = () => {
    saveCart([]);
  };

  const afrekenen = () => {
    setBesteld(true);
    localStorage.removeItem("cart");
    setCart([]);
  };

  const totaalPrijs = cart.reduce((total, item) => {
    const prijsNummer = Number(item.price.replace("€", "").replace(",", "."));
    return total + prijsNummer * item.aantal;
  }, 0);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/achtergrond.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "200px 40px 40px",
        color: "white",
        position: "relative",
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

      <h1 style={{ fontSize: "48px", marginBottom: "40px" }}>Winkelmand</h1>

      {besteld ? (
        <div
          style={{
            background: "rgba(0,0,0,0.75)",
            borderRadius: "20px",
            padding: "30px",
            maxWidth: "900px",
            fontSize: "30px",
            lineHeight: "1.5",
          }}
        >
          Bestelling geplaatst.
          <br />
          Bedankt voor je bestelling.
        </div>
      ) : cart.length === 0 ? (
        <div style={{ fontSize: "28px" }}>Je winkelmand is leeg</div>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              maxWidth: "1400px",
            }}
          >
            {cart.map((item, index) => {
              const prijsNummer = Number(item.price.replace("€", "").replace(",", "."));
              const itemTotaal = prijsNummer * item.aantal;

              return (
                <div
                  key={index}
                  style={{
                    background: "rgba(0,0,0,0.75)",
                    borderRadius: "20px",
                    padding: "20px",
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "180px",
                      borderRadius: "14px",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "10px" }}>
                      {item.name}
                    </div>

                    <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                      Prijs: {item.price}
                    </div>

                    <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                      Maat: {item.maat}
                    </div>

                    <div
                      style={{
                        fontSize: "24px",
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <span>Aantal:</span>

                      <button
                        onClick={() => verlaagAantal(index)}
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "10px",
                          border: "none",
                          background: "white",
                          color: "black",
                          fontSize: "28px",
                          cursor: "pointer",
                        }}
                      >
                        -
                      </button>

                      <span style={{ minWidth: "30px", textAlign: "center" }}>{item.aantal}</span>

                      <button
                        onClick={() => verhoogAantal(index)}
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "10px",
                          border: "none",
                          background: "white",
                          color: "black",
                          fontSize: "28px",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </button>
                    </div>

                    <div style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "16px" }}>
                      Totaal: €{itemTotaal.toFixed(2).replace(".", ",")}
                    </div>

                    <button
                      onClick={() => verwijderItem(index)}
                      style={{
                        background: "#ffffff",
                        color: "black",
                        border: "none",
                        borderRadius: "12px",
                        padding: "12px 18px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      Verwijderen
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontSize: "34px",
                fontWeight: "bold",
                background: "rgba(0,0,0,0.75)",
                display: "inline-block",
                padding: "20px 30px",
                borderRadius: "18px",
              }}
            >
              Eindtotaal: €{totaalPrijs.toFixed(2).replace(".", ",")}
            </div>

            <button
              onClick={afrekenen}
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
              Afrekenen
            </button>

            <button
              onClick={winkelmandLegen}
              style={{
                background: "transparent",
                color: "white",
                border: "2px solid white",
                borderRadius: "14px",
                padding: "18px 30px",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Winkelmand legen
            </button>
          </div>
        </>
      )}
    </main>
  );
}
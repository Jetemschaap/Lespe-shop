export default function HomePage() {
  return (
    <main
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: "url('/achtergrond.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
        {/* HOME */}
        <a href="/">
          <img src="/knop-home.png" alt="Home" style={{ height: "200px", width: "auto", display: "block" }} />
        </a>

        <a href="/shop">
          <img src="/knop-tshirts.png" alt="T-shirts" style={{ height: "200px", width: "auto", display: "block" }} />
        </a>

        <a href="#">
          <img src="/knop-hoodies.png" alt="Hoodies" style={{ height: "200px", width: "auto", display: "block" }} />
        </a>

        <a href="#">
          <img src="/knop-tanktops.png" alt="Tanktops" style={{ height: "200px", width: "auto", display: "block" }} />
        </a>

        <a href="#">
          <img src="/knop-jackets.png" alt="Jackets" style={{ height: "200px", width: "auto", display: "block" }} />
        </a>

        <a href="#">
          <img src="/knop-caps.png" alt="Caps" style={{ height: "200px", width: "auto", display: "block" }} />
        </a>
      </div>
    </main>
  );
}
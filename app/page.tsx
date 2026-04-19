export default function HomePage() {
  const buttons = [
    { image: "/knop-home.png", href: "/" },
    { image: "/knop-tshirts.png", href: "/t-shirts" },
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
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          paddingTop: "30px",
          flexWrap: "wrap",
        }}
      >
        {buttons.map((button, index) => (
          <a key={index} href={button.href}>
            <img
              src={button.image}
              alt=""
              style={{
                height: "80px",   // 👈 hier maak je ze groter/kleiner
                width: "auto",
                display: "block",
                cursor: "pointer",
              }}
            />
          </a>
        ))}
      </div>
    </main>
  );
}
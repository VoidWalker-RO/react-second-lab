import Main from "./components/Main/Main";

const cardsData = [
  {
    id: 1,
    title: "Лісова прогулянка",
    description: "Затишний лісовий пейзаж для відпочинку на природі.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Місто вночі",
    description: "Нічне місто з яскравими вогнями та неймовірною атмосферою.",
    image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Гірський пейзаж",
    description: "Краєвид величних гір під яскравим сонячним небом.",
    image: "https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 4,
    title: "Морський берег",
    description: "Спокійний пляж із чистою водою та м'яким піском.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Захід сонця",
    description: "Романтичний захід сонця, що фарбує небо у дивовижні кольори.",
    image: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?w=400&h=300&fit=crop"
  }
];

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Галерея карток</h1>
      <Main cards={cardsData} />
    </div>
  );
}

export default App;
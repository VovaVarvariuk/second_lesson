import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((count) => count.id !== counterId);
    setCounters(newCounters);
  };
  const handleReset = () => setCounters(initialState);
  const handleIncrement = (counterId) => {
    return setCounters(
      counters.map((counter) => {
        if (counter.id === counterId) {
          counter.value++;
        }
        return counter;
      })
    );
  };

  const handleDecrement = (counterId) => {
    return setCounters(
      counters.map((counter) => {
        if (counter.id === counterId && counter.value > 0) {
          counter.value--;
        }
        return counter;
      })
    );
  };
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onDelete={handleDelete}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;

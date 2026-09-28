import { useState } from 'react';

export default function OrderCounter() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <p>Pedidos: {quantity}</p>

      <button onClick={() => setQuantity(quantity + 1)}>
        Añadir pedido
      </button>

      <button
        onClick={() => setQuantity(0)}
        disabled={quantity === 0}
      >
        Reiniciar
      </button>
    </div>
  );
}
import { useEffect, useState  } from 'react';
import api from './services/api';

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    api
      .get("")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("Ops!");
      });
  }, []);

  return (
    <div>
      <p>ID: {products?.slip.id}</p>
      <p>{products?.slip.advice}</p>
    </div>
  );
}

export default App;

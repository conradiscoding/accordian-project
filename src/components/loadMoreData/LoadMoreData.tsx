import { useEffect, useState } from 'react';
import styles from './LoadMoreData.module.css';

const LoadMoreData = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          {products.map((product: any) => (
            <div key={product.id} className="col-md-3">
              <span className="card">
                <img
                  src={product.images[0]}
                  className={styles.productImage}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => setCount(count + 1)}
        disabled={loading}
      >
        Load More
      </button>
    </>
  );
};

export default LoadMoreData;

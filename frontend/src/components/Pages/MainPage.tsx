import React, { useEffect, useState } from 'react'

const MainPage = () => {
  const [stocks, setStocks] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5276/api/stock')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch from backend');
        return res.json();
      })
      .then((data) => setStocks(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="p-8 max-w-xl mx-auto">
      <div className="text-4xl font-bold text-blue-600 mb-4">
        Stock App Dashboard
      </div>
      
      {error && <p className="text-red-500">Error: {error}</p>}
      
      <div className="bg-white p-4 rounded-xl shadow-md">
        <pre className="text-xs">{JSON.stringify(stocks, null, 2)}</pre>
      </div>
    </div>
  )
}

export default MainPage
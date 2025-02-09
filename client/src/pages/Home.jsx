
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Store</h2>
        <p className="text-lg mb-6">
          Find the best products at unbeatable prices
        </p>
        <a
          href="#"
          className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200"
        >
          Shop Now
        </a>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-6">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold">Product 1</h4>
            <p className="text-gray-600">$29.99</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold">Product 2</h4>
            <p className="text-gray-600">$39.99</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold">Product 3</h4>
            <p className="text-gray-600">$49.99</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2025 E-Commerce. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

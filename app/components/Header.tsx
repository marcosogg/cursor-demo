export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Logo</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Features</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
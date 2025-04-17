const EventViewFooter = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 border-t border-gray-200 mt-auto">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div>&copy; 2025 Orgnyse</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-700">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-700">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventViewFooter;

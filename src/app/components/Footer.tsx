export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-purple-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-xl font-bold text-purple-600">SafePark</h2>
          <p className="text-gray-500 text-sm">Secure parking, simplified.</p>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-purple-600">Privacy</a>
          <a href="#" className="hover:text-purple-600">Terms</a>
          <a href="#" className="hover:text-purple-600">Contact</a>
        </div>

        <p className="text-gray-400 text-xs">© 2025 SafePark RW. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Bot Trade</h2>

      <nav className="space-y-4">
        <a href="/" className="block hover:text-blue-400">🏠 Dashboard</a>
        <a href="/trade" className="block hover:text-blue-400">📈 Trade</a>
        <a href="/team" className="block hover:text-blue-400">👥 Team</a>
        <a href="/profile" className="block hover:text-blue-400">👤 Profile</a>
      </nav>
    </div>
  );
}

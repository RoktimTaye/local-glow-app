import { Link } from "react-router-dom";

const AdminLanding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="text-lg font-semibold text-foreground">
          LocalDirectory
        </div>
        <Link to="/" className="nav-link">
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-center text-foreground">
          Welcome Admin
        </h1>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-6 py-4 border-t border-border">
        <Link to="/upload" className="btn-link">
          Upload
        </Link>
        <Link to="/admin/view" className="btn-link">
          View
        </Link>
      </footer>
    </div>
  );
};

export default AdminLanding;
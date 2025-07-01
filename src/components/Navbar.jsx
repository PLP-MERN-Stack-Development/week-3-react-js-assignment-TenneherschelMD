import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">MyApp</h1>
        <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/posts" className="hover:underline">Posts</Link>
        </div>
    </nav>
    );
}
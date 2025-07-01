import { Link } from 'react-router-dom';

export default function Footer() {
    return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <div className="space-x-4 mb-2">
        <Link to="/" className="hover:underline text-sm">Home</Link>
        <Link to="/about" className="hover:underline text-sm">About</Link>
        <Link to="/contact" className="hover:underline text-sm">Contact</Link>
        </div>
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
    );
}
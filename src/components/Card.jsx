export default function Card({ title, children }) {
    return (
    <div className="p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div>{children}</div>
    </div>
    );
}
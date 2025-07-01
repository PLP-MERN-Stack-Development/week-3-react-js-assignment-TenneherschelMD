// src/pages/PostList.jsx import { useEffect, useState } from 'react'; import Layout from '../components/Layout'; import Card from '../components/Card'; import Button from '../components/Button';

export default function PostList() { const [posts, setPosts] = useState([]); const [loading, setLoading] = useState(true); const [error, setError] = useState(null); const [search, setSearch] = useState('');

useEffect(() => { fetch('https://jsonplaceholder.typicode.com/posts') .then((res) => { if (!res.ok) throw new Error('Failed to fetch'); return res.json(); }) .then((data) => { setPosts(data); setLoading(false); }) .catch((err) => { setError(err.message); setLoading(false); }); }, []);

const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()) );

return ( <Layout> <div className="max-w-3xl mx-auto"> <h1 className="text-2xl font-bold mb-4">Post List</h1>

<input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded mb-4"
    />

    {loading && <p className="text-blue-600">Loading...</p>}
    {error && <p className="text-red-600">Error: {error}</p>}

    {!loading && !error && (
        <div className="grid gap-4">
        {filteredPosts.map((post) => (
            <Card key={post.id} title={post.title}>
            <p>{post.body}</p>
            </Card>
        ))}
        </div>
    )}
    </div>
</Layout>

); }
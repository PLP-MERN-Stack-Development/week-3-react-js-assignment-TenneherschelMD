import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Home() {
    return (
    <Layout>
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Home Page</h1>

        <Card title="Welcome to MyApp">
        <p>This is a reusable card component that contains buttons below.</p>
        <div className="mt-4 space-x-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
        </div>
        </Card>
    </Layout>
    );
}
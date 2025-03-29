import { useEffect, useState } from 'react';

export default function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadPosts() {
            const posts = await Promise.all([
                import('../posts/best-practices.md'),
                import('../posts/optimizing-costs.md'),
            ]);
            setPosts(posts.map(p => p.attributes));
        }
        loadPosts();
    }, []);

    return (
        <main className="min-h-screen bg-white text-gray-900 p-6 max-w-4xl mx-auto">
            <section className="mb-12">
                <h1 className="text-4xl font-bold mb-2">Hi, I'm [Your Name]</h1>
                <p className="text-lg">Data Engineer | Building scalable data pipelines | Open to opportunities</p>
                <p className="mt-2 text-base text-gray-600 max-w-3xl">
                    I specialize in architecting robust, scalable data solutions. From real-time analytics platforms to cost-effective cloud pipelines, I focus on driving business insights with clean data infrastructure.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                <div className="grid gap-6">
                    <div className="rounded-2xl shadow p-4 border">
                        <h3 className="text-xl font-bold">Real-Time Data Pipeline</h3>
                        <p className="mt-2">Built a streaming pipeline using Kafka, Spark Streaming, and Snowflake to ingest and process real-time events. Reduced reporting delay from hours to minutes.</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                            <li>Tech stack: Kafka, Spark, Snowflake, Airflow</li>
                            <li>Handled schema evolution and late-arriving data gracefully</li>
                            <li>Designed with scalability and fault tolerance in mind</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl shadow p-4 border">
                        <h3 className="text-xl font-bold">Cost Optimization on Snowflake</h3>
                        <p className="mt-2">Now I'm working on implementing a system to detect idle virtual warehouses and automatically suspend them, that reducing compute costs by 40%.</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                            <li>Used Python SDK and Snowflake Query History API</li>
                            <li>Deployed as a serverless AWS Lambda function</li>
                            <li>Added Slack notifications and logging with CloudWatch</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Blog</h2>
                <div className="grid gap-6">
                    {posts.map((post, index) => (
                        <div key={index} className="rounded-2xl shadow p-4 border">
                            <h3 className="text-xl font-bold">{post.title}</h3>
                            <p className="text-sm text-gray-600">📅 {post.date}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="mb-4">I’m a data engineer with a passion for clean architecture and automation. Experienced with modern data stacks like Spark, Airflow, dbt, and Snowflake. Currently exploring real-time systems and data observability tools.</p>
                <p className="text-base text-gray-700">I believe in writing code that not only works, but is also easy to maintain and scale. I enjoy mentoring others, contributing to open source, and staying on top of trends in the data ecosystem like Data Contracts, Iceberg/Delta, and DataOps automation.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p>📧 your.email@example.com</p>
                <p>🔗 <a href="https://www.linkedin.com/in/liam-nomad/" className="text-blue-600">LinkedIn</a> | <a href="https://github.com/liamnomad" className="text-blue-600">GitHub</a></p>
            </section>

            <footer className="mt-20 text-sm text-center text-gray-500">
                © {new Date().getFullYear()} [Your Name]. Last updated: {new Date().toLocaleDateString()}
            </footer>
        </main>
    );
}
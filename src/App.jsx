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

      <footer className="mt-20 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} [Your Name]. Last updated: {new Date().toLocaleDateString()}
      </footer>
    </main>
  );
}

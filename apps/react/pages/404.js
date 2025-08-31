import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container">
      <h1>Page Not Found</h1>
      <p className="lead">The page you requested does not exist.</p>
      <p><Link href="/">Go back home</Link></p>
    </main>
  );
}

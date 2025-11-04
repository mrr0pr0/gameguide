import Link from 'next/link';

export default function IGNNordic() {
  return (
    <div>
      <h1>My App</h1>
      <Link href="/other/page">
        <a>Go to Other Page</a>
      </Link>
    </div>
  );
}
import Link from 'next/link';

export default function IGNNordic() {
  return (
    <div>
      <h1>My App</h1>
      <a href="/app/firstpage/page.tsx">Go to Other Page</a>
      <style jsx>{`
        a {
          color: blue;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
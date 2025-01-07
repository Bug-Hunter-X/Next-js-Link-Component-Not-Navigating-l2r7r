```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
}

// Ensure that the /about page exists (pages/about.js)
export default MyComponent; 
```
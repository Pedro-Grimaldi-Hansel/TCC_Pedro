import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/auth/login">Login</Link>
      <Link href="/auth/signin">Sign In</Link>
    </main>
  )
}

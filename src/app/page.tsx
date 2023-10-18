import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <div className="">
        <Link href="/auth/login">Login</Link>
      </div>
      <div className="">
        <Link href="/auth/signUp">Sign Up</Link> 
      </div>
      <div className="">
        <Link href="/content/backEnd">BackEnd</Link>
      </div>
      <div className="">
        <Link href="/content/frontEnd">FrontEnd</Link>
      </div>
      <div className="">
        <Link href="/content/fullStack">FullStack</Link>
      </div>
      <div className="">
        <Link href="/user/x">User</Link>
      </div>
    </main>
  )
}

import Link from 'next/link'

interface UserProps {
    params:{
        id : string,
    }
}

export default function User({params} : UserProps) {
  return (
    <main>
        <h1>User: {params.id}</h1>
        <Link href="/">Home</Link>
    </main>
  )
}

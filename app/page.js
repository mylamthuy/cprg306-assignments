import Link from "next/link";

export default function Page() {
  const weeks = [2,3,4,5,6,7,8,10]
return (
  <main className="m-4 p-2">
    <h1 className="text-3xl font-bold font-mono p-2">CPRG 306: Web Development 2 - Assignments</h1>
    <ul>
    {weeks.map((week) => (
      <li key={week} className="text-xl font-mono ml-4 my-1 hover:underline hover:text-green-700">
        <Link href={`/week-${week}`}>Week {week} Assignment</Link>
      </li>
    ))}
    </ul>
  </main>
)
}
import Link from "next/link";

export default function StudentInfo() {
    let studentName = "Thuy My Lam";
    return (
    <main>
      <p>{studentName}</p>
      <p>
        <Link href="https://github.com/mylamthuy">GitHub link</Link>
      </p>
      <p>
        <Link href="../">Home</Link>
      </p>
    </main>
  );
}
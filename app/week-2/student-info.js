import Link from "next/link";

export default function StudentInfo() {
    let name = "Thuy My Lam";
    return (
    <div>
      <p>{name}</p>
      <Link href="https://github.com/mylamthuy">GitHub link</Link>
    </div>
  );
}
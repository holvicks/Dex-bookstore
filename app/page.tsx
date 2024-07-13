import Image from "next/image";
import Link from 'next/link';
import HeroDisplay from "./components/HeroDisplay";
import FeaturedBooks from "./components/FeaturedBooks";
export default function Home() {
  return (
   <main className="bg-gray-50">
    <HeroDisplay />

{/* category*/}
<FeaturedBooks /> 


    </main>
  );
}

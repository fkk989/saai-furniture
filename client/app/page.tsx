import { HomePage, Layout } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Layout component={<HomePage />} />
    </div>
  );
}

import { HomePage, Layout } from "@/components";
import Image from "next/image";

export default function Home({ params }: { params: { location: string } }) {
  return (
    <div>
      <Layout
        location={params.location}
        component={<HomePage location={params.location} />}
      />
    </div>
  );
}

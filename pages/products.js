import Layout from "../components/layout";
import Link from "next/link"
export default function Products() {
    return <Layout>
        <Link className="bg-blue-500 rounded-md text-white py-1 px-2" href={'/products/new'}>Add new product</Link>
    </Layout>
}
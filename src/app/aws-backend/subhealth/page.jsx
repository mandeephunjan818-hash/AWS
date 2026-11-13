import Link from "next/link";
import { getSubHealth } from "@/actions/subHealth.actions";
import SubhealthTable from "./components/SubhealthTable";

export default async function Page() {
  const { data } = await getSubHealth();
  return (
    <>
      <div className="dashboard-header">
        <h3>Sub Health Care</h3>
        <Link href="/aws-backend/subhealth/add">Add Sub Health Care</Link>
      </div>
      <SubhealthTable subHealth={data} />
    </>
  );
}

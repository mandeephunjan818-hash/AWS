import Link from "next/link";

import HealthTable from "./components/HealthTable";
import { getHealth } from "@/actions/health.actions";

export default async function Page() {
  const { data } = await getHealth();
  return (
    <>
      <div className="dashboard-header">
        <h3>Health Care</h3>
        <Link href="/aws-backend/health/add">Add Health Care</Link>
      </div>
      <HealthTable health={data} />
    </>
  );
}

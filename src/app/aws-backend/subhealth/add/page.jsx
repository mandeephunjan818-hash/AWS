import DashboardHeader from "@/lib/DashboardHeader";
import { getHealthNames } from "@/actions/health.actions";
import SubHealthForm from "../components/SubHealthForm";

export default async function SubHealthAddPage(){
    const {data} = await getHealthNames();
    return (
        <>
            <DashboardHeader text="Add Subhealth" url="/aws-backend/subhealth" />
            <SubHealthForm initialData={null} categories={data} />
        </>
    )
}
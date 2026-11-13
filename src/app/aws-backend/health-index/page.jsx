import { getHealthIndex } from "@/actions/healthIndex.actions";
import HealthIndexForm from "./components/HealthIndexForm";

export default async function healthIndexPage(){
    const {healthIndex: data} = await getHealthIndex()    
    return <>
        <div className="dashboard-header"><h3>Health Care Index</h3></div>
        <HealthIndexForm initialData={data} />
    </>
}
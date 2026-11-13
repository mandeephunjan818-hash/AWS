"use server"

import dbConnect from "@/lib/db";
import HealthIndex from "@/models/healthIndex.model";
import { revalidatePath } from "next/cache";

export async function getHealthIndex() {
    try {
        await dbConnect();
        const healthIndex = await HealthIndex.findOne().lean();
        const serializedHealthIndex = {
            ...healthIndex,
            _id: healthIndex?._id?.toString(),
        };
        return { success: true, healthIndex: serializedHealthIndex };
    } catch (error) {
            return { error: error.message || "An unexpected error occurred" };
    }
}

export async function updateHealthIndex(data) {
    try {
        await dbConnect();
        const healthIndexContent = await HealthIndex.findOne({}).lean();
        if(!healthIndexContent) {
            await HealthIndex.create(data);
        }else{
            await HealthIndex.findByIdAndUpdate(healthIndexContent._id, data);
        }   
        const serializedHealthIndex = {
            ...data,
            _id: healthIndexContent?._id?.toString(),
        };
        revalidatePath("/aws-backend/health-index");
        revalidatePath("/health-care");
        return { success: true, healthIndex: serializedHealthIndex };
    } catch (error) {
            return { error: error.message };
    }
}
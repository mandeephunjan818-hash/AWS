"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import Health from "@/models/health.model";

export async function getHealth() {
  try {
    await dbConnect();
    const health = await Health.find({}).lean();
    const serializedHealth = health.map((healths) => {
      return {
        ...healths,
        _id: healths?._id?.toString(),
      };
    });
    return { success: true, data: serializedHealth };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function createHealth(formData) {
  try {
    await dbConnect();
    await Health.create(formData);
    revalidatePath("/aws-backend/health");
    revalidatePath("/","layout");
    revalidatePath("/aws-backend/health")
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateHealth(id, data) {
  try {
    await dbConnect();
    await Health.findByIdAndUpdate(id, data);
    revalidatePath("/aws-backend/health");
    revalidatePath("/","layout");
    revalidatePath("/aws-backend/subhealth")
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteHealth(id) {
  try {
    await dbConnect();
    await Health.findByIdAndDelete(id);
    revalidatePath("/aws-backend/health");
    revalidatePath("/","layout");
    revalidatePath("/aws-backend/subhealth")
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getHealthById(id) {
  try {
    await dbConnect();
    const health = await Health.findById(id).lean();
    if (!health) {
      return { success: false, error: "Health not found" };
    }
    const serializedHealth = {
      ...health,
      _id: health?._id?.toString(),
    };
    return { success: true, data: serializedHealth };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getHealthNames() {
  try {
    await dbConnect();
    const health = await Health.find({}).select("slug heading").lean();
    const serializedHealth = health.map((healths) => {
      return {
        ...healths,
        _id: healths?._id?.toString(),
      };
    });
    return { success: true, data: serializedHealth };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getHealthBySlug(slug){
  try{
    await dbConnect();
    const health = await Health.findOne({slug}).lean();
    if(!health){
      return {success: false, error: "Healths not found"}
    }
    const serializedHealth = {
      ...health,
      _id: health?._id?.toString(),
    }
    return {success: true, data: serializedHealth}
  }catch(error){
    return {success: false, error: error.message}
  }
}
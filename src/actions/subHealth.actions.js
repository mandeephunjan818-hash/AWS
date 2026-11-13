"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import SubHealth from "@/models/subHealth.model";

export async function getSubHealth() {
  try {
    await dbConnect();
    const subHealth = await SubHealth.find({}).lean();
    const serializedSubHealth = subHealth.map((subhealth) => {
      return {
        ...subhealth,
        _id: subhealth?._id?.toString(),
      };
    });
    return { success: true, data: serializedSubHealth };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function createSubHealth(formData) {
  console.log("data coming", formData)
  try {
    await dbConnect();
    const datacreated = await SubHealth.create(formData);
    console.log("data created", datacreated)
    revalidatePath("/aws-backend", "layout");
    revalidatePath("/", "layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateSubHealth(id, data) {
  try {
    await dbConnect();
    await SubHealth.findByIdAndUpdate(id, data);
    revalidatePath("/aws-backend", "layout");
    revalidatePath("/", "layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteSubHealth(id) {
  try {
    await dbConnect();
    await SubHealth.findByIdAndDelete(id);
    revalidatePath("/aws-backend", "layout");
    revalidatePath("/", "layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getSubHealthById(id) {
  try {
    await dbConnect();
    const subHealth = await SubHealth.findById(id).lean();
    if (!subHealth) {
      return { success: false, error: "SubHealth not found" };
    }
    const serializedSubHealth = {
      ...subHealth,
      _id: subHealth?._id?.toString(),
    };
    return { success: true, data: serializedSubHealth };
  } catch (error) {
    return { success: false, error: error.message };
  }
}


export async function getSubHealthBySlug(slug) {
  try {
    await dbConnect();
    const subHealth = await SubHealth.find({ category: slug }).lean();

    if (!subHealth) {
      return { success: false, error: "SubHealth not found" };
    }

    const serializedSubHealth = subHealth.map((sub) => {
      return {
        ...sub,
        _id: sub?._id?.toString(),
      };
    });

    return { success: true, data: serializedSubHealth };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getSubHealthBySlugCategory(slug) {
  try {
    await dbConnect();
    const data = await SubHealth.findOne({ slug: slug.slug }).lean();

    if (!data) {
      return { success: false, error: "Business Funding not found" };
    }

    const result = [data].filter((items) => {
      if (items.category === slug.category) return items;
    })

    return { success: true, data: result[0] || null };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getEachSubHealth(slug) {
  try {
    await dbConnect();
    const subHealth = await SubHealth.findOne({ slug }).lean();
    if (!subHealth) {
      return { success: false, error: "SubHealth not found" }
    }
    const serializedSubHealth = {
      ...subHealth,
      _id: subHealth?._id?.toString(),
    }
    return { success: true, data: serializedSubHealth }
  } catch (error) {
    return { success: false, error: error.message }
  }
}
"use client";
import { deleteHealth } from "@/actions/health.actions";
import DataTable from "@/lib/DataTable";
import DeleteModal from "@/lib/DeleteModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

export default function HealthTable({ health }) {
  const [healthToDelete, setHealthToDelete] = useState(null);
  const columns = [
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }) => (
        <div className="dashboard-table-image">
          <Image src={row.original.image} fill alt="alt" />
        </div>
      ),
    },
    {
      header: "Heading",
      accessorKey: "heading",
      cell: ({ row }) => (
        <span className="dashboard-table-value">{row.original.heading}</span>
      ),
    },
    {
      header: () => <div className="text-right">Actions</div>,
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="dashboard-table-actions">
          <Link
            prefetch={true}
            href={`/aws-backend/health/edit/${row.original._id}`}
            className="dashboard-edit-button"
          >
            <BiPencil />
          </Link>
          <button
            onClick={() => setHealthToDelete(row.original)}
            className="dashboard-delete-button"
          >
            <BiTrash />
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
      <DataTable
        data={health}
        columns={columns}
        searchPlaceholder="Search..."
      />
      <DeleteModal
        data={healthToDelete}
        setData={setHealthToDelete}
        onDelete={(id) => deleteHealth(id)}
        title="Health Care"
        description="Are you sure you want to delete this health care?"
      />
    </>
  );
}

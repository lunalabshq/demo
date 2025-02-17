import React, {useMemo, useState} from 'react';
import type {Meta, StoryObj} from "@storybook/react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/Table"
import {
    type ColumnDef,
    type ColumnFiltersState,
    getCoreRowModel, getFilteredRowModel,
    getPaginationRowModel, getSortedRowModel,
    type SortingState,
    type VisibilityState
} from "@tanstack/table-core"
import {Checkbox} from "@/components/ui/Checkbox"
import Button from "@/components/ui/Button"
import {ArrowUpDown, ChevronDown, MoreHorizontal} from "lucide-react"
import {flexRender, useReactTable} from "@tanstack/react-table"
import {Input} from "@/components/ui/Input"

const meta: Meta<typeof Table> = {
    title: "Components/Table",
    component: Table,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Table>

export const DataTable: Story = {
    render: () => {

        type Payment = {
            id: string
            amount: number
            status: "pending" | "processing" | "success" | "failed"
            email: string
        }

        const data: Payment[] = useMemo(() => [
            {
                id: "m5gr84i9",
                amount: 316,
                status: "success",
                email: "ken99@yahoo.com",
            },
            {
                id: "3u1reuv4",
                amount: 242,
                status: "success",
                email: "Abe45@gmail.com",
            },
            {
                id: "derv1ws0",
                amount: 837,
                status: "processing",
                email: "Monserrat44@gmail.com",
            },
            {
                id: "5kma53ae",
                amount: 874,
                status: "success",
                email: "Silas22@gmail.com",
            },
            {
                id: "bhqecj4p",
                amount: 721,
                status: "failed",
                email: "carmella@hotmail.com",
            },
        ], [])

        const columns = useMemo<ColumnDef<Payment>[]>(() => [
            {
                id: "select",
                header: ({ table }) => (
                    <Checkbox
                        checked={
                            table.getIsAllPageRowsSelected() ||
                            (table.getIsSomePageRowsSelected() && "indeterminate")
                        }
                        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                        aria-label="Select all"
                        size={"sm"}
                    />
                ),
                cell: ({ row }) => (
                    <Checkbox
                        checked={row.getIsSelected()}
                        onCheckedChange={(value) => row.toggleSelected(!!value)}
                        aria-label="Select row"
                        size={"sm"}
                    />
                ),
                enableSorting: false,
                enableHiding: false,
            },
            {
                accessorKey: "status",
                header: "Status",
                cell: ({ row }) => (
                    <div className="capitalize">{row.getValue("status")}</div>
                ),
            },
            {
                accessorKey: "email",
                header: ({ column }) => {
                    return (
                        <Button
                            variant="ghost"
                            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        >
                            Email
                            <ArrowUpDown size={14} className={"ml-0.5 text-secondary"}/>
                        </Button>
                    )
                },
                cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
            },
            {
                accessorKey: "amount",
                header: () => <div className="text-right">Amount</div>,
                cell: ({ row }) => {
                    const amount = Number.parseFloat(row.getValue("amount"))

                    // Format the amount as a dollar amount
                    const formatted = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(amount)

                    return <div className="text-right font-medium">{formatted}</div>
                },
            },
            {
                id: "actions",
                enableHiding: false,
                cell: ({ row }) => {
                    const payment = row.original

                    return (
                        <Button variant="ghost" className="h-6 w-6 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal size={14}/>
                        </Button>
                    )
                },
            },
        ], [])

        const [sorting, setSorting] = useState<SortingState>([])
        const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
        const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
        const [rowSelection, setRowSelection] = useState({})

        const table = useReactTable({
            data,
            columns,
            onSortingChange: setSorting,
            onColumnFiltersChange: setColumnFilters,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
            getSortedRowModel: getSortedRowModel(),
            getFilteredRowModel: getFilteredRowModel(),
            onColumnVisibilityChange: setColumnVisibility,
            onRowSelectionChange: setRowSelection,
            state: {
                sorting,
                columnFilters,
                columnVisibility,
                rowSelection,
            },
        })

            return (
                <div className={"w-full flex flex-col space-y-2 p-32 bg-secondary"}>
                    <div className="flex items-center py-4">
                        <Input
                            placeholder="Filter emails..."
                            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                            onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
                            className="max-w-sm"
                        />
                        <Button variant="default" className="ml-auto items-center">
                            Columns
                            <ChevronDown size={16} className={"ml-1"}/>
                        </Button>
                    </div>
                    <div className="rounded-md">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(header.column.columnDef.header, header.getContext())
                                                    }
                                                </TableHead>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="h-24 text-center"
                                        >
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end space-x-2 py-4">
                        <div className="flex-1 text-xs text-tertiary">
                            {table.getFilteredSelectedRowModel().rows.length} of{" "}
                            {table.getFilteredRowModel().rows.length} row(s) selected.
                        </div>
                        <div className="space-x-2">
                            <Button
                                variant="default"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="default"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            );
    },
};
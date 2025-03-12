"use client"

import { useMemo, useState } from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel, getSortedRowModel,
    SortingState,
    VisibilityState
} from "@tanstack/table-core"
import {Button, Checkbox, Input, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "lunalabs-ui"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import {flexRender, useReactTable} from "@tanstack/react-table"
import {Project, projects } from "@/lib/mockup-data/projects"
import {StatusIcon} from "@/components/StatusIcon"
import {TopicBadge} from "@/components/TopicBadge"

export default function Projects() {

    const columns = useMemo<ColumnDef<Project>[]>(() => [
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
                    size={"sm"}>
                </Checkbox>
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
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Status
                        <ArrowUpDown size={14} className={"ml-0.5 text-secondary"}/>
                    </Button>
                )
            },
            cell: ({ row }) => <StatusIcon statusName={row.getValue("status")}/>
        },
        {
            accessorKey: "title",
            header: "Title",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("title")}</div>
            ),
        },
        {
            accessorKey: "topic",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Topic
                        <ArrowUpDown size={14} className={"ml-0.5 text-secondary"}/>
                    </Button>
                )
            },
            cell: ({ row }) => <TopicBadge topicName={row.getValue("topic")}/>,
        },
        {
            accessorKey: "deadline",
            header: () => <div className="text-right">Deadline</div>,
            cell: ({ row }) => <div className="text-right font-medium">{row.getValue("deadline")}</div>,
        },
        {
            id: "actions",
            enableHiding: false,
            cell: () => {
                return (
                    <Button variant="ghost" className="h-6 w-6 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal size={14}/>
                    </Button>
                )
            }
        }
    ], [])

    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})

    const table = useReactTable({
        data: projects,
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
            rowSelection
        }
    })

    return (
        <div className={"h-full w-full flex flex-col gap-4"}>
            <div className="flex items-center">
                <Input
                    placeholder="Filter projects..."
                    value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
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
    )
}
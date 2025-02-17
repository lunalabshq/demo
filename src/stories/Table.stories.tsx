import React from "react"
import type {Meta, StoryObj} from "@storybook/react"
import {Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter} from "@/components/ui/Table"

const meta: Meta<typeof Table> = {
    title: "Components/Table",
    component: Table,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Table>

export const Default: Story = {
    render: () => {

        const invoices = [
            {
                invoice: "INV001",
                paymentStatus: "Paid",
                totalAmount: "$250.00",
                paymentMethod: "Credit Card",
            },
            {
                invoice: "INV002",
                paymentStatus: "Pending",
                totalAmount: "$150.00",
                paymentMethod: "PayPal",
            },
            {
                invoice: "INV003",
                paymentStatus: "Unpaid",
                totalAmount: "$350.00",
                paymentMethod: "Bank Transfer",
            },
            {
                invoice: "INV004",
                paymentStatus: "Paid",
                totalAmount: "$450.00",
                paymentMethod: "Credit Card",
            },
            {
                invoice: "INV005",
                paymentStatus: "Paid",
                totalAmount: "$550.00",
                paymentMethod: "PayPal",
            },
            {
                invoice: "INV006",
                paymentStatus: "Pending",
                totalAmount: "$200.00",
                paymentMethod: "Bank Transfer",
            },
            {
                invoice: "INV007",
                paymentStatus: "Unpaid",
                totalAmount: "$300.00",
                paymentMethod: "Credit Card",
            }
        ]

        return (
            <div className={"flex flex-col space-y-2 p-32 bg-secondary"}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell>{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        )
    }
}
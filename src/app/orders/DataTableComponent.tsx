"use client";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { TablePropsTypes } from "@/lib/type";
import { useMemo, useState } from "react";
import PaginationComponent from "@/components/pagination";
import { AlertComponent } from "@/components/Alert";
import { reduceString } from "@/lib/helpers";
import moment from "moment";
import { DrawerComponent } from "@/components/Drawer";

export default function DataTableComponent() {
  const [page, setPage] = useState(1);
  // const ordersData = orders.data as Order[];
  const ordersData = useMemo(
    () => [
      {
        id: "123",
        userId: "123",
        fulfillmentStatus: "123",
        createdAt: "123",
        user: {
          id: "123asdsa",
          name: "123asdsa",
          email: "123asdsa",
          address: "123asdsa",
          emailVerified: null,
          image: null,
          createdAt: "123asdsa",
          updatedAt: "123asdsa",
        },
        lineItems: [
          {
            id: "nmn",
            orderId: "nmn",
            productId: "nmn",
            quantity: 22,
            createdAt: "nmn",
            product: {
              id: "nmn",
              name: "nmn",
              description: "nmn",
              price: 2345,
              createdAt: "nmn",
            },
          },
          {
            id: "wer",
            orderId: "nmn",
            productId: "nmn",
            quantity: 22,
            createdAt: "nmn",
            product: {
              id: "33",
              name: "nmn",
              description: "nmn",
              price: 2345,
              createdAt: "nmn",
            },
          },
          {
            id: "2345",
            orderId: "nmn",
            productId: "nmn",
            quantity: 22,
            createdAt: "nmn",
            product: {
              id: "44",
              name: "nmn",
              description: "nmn",
              price: 2345,
              createdAt: "nmn",
            },
          },
        ],
      },
    ],
    []
  );
  const orders = { isLoading: false };

  const data = useMemo(
    () =>
      ordersData
        ? ordersData.map((order, index) => ({
            id: order.id,
            s_n: index + 1,
            tracking_id: reduceString(order.id),
            customer_name: order.user.name,
            customer_address: order.user.address,
            fulfillment_status: order.fulfillmentStatus,
            date_ordered: moment(order.createdAt).format("L"),
            order_line_items: (
              <DrawerComponent key={order.createdAt} order={order} />
            ),
          }))
        : [],
    [ordersData]
  );

  return (
    <main>
      {/* heading */}
      <h2 className="text-center text-2xl py-5 font-bold sticky bg-white z-[1]">
        Mini Order Status Tracker
      </h2>

      <section className="w-[90%] m-auto border rounded-lg">
        {/* orders */}
        {orders?.isLoading ? (
          <AlertComponent label="Orders" />
        ) : (
          <DataTable columns={columns} data={data as TablePropsTypes[]} />
        )}

        {/* pagination */}
        <PaginationComponent setter={setPage} page={page} />
      </section>
    </main>
  );
}

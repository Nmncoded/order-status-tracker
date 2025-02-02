"use client";

import React, { useState } from "react";
import Pagination from "../pagination";
import { ScrollArea } from "../ui/scroll-area";
import { AlertComponent } from "../Alert";
import LineItems from "./lineItems";

export default function OrderLineItems({ orderId }: { orderId: string }) {
  const [page, setPage] = useState(1);
  const orders = { isLoading: false };

  const data = [
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
  ];

  return (
    <main>
      {/* order line items */}
      <ScrollArea className="mx-auto w-full p-5 h-96">
        {orders.isLoading ? (
          <AlertComponent label="Order Line Items" />
        ) : (
          <LineItems data={data} />
        )}
      </ScrollArea>

      {/* pagination */}
      <section className="mx-5">
        <Pagination page={page} setter={setPage} />
      </section>
    </main>
  );
}

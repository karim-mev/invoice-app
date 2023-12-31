"use client";

import { useState } from "react";
import Invoice from "./Invoice";
import InvoiceForm from "./InvoiceForm";
import { Plus } from "phosphor-react";
import Link from "next/link";

type Data = {
  data: Array<string | Number>;
};

export default function AddInvoice({ data }: Data) {
  const [addInvoice, setAddInvoice] = useState(false);

  return (
    <>
      <div className="flex items-center w-full sm:w-1/2 justify-between mb-14">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Invoices</h1>
          <p className="text-sm font-light">add your invoices here</p>
        </div>
        <div className="flex gap-4 items-center">
          <h5 className="text-sm font-bold">filter by status</h5>
          <button
            className="bg-purple-600 text-sm p-3 rounded-full font-bold hover:bg-purple-500 transition-all"
            onClick={() => setAddInvoice(!addInvoice)}
          >
            <div className="flex gap-1">
              <Plus
                size={20}
                className="bg-white text-purple-600 rounded-full"
              />
              New Invoice
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-3xl w-full sm:w-1/2">
        {data?.map((invoice: any) => (
          <div key={invoice.id}>
            <Link href={`/invoice/${invoice.id}`}>
              <Invoice
                id={invoice.id}
                // date={invoice.date}
                username={invoice.username}
                price={invoice.price}
                status={invoice.status}
              />
            </Link>
          </div>
        ))}
      </div>
      {addInvoice && (
        <>
          <div
            className="fixed w-full h-screen bg-black opacity-50 top-0 left-0"
            onClick={() => setAddInvoice(!addInvoice)}
          ></div>
          <InvoiceForm />
        </>
      )}
    </>
  );
}

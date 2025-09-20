import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

type Form = {
  clientName: string;
  clientEmail: string;
  items: { description: string; qty: number; rate: number }[];
};

export default function CreateInvoicePage() {
  const { register, control, handleSubmit } = useForm<Form>({
    defaultValues: { items: [{ description: 'Consulting Services', qty: 10, rate: 100 }] }
  });
  const { fields, append, remove } = useFieldArray({ control, name: 'items' });

  const onSubmit = (data: Form) => {
    console.log('Invoice payload', data);
    alert('Invoice JSON logged to console (mock).');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Invoice</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="panel p-4 grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-400">Client Name</label>
            <input {...register('clientName')} className="w-full mt-2 px-3 py-2 rounded-md bg-panel-lite" />
          </div>
          <div>
            <label className="text-sm text-slate-400">Client Email</label>
            <input {...register('clientEmail')} className="w-full mt-2 px-3 py-2 rounded-md bg-panel-lite" />
          </div>
        </div>

        <div className="panel p-4">
          <div className="text-sm mb-3 font-semibold">Invoice Items</div>
          <div className="space-y-3">
            {fields.map((f, i) => (
              <div key={f.id} className="grid grid-cols-12 gap-3 items-center">
                <input {...register(`items.${i}.description` as const)} placeholder="Item" className="col-span-6 px-3 py-2 rounded bg-panel-lite" />
                <input type="number" {...register(`items.${i}.qty` as const, { valueAsNumber: true })} placeholder="Qty" className="col-span-2 px-3 py-2 rounded bg-panel-lite" />
                <input type="number" {...register(`items.${i}.rate` as const, { valueAsNumber: true })} placeholder="Rate" className="col-span-2 px-3 py-2 rounded bg-panel-lite" />
                <div className="col-span-2">
                  <button type="button" onClick={() => remove(i)} className="px-3 py-2 bg-red-600 rounded">Remove</button>
                </div>
              </div>
            ))}
            <div>
              <button type="button" onClick={() => append({ description: 'New item', qty: 1, rate: 0 })} className="px-3 py-2 bg-accent rounded text-black">Add Item</button>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-accent rounded text-black">Create & Send Invoice</button>
        </div>
      </form>
    </div>
  );
}

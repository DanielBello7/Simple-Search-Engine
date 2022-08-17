


import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useData } from '../context/DataContext';

export default function AlertModal() {
  const {isAlertOpen, setAlertOpen, data} = useData();

  // return (
  // <Transition appear show={isAlertOpen} as={Fragment}>
  // <Dialog as="div" className="relative z-10" onClose={() => setAlertOpen(false)}>
  //   <Transition.Child
  //     as={Fragment}
  //     enter="ease-out duration-300"
  //     enterFrom="opacity-0"
  //     enterTo="opacity-100"
  //     leave="ease-in duration-200"
  //     leaveFrom="opacity-100"
  //     leaveTo="opacity-0"
  //     >
  //     <div className="fixed inset-0 bg-black bg-opacity-25" />
  //   </Transition.Child>

  //   <div className="fixed inset-0 overflow-y-auto">
  //   <div className="flex min-h-full items-center justify-center p-4 text-center">
  //     <Transition.Child
  //       as={Fragment}
  //       enter="ease-out duration-300"
  //       enterFrom="opacity-0 scale-95"
  //       enterTo="opacity-100 scale-100"
  //       leave="ease-in duration-200"
  //       leaveFrom="opacity-100 scale-100"
  //       leaveTo="opacity-0 scale-95"
  //     >
  //     <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
  //       <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
  //       Payment successful
  //       </Dialog.Title>
        
  //       <div className="mt-2">
  //       <p className="text-sm text-gray-500">
  //       Your payment has been successfully submitted. We’ve sent
  //       you an email with all of the details of your order.
  //       </p>
  //       </div>

  //       <div className="mt-4">
  //       <button type="button"
  //       className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
  //       onClick={() => setAlertOpen(false)}>Got it, thanks!</button>
  //       </div>
  //     </Dialog.Panel>
  //     </Transition.Child>
  //   </div>
  //   </div>
  // </Dialog>
  // </Transition>
  // );

  return (
  <Dialog open={isAlertOpen} onClose={() => setAlertOpen(false)}>
  <Dialog.Panel>
    <Dialog.Title>Deactivate account</Dialog.Title>
    <Dialog.Description>This will permanently deactivate your account</Dialog.Description>
    <p>
    Are you sure you want to deactivate your account? All of your data
    will be permanently removed. This action cannot be undone.
    </p>

    <button onClick={() => setAlertOpen(false)}>Deactivate</button>
    <button onClick={() => setAlertOpen(false)}>Cancel</button>
  </Dialog.Panel>
  </Dialog>
  );
}

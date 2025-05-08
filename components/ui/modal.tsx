import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import IconButton from "./icon-button";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} as="div" className="relative z-10">
        {/* Create backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>
        <div className="fixed inset-0 m-6  overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <TransitionChild>
              <DialogPanel className="w-full max-w-3xl  mx-6 overflow-hidden  bg-white ">
                <div className="relative flex w-full items-center overflow-hidden px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 lg:p-8">
                  <div className="absolute top-4 right-4">
                    <IconButton icon={<X size={15} />} onClick={onClose} />
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;

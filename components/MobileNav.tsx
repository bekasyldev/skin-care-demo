"use client";

import { links } from "@/constants/data";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="md:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-800"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    );
  }
  return (
    <div className="relative z-40 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex">
        <div className="w-full">
          <div className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex justify-end px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-2">
              <ul>
                {links.map((link) => (
                  <li key={link.name} className="space-y-2 px-4">
                    <div className="border-b border-gray-200">
                      <div className="-mb-px flex">
                        <p className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 py-4 text-base font-medium">
                          {link.name}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

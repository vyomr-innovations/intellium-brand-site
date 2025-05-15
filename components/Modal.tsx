"use client"
import type React from "react"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "./ui/animated-modal"
import { ContactForm } from "./ContactModalForm"

export function AnimatedModalDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black flex items-center justify-center">
      <Modal>
        <ModalTrigger className="group/modal-btn">{children}</ModalTrigger>
        <ModalBody className="h-auto zIndex-[99999] absolute">
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-white font-bold text-center mb-6">
              Get in Touch with Intellium
            </h4>
            <ContactForm />
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Close
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  )
}

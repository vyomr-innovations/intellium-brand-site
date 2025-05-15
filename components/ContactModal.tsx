"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { ContactForm } from "./ContactModalForm"
import { Button } from "./ui/button"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  // Mount check for SSR
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscapeKey)
    return () => document.removeEventListener("keydown", handleEscapeKey)
  }, [isOpen, onClose])

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      // Use a slight delay to prevent immediate closing when opening
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside)
      }, 100)

      return () => {
        clearTimeout(timer)
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [isOpen, onClose])

  if (!mounted || !isOpen) return null

  // Use createPortal to render outside the normal DOM hierarchy
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl w-full max-w-md mx-4 z-[10000] overflow-hidden animate-in fade-in zoom-in duration-300"
      >
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl text-white font-bold mb-6 text-center">Get in Touch with Intellium</h2>
          <ContactForm />
        </div>

        <div className="bg-gray-50 dark:bg-neutral-800 p-4 flex justify-end">
          <Button
            onClick={onClose}
            variant="default"
            className="px-4 py-2  hover:bg-gray-300 text-black bg-white dark:hover:bg-gray-600 rounded-md text-sm transition-colors"
          >
            Close
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

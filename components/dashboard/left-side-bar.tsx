'use client'

import { Button } from "@/components/ui/button"
import { BarChart, FileText, LayoutDashboard, MessageCircle, Settings } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Mobile Sidebar Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden m-4">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        {/* Mobile Sidebar Sheet */}
        <SheetContent side="left" className="w-[250px]">
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold">Dashboard Menu</SheetTitle>
          </SheetHeader>
          <DashbordSidebar />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:block h-screen w-[250px] border-r bg-background">
        <DashbordSidebar />
      </div>
    </div>
  )
}

export default LeftSidebar

// Sidebar Menu Content
const DashbordSidebar = () => {
  return (
    <div className="h-full px-4 py-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href="/">
          <span className="text-xl font-bold">Creative Blogs</span>
        </Link>
      </div>

      <nav className="space-y-1">
        <Link href="/dashboard">
          <Button variant="ghost" className="w-full justify-start">
            <LayoutDashboard className="h-5 w-5 mr-2" />
            Overview
          </Button>
        </Link>

        <Link href="/dashboard/articles/create">
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="h-5 w-5 mr-2" />
            Articles
          </Button>
        </Link>

        <Link href="/dashboard">
          <Button variant="ghost" className="w-full justify-start">
            <MessageCircle className="h-5 w-5 mr-2" />
            Comments
          </Button>
        </Link>

        <Link href="/dashboard">
          <Button variant="ghost" className="w-full justify-start">
            <BarChart className="h-5 w-5 mr-2" />
            Analytics
          </Button>
        </Link>

        <Link href="/dashboard">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </Button>
        </Link>
      </nav>
    </div>
  )
}

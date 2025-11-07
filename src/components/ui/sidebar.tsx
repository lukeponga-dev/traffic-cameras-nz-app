
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

type SidebarContext = {
  open: boolean
  setOpen: (open: boolean) => void
  isMobile: boolean
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [_open, _setOpen] = React.useState(defaultOpen)
    
    // On mobile, default to closed
    const open = openProp ?? (isMobile ? _open && defaultOpen : _open);
    
    const setOpen = React.useCallback(
      (value: boolean) => {
        if (setOpenProp) {
          setOpenProp(value)
        } else {
          _setOpen(value)
        }
      },
      [setOpenProp]
    )

    // Close sidebar on mobile when resizing from desktop
    React.useEffect(() => {
        if (!isMobile) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [isMobile, setOpen])


    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        open,
        setOpen,
        isMobile,
      }),
      [open, setOpen, isMobile]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
          <div
            className={cn("group/sidebar-wrapper", className)}
            ref={ref}
            {...props}
          >
            {children}
          </div>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
  }
>(
  (
    {
      side = "left",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, open, setOpen } = useSidebar()

    if (isMobile) {
      return (
        <Sheet open={open} onOpenChange={setOpen} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-full max-w-md bg-background/80 backdrop-blur-sm p-0 text-foreground border-border/60"
            side={side}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Camera List</SheetTitle>
              <SheetDescription>A list of available traffic cameras. You can search, filter, and select a camera to view its details on the map.</SheetDescription>
            </SheetHeader>
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <aside
        ref={ref}
        className={cn(
          "group peer z-20 hidden md:block text-foreground absolute top-0 h-full transition-transform duration-300 ease-in-out",
          "w-96",
          side === "left" ? "left-0" : "right-0",
          open ? 'translate-x-0' : (side === 'left' ? '-translate-x-full' : 'translate-x-full'),
          className
        )}
        data-state={open ? 'open' : 'closed'}
        data-side={side}
        {...props}
      >
        <div className="h-full p-4 pl-0">
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-background/80 backdrop-blur-sm border-r border-t border-b rounded-r-lg shadow-lg border-border/60"
          >
            {children}
          </div>
        </div>
      </aside>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentProps<typeof Slot> & { asChild?: boolean }
>(({ className, asChild = false, onClick, ...props }, ref) => {
  const { open, setOpen } = useSidebar();
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      data-sidebar="trigger"
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event);
        setOpen(!open);
      }}
      {...props}
    />
  );
});
SidebarTrigger.displayName = "SidebarTrigger";


const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-3 p-4", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col overflow-auto",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

export {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
}

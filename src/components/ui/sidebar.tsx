
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
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
    const [openState, setOpenState] = React.useState(defaultOpen);

    const open = openProp ?? openState;
    const setOpen = setOpenProp ?? setOpenState;

    React.useEffect(() => {
        if (isMobile) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isMobile, setOpen]);


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
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent
            side={side}
            className="w-full max-w-md bg-background/80 backdrop-blur-sm p-0 text-foreground border-border/60"
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
          "group peer z-20 hidden md:flex absolute top-16 bottom-0 transition-transform duration-300 ease-in-out",
          "w-[400px] flex-col bg-background/80 backdrop-blur-sm border-r",
          side === "left" ? "left-0" : "right-0",
          open ? 'translate-x-0' : (side === 'left' ? '-translate-x-[400px]' : 'translate-x-[400px]'),
          className
        )}
        data-state={open ? 'open' : 'closed'}
        data-side={side}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-transparent"
        >
          {children}
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

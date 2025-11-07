import * as React from "react"

import { cn } from "@/lib/utils"

const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.ComponentProps<"blockquote">
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(
      "mt-6 border-l-2 pl-6 italic text-muted-foreground",
      className
    )}
    {...props}
  />
))
Blockquote.displayName = "Blockquote"

export { Blockquote }






import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is this?</AccordionTrigger>
        <AccordionContent>
          A home page for sports betting. Find bets for upcoming games at the best odds.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why?</AccordionTrigger>
        <AccordionContent>
          Markets change by the second. Get the best odds.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>$?</AccordionTrigger>
        <AccordionContent>
          $
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className="space-y-6 mt-8">
      <h2 className="text-lg font-semibold">FAQs</h2>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            Does my card need international purchases enabled?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we recommend asking your bank to enable international purchases on your card. 
            You will be notified at checkout if international purchases need to be enabled.
            <p className="mt-4 text-sm">
              Please note, some banks may charge a small transaction fee for international orders.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Can I pay for my order with multiple methods?
          </AccordionTrigger>
          <AccordionContent>
            No, payment for Nike orders can't be split between multiple payment methods.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            What payment method is accepted for SNKRS orders?
          </AccordionTrigger>
          <AccordionContent>
            You can use any accepted credit card to pay for your SNKRS order.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

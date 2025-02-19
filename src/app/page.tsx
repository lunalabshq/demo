import React from "react"
import {Accordion, AccordionContent, AccordionItem} from "lunalabs-components/src/components/Accordion"

export default function Page() {
    return (
        <div>
            <Accordion type="single" collapsible className="w-96">
                <AccordionItem value="item-1" title={"Is it accessible?"}>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" title={"Is it styled?"}>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" title={"Is it animated?"}>
                    <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getHomeContent } from "@/content/home";

const { pricing } = getHomeContent();

export const LayoutPricingSection = () => {
  if (!pricing || pricing.plans.length === 0) return null;

  // LeadFlow is for internal use only—show company access info and disable pricing plans
  return (
    <section id="pricing" className="container py-24 sm:py-32 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-lg text-primary mb-2 tracking-wider">
          {pricing.eyebrow}
        </h2>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {pricing.heading}
        </h2>

        <h3 className="md:w-3/4 mx-auto text-xl text-muted-foreground mb-8">
          {pricing.subtitle}
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-8">
        {pricing.plans.map((plan) => (
          <Card
            key={plan.title}
            className={
              "flex flex-1 flex-col p-8 border bg-muted/70 dark:bg-card shadow-none max-w-md mx-auto " +
              (plan.popular ? "border-primary/90 ring-2 ring-primary/40" : "")
            }
          >
            <CardHeader className="text-xl font-semibold">
              {plan.title}
              {plan.popular && (
                <span className="ml-2 text-xs text-primary align-middle px-2 py-0.5 rounded bg-primary/15">Company Access</span>
              )}
            </CardHeader>
            <CardContent className="text-muted-foreground text-base mb-4">{plan.description}</CardContent>
            <p className="font-bold mb-2 text-primary">{plan.price === 0 ? "Free for Staff" : `₹${plan.price}${pricing.priceSuffix}`}</p>
            <ul className="mb-4 text-sm text-muted-foreground space-y-1 list-disc list-inside">
              {plan.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <button
              className="w-full font-medium rounded px-4 py-2 bg-primary/80 text-background opacity-70 pointer-events-none"
              disabled
              aria-disabled
            >
              {plan.buttonText}
            </button>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-xs text-muted-foreground">
        LeadFlow is for exclusive company staff. No public signup or billing options.
      </div>
    </section>
  );
};
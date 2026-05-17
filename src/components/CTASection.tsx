import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

export function CTASection() {
  return (
    <section className="gradient-brand text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          eyebrow="Next step"
          title="Request a System Assessment"
          subtitle="Tell us about your agency or business. We'll qualify the fit and recommend the right path — OpsCore, GovFlow, or a scoped entry module."
          light
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/contact" variant="secondary">
            Book a Call
          </Button>
          <Button to="/solutions" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-websleek-blue">
            View Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}

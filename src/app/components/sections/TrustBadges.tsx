export default function TrustBadges() {
  return (
    <section className="bg-background py-8 px-4 border-b">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 text-center">
        {[
          { icon: "✅", title: "100% Trustable", desc: "Thousands of happy customers across India" },
          { icon: "🚚", title: "Fast & Safe Delivery", desc: "Pan-India shipping with tracking" },
          { icon: "🏭", title: "We Are the Manufacturer", desc: "In-house production for best pricing & quality" },
          { icon: "💯", title: "Premium Service", desc: "Quick support & 5-star rated service" },
        ].map(({ icon, title, desc }, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            <div>
              <h4 className="text-lg font-semibold text-primary">{title}</h4>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

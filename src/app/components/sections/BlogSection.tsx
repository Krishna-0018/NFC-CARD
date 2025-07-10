import Image from "next/image"

export default function BlogSection() {
  const blogs = [
    {
      title: "Corporate sustainability with the CSR performance ladder",
      excerpt: "Sustainability has long since ceased to be a luxury, but a requirement to remain relevant.",
    },
    {
      title: "Everything you need to know about ESG legislation",
      excerpt: "Governments are setting stricter rules to encourage sustainable business practices...",
    },
    {
      title: "7 inspiring green companies doing sustainable business",
      excerpt: "Many organizations are choosing sustainability to reduce environmental impact...",
    },
  ]

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
          Don’t miss anything and read all about NFC
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <Image src="/blog-1.jpg" alt={blog.title} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{blog.title}</h3>
                  <p className="text-sm text-muted-foreground">{blog.excerpt}</p>
                </div>
                <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-b-xl rounded-t-md hover:bg-teal-700 transition">
                  Read article
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="/blogs">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
              See all our blogs
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="bg-[#e6f8fc] py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/nfc-about.png"
            alt="NFC Card Demo"
            width={800}
            height={600}
            className="rounded-xl object-cover w-full h-auto shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 md:p-10 rounded-2xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">About NFC World</h2>
          <p className="text-gray-700 mb-6">
            In 2018, two entrepreneurs discovered the power of <span className="text-blue-600">NFC technology</span>. A passion was immediately born.
            Our mission: make the world familiar with NFC. We deliver high-quality NFC products with fast shipping and support.
          </p>
          <Link href="/about">
            <button className="px-5 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition">
              About us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

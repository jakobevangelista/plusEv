import ClientHero from "@/components/clientHero";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [{ name: "Contact", href: "#contact" }];

export default function Example() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src="/squareCircleLogo.svg"
                  alt=""
                  width={50}
                  height={50}
                />
              </a>
            </div>
            <ClientHero />
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </header>
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Next-Gen Software for Forward-Thinking Businesses
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Crafting Solutions That Drive Innovation and Growth.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://cal.com/jakobevangelista/30min"
                    className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Schedule a Call
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Contact <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <Image
                src="/squareCircleLogo.svg"
                alt=""
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

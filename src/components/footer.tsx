import Link from "next/link";

const navigation = [
  //   {
  //     name: "Email",
  //     href: "mailto:jakobevangelista@gmail.com",
  //     icon: () => (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         aria-hidden="true"
  //         strokeLinejoin="round"
  //         className={"lucide lucide-mail h-6 w-6"}
  //       >
  //         <rect width="20" height="16" x="2" y="4" rx="2" />
  //         <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  //       </svg>
  //     ),
  //   },

  {
    name: "GitHub",
    href: "https://github.com/jakobevangelista/plusEv",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-github"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023 PlusEv Solution All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

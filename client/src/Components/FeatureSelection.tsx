export default function FeatureSelection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-8 bg-gradient-to-br from-purple-50 via-white to-purple-50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Text Section */}
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800">
                            Why Choose Us
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                            The Best Way to Find Your Perfect Stay
                        </h2>
                        <p className="text-gray-500 md:text-xl">
                            We offer a seamless booking experience with thousands of verified properties around the world.
                        </p>
                        <ul className="grid gap-4">
                            {[
                                "Verified listings with high-quality photos",
                                "Secure payments and booking protection",
                                "24/7 customer support",
                                "Best price guarantee",
                            ].map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 w-4 text-purple-700"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <button className="px-4 py-2 rounded-md text-white font-medium bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 transition">
                                Get Started
                            </button>
                            <button className="px-4 py-2 rounded-md border border-purple-200 text-purple-700 hover:bg-purple-50 transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src="https://www.v-hotels.in/assets/site-images/blogs/3.png"
                            alt="Feature"
                            width={500}
                            height={400}
                            className="rounded-lg object-cover shadow-xl transition-all transform hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

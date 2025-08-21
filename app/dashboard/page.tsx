"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, User, LogOut, X } from "lucide-react";
import {
    signOut,
    onAuthStateChanged,
    User as FirebaseUser,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import { toast } from "sonner";

import Image from "next/image";
import { link } from "fs";
import { div } from "framer-motion/client";

interface card {
    id: number
    image: string;
    title: string;
    description: string;
    Link: string;
    amount: string
};

const cardItems: card[] = [

    { id: 1, image: "/task3.webp", title: "Metamine", description: "This project is designed to [state the purpose — e.g., solve a problem, create a product, build a platform].", Link: "/apply_form", amount: "$5 / per task" },
    { id: 2, image: "/tasks2.webp", title: "Lumin", description: "This project is designed to [state the purpose — e.g., solve a problem, create a product, build a platform].", Link: "/apply_form", amount: "$8 / per task" },
    { id: 3, image: "/tasks1.webp", title: "Evalo", description: "This project is designed to [state the purpose — e.g., solve a problem, create a product, build a platform].", Link: "/apply_form", amount: "$9 / per task" },
     { id:4, image: "/task4.webp", title: "Echo IQ", description: "This project is designed to [state the purpose — e.g., solve a problem, create a product, build a platform].", Link: "/apply_form", amount: "$9 / per task" }
];

interface SidebarLink {
    name: string;
    href: string;
}

const sidebarLinks: SidebarLink[] = [
    { name: "Home", href: "/dashboard" },
    { name: "Training", href: "/#" },
    { name: "Active project", href: "/#" },
    { name: "Task history", href: "/#" },
    { name: "Payment", href: "/#" },
];

const Page = () => { 
    useEffect(() => {
        document.documentElement.classList.remove("dark");
    }, []);
    const router = useRouter();

    // Auth state and loading state
    const [user, setUser] = useState<FirebaseUser | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (!firebaseUser) {
                router.replace("/login"); // Redirect if not logged in
            } else {
                setUser(firebaseUser);
            }
        });
        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success(`Logout successful: (${user?.displayName || "Profile"})`);
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        } catch (error) {
            console.error("Logout failed:", error);
            alert("Failed to logout. Please try again.");
        }
    };

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>("Home");
    const [isDesktop, setIsDesktop] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 768);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isDesktop) {
            setSidebarOpen(false);
        }
    }, [isDesktop]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        }
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen]);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setDropdownOpen(false);
                setSidebarOpen(false);
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const sidebarVisible = isDesktop || sidebarOpen;

    // While checking auth, show loading UI

    // If no user (should redirect already), render nothing to avoid flicker
    if (!user) {
        return null;
    }

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden bg-white">
            <AnimatePresence>
                {sidebarOpen && !isDesktop && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSidebarOpen(false)}
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>

            <motion.aside
                initial={{ x: -280 }}
                animate={{ x: sidebarVisible ? 0 : -280 }}
                transition={{ type: "spring", stiffness: 250, damping: 30 }}
                className="fixed top-0 left-0 z-20 w-64 bg-white shadow-md h-screen p-6 flex flex-col overflow-y-auto md:relative"
            >
                <div className="text-2xl font-extrabold mb-8 bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">Wealthpath</div>
                <nav className="flex flex-col space-y-3 flex-1">
                    {sidebarLinks.map(({ name, href }) => (
                        <a
                            key={name}
                            href={href}
                            onClick={() => {
                                setActiveLink(name);
                                setSidebarOpen(false);
                            }}
                            className={`block px-4 py-2 rounded-md font-medium transition-colors ${activeLink === name
                                ? "bg-green-700"
                                : "text-gray-700 hover:bg-green-100 hover:text-black"
                                }`}
                        >
                            {name}
                        </a>
                    ))}
                </nav>
                <div className="text-xs text-gray-400 mt-auto">
                    © {new Date().getFullYear()}. All Rights Reserved
                </div>
            </motion.aside>

            <div className="flex-1 flex flex-col ml-0 md:ml-20 overflow-y-auto">
                <header className="flex items-center justify-between bg-white shadow px-6 py-3 sticky top-0 z-30">
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-gray-200"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
                    >
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200"
                        >
                            <User className="h-6 w-6 text-green-700" />
                            <span className="font-medium text-gray-700">
                                
                                {user?.displayName || "Profile"}
                            </span>
                        </button>
                        <AnimatePresence>
                            {dropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-6 mt-3 w-fit bg-white shadow-lg rounded-md z-40 sm:left-5 mt-3"
                                >
                                    {user?.email && (
                                        <div className="px-4 py-2 text-sm text-gray-500 border-b">
                                            {user.email}
                                            <p>Status: <span className="text-green-800">Active</span></p>
                                        </div>

                                    )}

                                    <button
                                        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        onClick={handleLogout}
                                    >
                                        <LogOut className="w-5 h-5 mr-2" />
                                        Logout
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </header>
                <div >
                    <h1 className="text-center font-medium text-xl mt-5 text-gray-800 font-semibold">Avaliable Projects</h1>

                
                <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-3 gap-8 p-6 mt-7 ">
                    {cardItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image
                                className="rounded-t-xl object-cover"
                                src={item.image}
                                height={300}
                                width={600}
                                alt={item.title}
                            />

                            <div className="p-5">
                                <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
                                <p className="mt-3 text-gray-600 leading-relaxed text-md">{item.description}</p>

                                <hr className="my-4 border-gray-200" />

                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-green-700">{item.amount}</span>
                                    <Link
                                        href={item.Link}
                                        className="text-sm font-medium text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        Apply Here
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>






            </div>
        </div>
        </div>
    );
};

export default Page;

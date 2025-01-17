'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FixedSearchBar() {
    const router = useRouter();

    const handleSearchClick = () => {
        router.push('/search', {scroll:false});
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-4 relative">
            <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <input
                        type="text"
                        value="상품 검색하기..."
                        readOnly
                        className="w-full pl-12 pr-10 py-3 rounded-full border border-transparent shadow-md
                                backdrop-blur-md bg-white/80 dark:bg-black/80
                                text-gray-800 dark:text-gray-100
                                placeholder-gray-500 
                                focus:outline-none focus:ring-2 focus:ring-primary/50
                                cursor-pointer
                                transition-all duration-300 ease-in-out"
                        onClick={handleSearchClick}
                    />
                </div>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-primary animate-pulse"/>
                </div>
                <motion.button
                    onClick={handleSearchClick}
                    className="absolute inset-y-0 right-0 pr-2 flex items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
                        <div className="relative bg-primary text-white rounded-full p-2 hover:bg-primary/90 transition-colors duration-300">
                            <Search className="h-4 w-4"/>
                        </div>
                    </div>
                </motion.button>
            </motion.div>
        </div>
    );
}

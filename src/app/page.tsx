'use client'

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import FixedSearchVideoSearchBar from "@/components/home/fixed-search-bar";
import Loading from '../components/loading';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center px-4 sm:px-0  bg-gradient-to-br from-violet-100 via-blue-100 to-green-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
            <main className="-mt-20 relative z-10">
                <section className="container mx-auto py-4 text-center">
                    <motion.h1
                        variants={fadeDownVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 0.5}}
                        className="text-xl sm:text-3xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-200"
                    >
                        musins<span className="text-purple-500">ai</span>
                    </motion.h1>
                </section>

                <Suspense fallback={<Loading />}>
                    <section className="container mx-auto py-4 text-center">
                        <motion.div
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{duration: 0.5, delay: 0.4}}
                        >
                            <FixedSearchVideoSearchBar />
                        </motion.div>
                    </section>
                </Suspense>

                <section className="container mx-auto py-4 text-center">
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                    >
                        musinsa ai review
                    </motion.p>
                </section>
            </main>
        </div>
    );
}

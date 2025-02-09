'use client'

import { AuroraBackground } from "@/components/ui/aurora-background";
import { GlowEffect } from "@/components/ui/glow-effect";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-7xl font-bold dark:text-white">
          musins<span className="text-purple-500">ai</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          사용자 후기 바탕 검색 플랫폼
        </p>
        <div className="flex gap-4 mt-8">
          <div className="relative">
            <GlowEffect
              colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
              mode="colorShift"
              blur="soft"
              duration={3}
              scale={0.9}
            />
            <Link
              href="/search"
              className="relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-6 py-2.5 text-base text-zinc-50 outline outline-1 outline-[#fff2f21f] hover:opacity-90 transition-opacity"
            >
              검색하기
            </Link>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

"use client"
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from 'framer-motion';

const FormSchema = z.object({
    query: z.string().min(1, {
        message: "1자 이상의 검색어를 넣어주세요.",
    }),
});

export default function SearchVideoSearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            query: "",
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        toast(data.query + " 검색 중 ...");
        router.push(`/search/${data.query}`, {scroll:false});
    }

    return (
        <>
            <AnimatePresence>
                {isFocused && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
                        onClick={() => setIsFocused(false)}
                    />
                )}
            </AnimatePresence>
            <div className={`w-full max-w-3xl mx-auto p-4 relative ${isFocused ? 'z-40' : 'z-0'}`}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
                        <FormField
                            control={form.control}
                            name="query"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <motion.div
                                            className="relative"
                                            animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        >
                                            <div className="relative group">
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                                <Input
                                                    type="search"
                                                    placeholder="상품 검색..."
                                                    className={`w-full pl-12 pr-10 py-3 rounded-full border transition-all duration-300 ease-in-out
                                                    ${isFocused
                                                        ? 'border-primary/50 shadow-lg shadow-primary/20'
                                                        : 'border-transparent shadow-md'
                                                    } 
                                                    backdrop-blur-md bg-white/80 dark:bg-black/80
                                                    text-gray-800 dark:text-gray-100
                                                    placeholder-gray-500 
                                                    focus:outline-none focus:ring-2 focus:ring-primary/50
                                                    relative`}
                                                    onFocus={() => setIsFocused(true)}
                                                    {...field}
                                                />
                                            </div>
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Search className="h-5 w-5 text-primary animate-pulse"/>
                                            </div>
                                            <motion.button
                                                type="submit"
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
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </div>
        </>
    )
}

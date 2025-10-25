import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

const routes = ["About", "Projects","Contact"];

export const MyHamburger = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));

    return (
        <div ref={ref} className="md:hidden pointer-events-auto">
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-background border-b border-b-white/20"
                    >
                        <ul className="grid gap-2">
                            {routes.map((route, idx) => {

                                return (
                                    <motion.li
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + idx / 10,
                                        }}
                                        key={route}
                                        className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-200 via-neutral-100 to-neutral-300 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950"
                                    >
                                        <a
                                            onClick={() => setOpen((prev) => !prev)}
                                            className={
                                                "flex items-center justify-between w-full p-5 rounded-xl bg-background hover:bg-accent/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                                            }
                                            href={`#${route.toLowerCase()}`}
                                        >
                                            <span className="flex gap-1 text-lg">{route}</span>
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
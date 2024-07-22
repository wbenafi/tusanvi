import { motion } from "framer-motion";
import type React from "react";

export default function SocialMediaButton({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="size-14 p-1.5 bg-white rounded-xl text-gray-900 cursor-pointer"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </motion.a>
  );
}

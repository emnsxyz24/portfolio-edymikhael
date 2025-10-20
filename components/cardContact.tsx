import { Link } from "@heroui/link";
import React from "react";

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  href: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  href,
}) => {
  return (
    <Link
      isExternal
      className="w-full rounded-lg bg-white/5 p-4 transition-colors 
                 hover:border-[#b185c5] 
                 dark:hover:border-[#273463]
                 shadow-lg"
      href={href}
    >
      <div className="flex items-center gap-4">
        <Icon className="h-8 w-8 text-gray-400" />
        <div className="flex flex-col">
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

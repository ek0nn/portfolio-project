"use client";

import React from 'react'
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
      title: "Keeb",
      href: "/docs/primitives/alert-dialog",
      description:
        "A Full Stack e commerce application. Built with the MERN stack and Redux for state management.",
    },
    {
      title: "QuizAbot",
      href: "/docs/primitives/hover-card",
      description:
        "Ai Generated Quiz website. Built with Next.js and Tailwind CSS. Hosted on Vercel.",
    },
    {
      title: "View all -->",
      href: "/docs/primitives/progress",
      description:
        "",
    },
    
  ]

const Navbar = () => {
  return (
    <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 sm:w-[250px] lg:w-[400px] lg:grid-cols-[.75fr_1fr] rounded ">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Hi 👋
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground w-full">
                    My name is Sadhak, and I am a Full-stack developer that has just graduated with a BSc in Computer Science.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 sm:w-[250px] lg:w-[400px] lg:grid-cols-[.75fr_1fr] rounded ">
            {components.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact me
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default Navbar
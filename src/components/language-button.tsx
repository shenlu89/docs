// src/components/LanguageDropdown.tsx

'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Check, Languages } from 'lucide-react';

import { cn } from '@/lib/utils'; // Make sure you have this utility function
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Define our supported languages
const locales = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '简体中文' },
];

export function LanguageButton() {
  const pathname = usePathname();

  /**
   * Determines the current locale based on the URL pathname.
   * - If the path starts with '/zh', the locale is 'zh'.
   * - Otherwise, it defaults to 'en'.
   */
  const getCurrentLocale = () => {
    return pathname.startsWith('/zh') ? 'zh' : 'en';
  };

  const currentLocale = getCurrentLocale();

  /**
   * Generates the redirected path for a given target locale.
   * @param targetLocale The code of the language to switch to (e.g., 'en', 'zh').
   * @returns The new URL path.
   */
  const getRedirectedPathname = (targetLocale: string) => {
    if (!pathname) return '/';

    // If we're already on the target locale, no need to change anything
    if (currentLocale === targetLocale) {
      return pathname;
    }

    // Handle switching from Chinese to English
    // e.g., /zh/getting-started -> /getting-started
    if (currentLocale === 'zh' && targetLocale === 'en') {
      return pathname.replace('/zh', '') || '/'; // Fallback to '/' for the homepage
    }

    // Handle switching from English to Chinese
    // e.g., /getting-started -> /zh/getting-started
    if (currentLocale === 'en' && targetLocale === 'zh') {
      return `/${targetLocale}${pathname}`;
    }

    // Fallback for any other cases (though not expected with current setup)
    return pathname;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Languages className="size-5 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale.code} asChild>
            <Link
              href={getRedirectedPathname(locale.code)}
              // Prevent prefetching pages in a language the user might not select
              prefetch={false}
              className="flex items-center justify-between w-full"
            >
              <span>{locale.name}</span>
              {/* Add a checkmark for the currently active language */}
              {currentLocale === locale.code && (
                <Check className="h-4 w-4" />
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

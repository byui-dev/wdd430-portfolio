'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function ProjectSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    const handlesearch = useDebouncedCallback((term: string) => {
        const params = newURLSearchParams(searchParams);
        params.set('page', '1'); // Always reset to page 1 on a new search
    
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`$pathname}?${params.toString()}`);
    }, 300);

    return (
        <input
            type="text"
            placeholder="Search projects..."
            onChange={(e) => handlesearch(e.target.value)}
            defaultValue={searchParams.get('query')?.toString()}
            className="border p-2 rounded w-full"
        />
    );
}  
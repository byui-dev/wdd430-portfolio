import { Suspense } from 'react';
import SchoolProjectList from '@/components/SchoolProjectList';
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton';

export default function SchoolPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>School Projects</h1>

      {/* The skeleton renders instantly while SchoolProjectsList fetches data */}
      <Suspense fallback={<ProjectCardSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}
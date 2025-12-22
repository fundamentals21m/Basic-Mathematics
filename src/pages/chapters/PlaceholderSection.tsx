import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

interface PlaceholderSectionProps {
  sectionId: number;
}

export default function PlaceholderSection({ sectionId }: PlaceholderSectionProps) {
  return (
    <LessonLayout sectionId={sectionId}>
      <Callout type="info" title="Coming Soon">
        <p>
          This section is currently under development. Check back soon for interactive content,
          visualizations, and practice exercises!
        </p>
      </Callout>

      <div className="mt-8 p-8 rounded-2xl border border-dashed border-dark-700/50 bg-dark-900/30 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-dark-800/50 flex items-center justify-center">
          <svg className="w-8 h-8 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <p className="text-dark-500">
          Content for Section {sectionId} will include definitions, theorems, examples, and interactive visualizations.
        </p>
      </div>
    </LessonLayout>
  );
}

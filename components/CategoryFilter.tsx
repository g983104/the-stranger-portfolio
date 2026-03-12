'use client';

import { useLanguage } from '@/context/LanguageContext';
import type { ProjectCategory } from '@/lib/projects';

type FilterValue = 'all' | ProjectCategory;

interface CategoryFilterProps {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}

const categories: { value: FilterValue; key: string }[] = [
  { value: 'all', key: 'works.filters.all' },
  { value: 'interdisciplinary', key: 'works.filters.interdisciplinary' },
  { value: 'theatre', key: 'works.filters.theatre' },
  { value: 'festival', key: 'works.filters.festival' },
];

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2 md:gap-3" role="group" aria-label="Category filter">
      {categories.map(({ value, key }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase border transition-all duration-300 ${
            active === value
              ? 'border-stone-950 bg-stone-950 text-stone-50'
              : 'border-stone-300 text-stone-500 hover:border-stone-500 hover:text-stone-900'
          }`}
          aria-pressed={active === value}
        >
          {t(key)}
        </button>
      ))}
    </div>
  );
}

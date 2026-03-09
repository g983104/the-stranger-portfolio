'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import koData from '@/content/ko.json';
import enData from '@/content/en.json';

export type Language = 'ko' | 'en';

type TranslationValue = string | string[] | Record<string, unknown>;
type TranslationData = Record<string, TranslationValue | Record<string, TranslationValue>>;

const translations: Record<Language, TranslationData> = {
  ko: koData as TranslationData,
  en: enData as TranslationData,
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  tObj: (key: string) => Record<string, string>;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getNestedValue(
  obj: TranslationData,
  key: string
): TranslationValue | undefined {
  const keys = key.split('.');
  let current: TranslationValue | TranslationData = obj;

  for (const k of keys) {
    if (current === null || current === undefined) return undefined;
    if (typeof current !== 'object' || Array.isArray(current)) return undefined;
    current = (current as Record<string, TranslationValue>)[k];
  }

  return current as TranslationValue;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('ko');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language | null;
    if (stored === 'ko' || stored === 'en') {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(translations[lang], key);
      if (typeof value === 'string') return value;
      const fallback = getNestedValue(translations.ko, key);
      if (typeof fallback === 'string') return fallback;
      return key;
    },
    [lang]
  );

  const tArray = useCallback(
    (key: string): string[] => {
      const value = getNestedValue(translations[lang], key);
      if (Array.isArray(value)) return value as string[];
      const fallback = getNestedValue(translations.ko, key);
      if (Array.isArray(fallback)) return fallback as string[];
      return [];
    },
    [lang]
  );

  const tObj = useCallback(
    (key: string): Record<string, string> => {
      const value = getNestedValue(translations[lang], key);
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        return value as Record<string, string>;
      }
      return {};
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tArray, tObj }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

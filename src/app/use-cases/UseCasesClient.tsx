'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { UseCase } from '@/lib/supabase';

interface UseCasesClientProps {
  useCases: UseCase[];
}

function Chip({ text, color, onClick, active }: { text: string; color?: string; onClick?: () => void; active?: boolean }) {
  const baseStyle = {
    background: active ? `color-mix(in srgb, ${color || 'rgba(255,255,255,1)'} 15%, transparent)` : "rgba(255,255,255,0.05)",
    border: `1px solid ${active ? `color-mix(in srgb, ${color || 'rgba(255,255,255,1)'} 30%, transparent)` : color ? `color-mix(in srgb, ${color} 15%, transparent)` : "rgba(255,255,255,0.08)"}`,
    color: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.6)",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
      style={baseStyle}
      onClick={onClick}
    >
      {text}
    </span>
  );
}

function getAccentColor(accent: 'a' | 'b' | 'c'): string {
  return accent === 'a' ? 'var(--a)' : accent === 'b' ? 'var(--b)' : 'var(--c)';
}

function getComplexityColor(complexity: string): string {
  return complexity === 'Simple' ? 'var(--a)' : complexity === 'Moderate' ? 'var(--c)' : 'var(--b)';
}

export default function UseCasesClient({ useCases }: UseCasesClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedComplexity, setSelectedComplexity] = useState<string | null>(null);

  // Extract unique values for filters
  const industries = useMemo(() => {
    return Array.from(new Set(useCases.map(uc => uc.industry))).sort();
  }, [useCases]);

  const departments = useMemo(() => {
    return Array.from(new Set(useCases.map(uc => uc.department))).sort();
  }, [useCases]);

  const complexities = ['Simple', 'Moderate', 'Advanced'];

  // Filter use cases
  const filteredUseCases = useMemo(() => {
    return useCases.filter(uc => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          uc.title.toLowerCase().includes(query) ||
          uc.description.toLowerCase().includes(query) ||
          uc.industry.toLowerCase().includes(query) ||
          uc.department.toLowerCase().includes(query) ||
          uc.tools.some(tool => tool.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Industry filter
      if (selectedIndustry && uc.industry !== selectedIndustry) return false;

      // Department filter
      if (selectedDepartment && uc.department !== selectedDepartment) return false;

      // Complexity filter
      if (selectedComplexity && uc.complexity !== selectedComplexity) return false;

      return true;
    });
  }, [useCases, searchQuery, selectedIndustry, selectedDepartment, selectedComplexity]);

  const hasActiveFilters = searchQuery || selectedIndustry || selectedDepartment || selectedComplexity;

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedIndustry(null);
    setSelectedDepartment(null);
    setSelectedComplexity(null);
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Filters ── */}
        <div className="mb-10 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl">
            <input
              type="text"
              placeholder="Search use cases, industries, departments, or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl text-[15px] outline-none focus:ring-2 transition-all"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.92)",
                caretColor: "var(--a)"
              }}
            />
          </div>

          {/* Filter Chips */}
          <div className="space-y-4">
            {/* Industry Filter */}
            <div>
              <div className="mono text-xs text-muted mb-2">INDUSTRY</div>
              <div className="flex flex-wrap gap-2">
                {industries.map(industry => (
                  <Chip
                    key={industry}
                    text={industry}
                    color="var(--c)"
                    onClick={() => setSelectedIndustry(selectedIndustry === industry ? null : industry)}
                    active={selectedIndustry === industry}
                  />
                ))}
              </div>
            </div>

            {/* Department Filter */}
            <div>
              <div className="mono text-xs text-muted mb-2">DEPARTMENT</div>
              <div className="flex flex-wrap gap-2">
                {departments.map(dept => (
                  <Chip
                    key={dept}
                    text={dept}
                    color="var(--b)"
                    onClick={() => setSelectedDepartment(selectedDepartment === dept ? null : dept)}
                    active={selectedDepartment === dept}
                  />
                ))}
              </div>
            </div>

            {/* Complexity Filter */}
            <div>
              <div className="mono text-xs text-muted mb-2">COMPLEXITY</div>
              <div className="flex flex-wrap gap-2">
                {complexities.map(complexity => (
                  <Chip
                    key={complexity}
                    text={complexity}
                    color={getComplexityColor(complexity)}
                    onClick={() => setSelectedComplexity(selectedComplexity === complexity ? null : complexity)}
                    active={selectedComplexity === complexity}
                  />
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <div>
                <button
                  onClick={clearFilters}
                  className="text-sm text-muted hover:text-white transition-colors underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── Results Count ── */}
        <div className="mb-6 text-sm text-muted">
          Showing <span style={{ color: "var(--a)" }}>{filteredUseCases.length}</span> use case{filteredUseCases.length !== 1 ? 's' : ''}
          {hasActiveFilters && <span> (filtered from {useCases.length} total)</span>}
        </div>

        {/* ── Use Cases Grid ── */}
        {filteredUseCases.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-2xl font-semibold mb-3">No use cases found</div>
            <p className="text-muted mb-6">Try adjusting your filters or search query</p>
            <button
              onClick={clearFilters}
              className="btn-secondary px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[1.03]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUseCases.map((useCase) => {
              const accentColor = getAccentColor(useCase.accent_color);
              const complexityColor = getComplexityColor(useCase.complexity);

              return (
                <Link
                  key={useCase.id}
                  href={`/use-cases/${useCase.id}/`}
                  className="rounded-3xl p-6 transition-all hover:scale-[1.02] flex flex-col cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 6%, transparent), transparent)`,
                    border: `1px solid color-mix(in srgb, ${accentColor} 15%, transparent)`,
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-lg font-semibold leading-tight">{useCase.title}</h3>
                    <div
                      className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-lg"
                      style={{
                        background: `color-mix(in srgb, ${accentColor} 10%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${accentColor} 18%, transparent)`,
                      }}
                    >
                      {useCase.icon === 'clipboard' && '📋'}
                      {useCase.icon === 'shield' && '🛡️'}
                      {useCase.icon === 'rocket' && '🚀'}
                      {useCase.icon === 'chart' && '📊'}
                      {useCase.icon === 'document' && '📄'}
                      {useCase.icon === 'search' && '🔍'}
                      {useCase.icon === 'star' && '⭐'}
                      {useCase.icon === 'calendar' && '📅'}
                      {useCase.icon === 'wrench' && '🔧'}
                      {useCase.icon === 'link' && '🔗'}
                      {useCase.icon === 'code' && '💻'}
                      {useCase.icon === 'alert' && '🚨'}
                      {useCase.icon === 'ticket' && '🎫'}
                      {useCase.icon === 'users' && '👥'}
                      {useCase.icon === 'target' && '🎯'}
                      {!['clipboard', 'shield', 'rocket', 'chart', 'document', 'search', 'star', 'calendar', 'wrench', 'link', 'code', 'alert', 'ticket', 'users', 'target'].includes(useCase.icon) && '⚡'}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                    {useCase.description}
                  </p>

                  {/* Tags */}
                  <div className="space-y-3">
                    {/* Industry & Department */}
                    <div className="flex flex-wrap gap-2">
                      <Chip text={useCase.industry} color="var(--c)" />
                      <Chip text={useCase.department} color="var(--b)" />
                    </div>

                    {/* Tools */}
                    {useCase.tools && useCase.tools.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {useCase.tools.slice(0, 4).map(tool => (
                          <Chip key={tool} text={tool} color={accentColor} />
                        ))}
                        {useCase.tools.length > 4 && (
                          <Chip text={`+${useCase.tools.length - 4}`} color={accentColor} />
                        )}
                      </div>
                    )}

                    {/* Footer: Time Saved & Complexity */}
                    <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="text-xs text-muted">
                        ⏱️ {useCase.time_saved}
                      </div>
                      <div
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                          background: `color-mix(in srgb, ${complexityColor} 12%, transparent)`,
                          border: `1px solid color-mix(in srgb, ${complexityColor} 25%, transparent)`,
                          color: "rgba(255,255,255,0.8)",
                        }}
                      >
                        {useCase.complexity}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

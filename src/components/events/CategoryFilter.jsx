import React from 'react';

const CategoryFilter = ({ active, onChange }) => {
    const categories = ['All', 'Festival', 'Expedition', 'Cultural', 'Adventure'];

    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onChange(cat)}
                    className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-md transition-all border ${active === cat
                            ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md'
                            : 'bg-white text-[var(--color-text-secondary)] border-[var(--color-border)] hover:bg-gray-50'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;

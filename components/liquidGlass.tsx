import React from 'react';

interface LiquidGlassProps {
    children: React.ReactNode;
    className?: string;
}

export function LiquidGlassCard({ children, className}: LiquidGlassProps) {
    return (
        <div className='relative overflow-hidden rounded-3xl p-8 bg-white/10 dark:bg-black/20 backdrop-blur-md 
        border border-white/20 dark:border-white/10 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
        transition-all duration-500 ease-out 
        hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.45)]
        hover:border-white/40'
        >
            <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 group-hover:left-full group-hover:opacity-100" />
            
            <div className={`${className ?? ""} relative z-10`}>
                {children}
            </div>
        </div>
    );
}
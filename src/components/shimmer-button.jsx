import React from "react";
import { cn } from "@/lib/utils";

export const ShimmerButton = React.forwardRef(
    (
        {
            shimmerColor = "#ffb700",
            shimmerSize = "0.05em",
            shimmerDuration = "3s",
            borderRadius = "100px",
            background = "#4c1d95", // purple-dark
            className,
            children,
            isActive,
            ...props
        },
        ref,
    ) => {
        return (
            <button
                style={
                    {
                        "--spread": "90deg",
                        "--shimmer-color": shimmerColor,
                        "--radius": borderRadius,
                        "--speed": shimmerDuration,
                        "--cut": shimmerSize,
                        "--bg": isActive ? background : "rgba(76, 29, 149, 0.3)",
                    }
                }
                className={cn(
                    "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-8 py-4 text-white font-barlow font-bold uppercase tracking-widest [background:var(--bg)] [border-radius:var(--radius)]",
                    isActive
                        ? "border border-gold text-white drop-shadow-[0_0_15px_rgba(255,183,0,0.3)]"
                        : "border border-gold/20 text-secondary hover:border-gold/50",
                    "transform-gpu transition-all duration-300 ease-in-out active:translate-y-px",
                    className,
                )}
                ref={ref}
                {...props}
            >
                {isActive && (
                    <div
                        className={cn(
                            "-z-30 blur-[2px]",
                            "absolute inset-0 overflow-visible [container-type:size]",
                        )}
                    >
                        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                            <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
                        </div>
                    </div>
                )}

                <span className="relative z-10">{children}</span>

                <div
                    className={cn(
                        "insert-0 absolute size-full",
                        "px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
                        "transform-gpu transition-all duration-300 ease-in-out",
                        "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
                        "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
                    )}
                />

                <div
                    className={cn(
                        "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]",
                    )}
                />
            </button>
        );
    },
);

ShimmerButton.displayName = "ShimmerButton";

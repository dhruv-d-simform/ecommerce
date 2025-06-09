export function Spinner() {
    return (
        <div
            className="w-10 h-10 border-4 border-t-[#db4444] border-r-[#db4444]/30 border-b-[#db4444]/10 border-l-[#db4444]/70 rounded-full animate-spin relative z-10"
            role="status"
            aria-label="Loading"
        />
    );
}

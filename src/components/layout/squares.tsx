interface SquaresProps {
    colorClass: string;
}

export default function Squares({ colorClass }: SquaresProps) {
    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-40">
            <div className={`w-4 h-4 rounded-sm transition-colors duration-200 ${colorClass}`}></div>
            <div className={`w-4 h-4 rounded-sm transition-colors duration-200 ${colorClass}`}></div>
            <div className={`w-4 h-4 rounded-sm transition-colors duration-200 ${colorClass}`}></div>
        </div>
    );
}
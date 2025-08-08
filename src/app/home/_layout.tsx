export default function LayoutPage({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
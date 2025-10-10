import Footer from "../(components)/Footer";
import Header from "../(components)/Header";

export default function Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <Header />
                <main className="p-6">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

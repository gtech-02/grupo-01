import Header from "./components/cabeçario/Header";
import Footer from "./components/footer/Footer";

export function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
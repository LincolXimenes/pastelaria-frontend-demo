import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="flex-1 w-full px-8 py-8">
        <div className="max-w-screen-2xl mx-auto min-h-[calc(100vh-200px)]">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

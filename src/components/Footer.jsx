export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container mt-10 border-t-2 border-kazDark p-4 text-center text-black">
      &copy; {year} История Казахстана
    </footer>
  );
}

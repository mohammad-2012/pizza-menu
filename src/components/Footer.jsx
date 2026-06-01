export default function Footer() {
  return (
    <footer className="footer">
      <p>{new Date().toLocaleString()} We're Currently open!</p>
      <button className="btn">Order</button>
    </footer>
  );
}

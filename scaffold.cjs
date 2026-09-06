const fs = require('fs');
const path = require('path');

const dirs = [
  'src/components',
  'src/pages',
  'src/admin',
  'src/utils',
  'src/data'
];

const files = {
  'src/components/Navbar.jsx': 'export default function Navbar() { return <nav>Navbar</nav>; }',
  'src/components/Footer.jsx': 'export default function Footer() { return <footer>Footer</footer>; }',
  'src/pages/Home.jsx': 'export default function Home() { return <div>Home</div>; }',
  'src/pages/Products.jsx': 'export default function Products() { return <div>Products</div>; }',
  'src/pages/ProductDetails.jsx': 'export default function ProductDetails() { return <div>ProductDetails</div>; }',
  'src/pages/Cart.jsx': 'export default function Cart() { return <div>Cart</div>; }',
  'src/pages/Checkout.jsx': 'export default function Checkout() { return <div>Checkout</div>; }',
  'src/pages/OrderSuccess.jsx': 'export default function OrderSuccess() { return <div>OrderSuccess</div>; }',
  'src/pages/InfoPages.jsx': 'export default function InfoPages({page}) { return <div>Info: {page}</div>; }',
  'src/admin/AdminLayout.jsx': 'import { Outlet } from "react-router-dom"; export default function AdminLayout() { return <div>Admin Layout <Outlet/></div>; }',
  'src/admin/AdminDashboard.jsx': 'export default function AdminDashboard() { return <div>AdminDashboard</div>; }',
  'src/admin/ProductManagement.jsx': 'export default function ProductManagement() { return <div>ProductManagement</div>; }',
  'src/admin/OrderManagement.jsx': 'export default function OrderManagement() { return <div>OrderManagement</div>; }',
  'src/admin/CategoryManagement.jsx': 'export default function CategoryManagement() { return <div>CategoryManagement</div>; }',
  'src/admin/AdminSettings.jsx': 'export default function AdminSettings() { return <div>AdminSettings</div>; }',
  'src/admin/AdminLogin.jsx': 'export default function AdminLogin() { return <div>AdminLogin</div>; }',
};

dirs.forEach(d => fs.mkdirSync(path.join(__dirname, d), { recursive: true }));

Object.entries(files).forEach(([f, content]) => {
  fs.writeFileSync(path.join(__dirname, f), content);
});

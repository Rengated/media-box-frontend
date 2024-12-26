import Home from "@/pages/home";
import Media from "@/pages/Media";
import Login from "@/pages/login";
import Register from "@/pages/register";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/media",
    isPrivate: true,
    element: <Media />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default router;

import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Produtos",
    path: "/produtos",
    icon: <RiIcons.RiHandCoinLine />,
    className: "nav-text",
  },
  {
    title: "Cargos",
    path: "/cargos",
    icon: <MdIcons.MdOutlineBadge />,
    className: "nav-text",
  },
  {
    title: "Categorias",
    path: "/categorias",
    icon: <MdIcons.MdOutlineBadge />,
    className: "nav-text",
  },
];
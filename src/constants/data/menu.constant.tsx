import Icon from "components/icon";

const _MENUITEMS: CategoryItemType[] = [
    {
        label: "Dashboard",
        icon: <Icon icon="Home" />,
        link: "",
        key: "dash",
        badge: ""
    },
    {
        label: "Casino Games",
        icon: <Icon icon="Game" />,
        link: "casino-games",
        key: "casino-games",
        badge: ""
    },
    {
        label: "Top Up Balance",
        icon: <Icon icon="Topup" />,
        link: "top-up",
        key: "top-up",
        badge: ""
    },
    {
        label: "Setting",
        icon: <Icon icon="Setting" />,
        link: "setting",
        key: "setting",
        badge: ""
    },
    {
        label: "Log out",
        icon: <Icon icon="Logout" />,
        link: "logout",
        key: "logout",
        badge: ""
    }
]

export default _MENUITEMS;

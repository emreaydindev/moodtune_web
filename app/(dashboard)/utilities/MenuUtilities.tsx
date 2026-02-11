import BrowseIconOutlined from "@mui/icons-material/LanguageOutlined"
import BrowseIconFilled from "@mui/icons-material/Language"
import TrendingIconOutlined from "@mui/icons-material/WhatshotOutlined"
import TrendingIconFilled from "@mui/icons-material/Whatshot"
import LibraryIconOutlined from "@mui/icons-material/TurnedInNot"
import LibraryIconFilled from "@mui/icons-material/TurnedIn"
import SettingsIconOutlined from "@mui/icons-material/SettingsOutlined"
import SettingsIconFilled from "@mui/icons-material/Settings"
import LogoutIconOutlined from "@mui/icons-material/LogoutOutlined"
import ProfileIconOutlined from "@mui/icons-material/AccountCircleOutlined"
import ProfileIconFilled from "@mui/icons-material/AccountCircle"
import { QuestionMark } from "@mui/icons-material"


export interface SidebarItemData {
    id: string
    title: string
    link?: string
    section: string
    type: string
    onclick?: () => void
    view_type: string
}

export const MENU_ITEMS: SidebarItemData[] = [
    {
        id: "browse",
        title: "Browse",
        link: "/browse",
        section: "general",
        type: "link",
        view_type: "both"
    },
    {
        id: "trending",
        title: "Trending",
        link: "/trending",
        section: "general",
        type: "link",
        view_type: "both"
    },
    {
        id: "library",
        title: "Library",
        link: "/library",
        section: "general",
        type: "link",
        view_type: "both"
    },
    {
        id: "settings",
        title: "Settings",
        link: "/settings",
        section: "settings",
        type: "link",
        view_type: "both"
    },
    {
        id: "logout",
        title: "Logout",
        section: "settings",
        type: "button",
        onclick: () => alert("Logged out!"),
        view_type: "sidebar"
    },
    {
        id: "profile",
        title: "Profile",
        section: "settings",
        type: "link",
        link: "/profile",
        view_type: "bottomnavbar"
    }
]

export function NavItemIcon({selected, data} : {selected: boolean, data: SidebarItemData}) {
    switch (data.id) {
        case "browse":
            if (selected) return <BrowseIconFilled color="primary" />
            else return <BrowseIconOutlined sx={{color: "text.secondary"}} />
        case "trending":
            if (selected) return <TrendingIconFilled color="primary" />
            else return <TrendingIconOutlined sx={{color: "text.secondary"}} />
        case "library":
            if (selected) return <LibraryIconFilled color="primary" />
            else return <LibraryIconOutlined sx={{color: "text.secondary"}} />
        case "settings":
            if (selected) return <SettingsIconFilled color="primary" />
            else return <SettingsIconOutlined sx={{color: "text.secondary"}} />
        case "logout":
            return <LogoutIconOutlined sx={{color: "danger"}} />
        case "profile":
            if (selected) return <ProfileIconFilled color="primary" />
            else return <ProfileIconOutlined sx={{color: "text.secondary"}} />
        default:
            return <QuestionMark />
    }
}
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { usePathname } from "next/navigation";
import { MENU_ITEMS, NavItemIcon } from "../utilities/MenuUtilities";
import Link from "next/link";

export default function BottomNavBar() {

    const pathname = usePathname();
    const value = MENU_ITEMS.filter((val) => ["both", "bottomnavbar"].includes(val.view_type)).map((val) => val.link).indexOf(pathname)

    return <BottomNavigation
        showLabels
        value={value}
    >
        {
            MENU_ITEMS.filter((val) => ["both", "bottomnavbar"].includes(val.view_type))
                .map((itemData, index) => {
                    return <BottomNavigationAction 
                                icon={<NavItemIcon selected={index === value} data={itemData} />} 
                                LinkComponent={Link}
                                href={itemData.link!}
                                label={index === value ? itemData.title : null}
                           />
                })
        }
    </BottomNavigation>
}
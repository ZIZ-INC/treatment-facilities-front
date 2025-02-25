import {Calculator, ToggleLeft, ChartSpline, Search, Settings, SquareUser} from "lucide-react";

export function generateCommonMenuItems(t: (key: string) => string) {
    return [
        {
            title: t("householdGoods"),
            url: "/householdGoods",
            icon: Calculator,
        },
        {
            title: t("KNS"),
            url: "/KNS",
            icon: Calculator,
        },
        {
            title: t("stormDrain"),
            url: "/stormDrain",
            icon: Calculator,
        }
    ];
}

export function generateManagerMenuItems(t: (key: string) => string) {
    return [
        {
            title: t("displaySettings"),
            url: "/displaySettings",
            icon: ToggleLeft,
        },
        {
            title: t("userCalculations"),
            url: "/userCalculations",
            icon: SquareUser,
        },
        {
            title: t("analytics"),
            url: "/analytics",
            icon: ChartSpline,
        }
    ];
}
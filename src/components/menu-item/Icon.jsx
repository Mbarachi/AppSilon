import React from 'react'
import {ReactComponent as DashboardIcon} from "../../assets/icons/overview.svg"
import {ReactComponent as PolicyIcon} from "../../assets/icons/policy.svg"

const DashboardIcons = (active) => {
    return <DashboardIcon stroke={active ? "red" : "grey"} />
}

export default {PolicyIcon, DashboardIcons}
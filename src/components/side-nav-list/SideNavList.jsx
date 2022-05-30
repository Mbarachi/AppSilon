import React, { useState } from "react";
import menuItems from "../../data/menu-items.json";
import MenuItem from "../menu-item/MenuItem";
import { ReactComponent as PolicyIcon } from "../../assets/icons/policy.svg";
import { ReactComponent as OverviewIcon } from "../../assets/icons/overview.svg";
import { ReactComponent as ReportIcon } from "../../assets/icons/report.svg";
import { ReactComponent as CompanyIcon } from "../../assets/icons/company.svg";
import { ReactComponent as UserAccountIcon } from "../../assets/icons/user-account.svg";
import { ReactComponent as HistoryIcon } from "../../assets/icons/user-receipts.svg";
import { ReactComponent as LogoutButton } from "../../assets/icons/log-out.svg";

const SideNavList = () => {
  const defaultIcons = {
    overview: false,
    policy: false,
    reports: true,
    company: false,
    useraccount: false,
    history: false,
  };
  const [icons, setIcons] = useState(defaultIcons);

  const switchMenu = (item) => {
    const newIcons = icons;
    newIcons[item] = !icons[item]
    setIcons(newIcons);
    console.log(icons)
  };

  return (
    <div>
      <MenuItem
        title={"Overview"}
        active={icons.overview}
        icon={<OverviewIcon stroke="#A2A4B9" />}
      />
      <MenuItem title={"Policy"} icon={<PolicyIcon stroke="#A2A4B9" />} />
      <MenuItem title={"Reports"} icon={<ReportIcon stroke="#A2A4B9" />} />
      <MenuItem title={"Company"} icon={<CompanyIcon stroke="#A2A4B9" />} />
      <MenuItem
        title={"User Account"}
        icon={<UserAccountIcon stroke="#A2A4B9" />}
      />
      <MenuItem title={"History"} icon={<HistoryIcon stroke="#A2A4B9" />} />
      <div style={{marginTop:"80px"}}>
        <MenuItem title={"Logout"} icon={<LogoutButton stroke="#A2A4B9" />}/>
      </div>
    </div>
  );
};

export default SideNavList;

import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";

export default function Sidebar() {
	const [image, setImage] = useState(
		"https://i.discogs.com/vOwjcmQR-iwY03zvhPjc2zsvY0WhOn8bEdi33J1Z3mg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNzAy/MC0xMzAxMjQzNTM1/LmpwZWc.jpeg"
	);

	useEffect(() => {
		apiClient.get("me").then((response) => {
			setImage(response.data.images[0].url);
		});
	});

	return (
		<div className="sidebar-container">
			<img src={image} className="profile-img" alt="profile" />
			<div>
				<SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
				<SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
				<SidebarButton title="Player" to="/player" icon={<FaPlay />} />
				<SidebarButton
					title="Favorites"
					to="/favorites"
					icon={<MdFavorite />}
				/>
				<SidebarButton title="Library" to="/" icon={<IoLibrary />} />
			</div>
			<SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
		</div>
	);
}

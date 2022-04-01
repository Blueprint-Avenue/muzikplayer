import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library/library";
import Player from "../player/player";
import Trending from "../trending/trending";
import Feed from "../feed/feed";
import Favorites from "../favorites/favorites";

export default function Home() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Library />} />
				<Route path="/feed" element={<Feed />} />
				<Route path="/trending" element={<Trending />} />
				<Route path="/player" element={<Player />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
		</Router>
	);
}

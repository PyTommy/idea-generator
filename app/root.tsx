import { Links, LiveReload, Meta, Outlet, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';

import styles from './tailwind.css';
import { MenuBar } from './components/MenuBar/MenuBar';
import { Color } from './constants/styles';

export function links() {
	return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => {
	return { title: 'Idea Generator' };
};

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body
				className={`flex w-screen h-screen ${Color.Background[800]} ${Color.Text.white} divide-x ${Color.Divider}`}
			>
				<nav className={`w-64 overflow-y-auto`}>
					<MenuBar />
				</nav>
				<main className="w-full h-full overflow-hidden">
					<Outlet />
				</main>
				<ScrollRestoration />
				<LiveReload />
			</body>
		</html>
	);
}

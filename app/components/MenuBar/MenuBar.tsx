import { MenuLink } from './MenuLink';

const menus: { to: string; title: string }[] = [
	{
		to: '/factors',
		title: 'Factors',
	},
];

export function MenuBar() {
	return (
		<aside className="w-full h-full overflow-y-auto py-4 px-3">
			<ul className="space-y-2">
				<li>
					{menus.map(({ to, title }) => (
						<MenuLink key={to} to={to} title={title} />
					))}
				</li>
			</ul>
		</aside>
	);
}

import { Link, useLocation } from 'remix';
import { Color } from '~/constants/styles';
import { matchPath } from 'react-router-dom';

export function MenuLink({ to, title }: { to: string; title: string }) {
	const { pathname } = useLocation();
	const isActive = matchPath(pathname, to);
	const activeClassNames = Color.Background[700];
	return (
		<Link
			to={to}
			className={`flex items-center p-2 text-base font-normal rounded-lg hover:${
				Color.Background[700]
			} ${isActive ? activeClassNames : ''}`}
		>
			<span className="ml-3">{title}</span>
		</Link>
	);
}

import * as React from 'react';
import { Link } from 'gatsby';
import { LayoutProps } from '../utils/models';

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>ホーム</Link>
                        </li>
                        <li>
                            <Link to='/blogs'>一覧</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;

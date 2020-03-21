import React from 'react';


export function AppFooter() {
    return (
        <footer>
			<div className = "footer">
			© {new Date().getFullYear()}. Duri Holidays. All rights reserved.
			</div>
        </footer>
    );
}

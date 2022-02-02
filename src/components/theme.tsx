import React, {ReactNode, useEffect} from 'react';

export type ThemeProps = {
    children: ReactNode,
    theme: 'light' | 'dark',
    weight?: number
}

export function Theme(props: ThemeProps) {

    useEffect(() => {document.body.className = props.theme === 'dark' ? `lucy theme-${props.theme}` : 'lucy'}, [props.theme])
    return <div className={`lucy`} style={{['--weight' as any]: props.weight ?? 300}}>
        {props.children}
    </div>
}
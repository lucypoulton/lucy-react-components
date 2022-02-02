import React, {ReactNode} from "react";

export type FlowboxProps = {
	children: ReactNode,
	width?: number,
	margin?: number
}

export function Flowbox(props: FlowboxProps) {
	return <div className="flowbox" style={{
		['--basis' as any]: `${props.width ?? 20}em`,
		['--margin' as any]: `${props.margin ?? 0.5}em`
	}}>
		{props.children}
	</div>
}
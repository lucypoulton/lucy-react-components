import React, {createRef, ReactNode, useEffect} from "react";

export type FadeProps = {
	children: ReactNode
	fadeIn: boolean
}

export function Fade(props: FadeProps) {

	const divRef = createRef<HTMLDivElement>()

	useEffect(() => {
		divRef.current?.classList[props.fadeIn ? 'add' : 'remove']('fadeIn')
	}, [divRef, props.fadeIn])

	return <div ref={divRef} className={"fadeContainer"}>
		{props.children}
	</div>
}
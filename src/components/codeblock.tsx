import Prism from 'prismjs';
import React from 'react';

export type CodeblockProps = {
	lang?: string,
	children: string
}

export function Codeblock(props: CodeblockProps) {

	const text = props.lang ? Prism.highlight(props.children, Prism.languages[props.lang.toLowerCase()], props.lang) : props.children
	return <pre className="codeblock">
		{props.lang && <div className="lang">{props.lang}</div>}
		<code dangerouslySetInnerHTML={
			{__html: text}}
		/>
	</pre>
}
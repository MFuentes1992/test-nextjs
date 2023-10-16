"use client";
import React, { useState } from "react";

export const Counter = () => {
	const [counter, setCounter] = useState<number>(0);
	const propsInput = {
		type: "number",
		name: "counter",
		placeholder: "counter",
		onChange: (evt: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = evt.target;
			setCounter(Number.parseInt(value, 10));
		},
	};
	const propsPlus = {
		onClick: () => {
			setCounter((prev: number) => prev + 1);
		},
	};
	const propsMinus = {
		onClick: () => {
			setCounter((prev: number) => Math.max(prev - 1, 0));
		},
	};
	return (
		<div>
			<input {...propsInput} value={counter} />
			<div>
				<button {...propsPlus}>+</button>
				<button {...propsMinus}>-</button>
			</div>
		</div>
	);
};

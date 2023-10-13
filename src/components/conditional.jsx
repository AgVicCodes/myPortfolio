function Drink({ bevName }) {Edited JSX
	return (
		<section>
			<h1>{bevName}</h1>
			<table>
				<tr>
					<td>Part of plant</td>
					<td>{bevName === 'tea' ? 'leaf' : 'bean'}</td>
				</tr>
				<tr>
					<td>Caffeine content</td>
					<td>{bevName === 'tea' ? '15 - 70 mg/cup' : '80 - 185 mg/cup'}</td>
				</tr>
				<tr>
					<td>Age</td>
					<td>{bevName === 'tea' ? '4,000+ years' : '1,000+ years'}</td>
				</tr>
			</table>
		</section>
	);
}

export default function DrinkList() {
	return (
		<div>
			<Drink bevName="tea" />
			<Drink bevName="coffee" />
		</div>
	);
}
  
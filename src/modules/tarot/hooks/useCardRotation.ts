export default function useCardRotation() {
	const getTransform = (index: number, totalCards: number) => {
		const maxRotation = 70;
		const angleIncrement = maxRotation / (totalCards - 1);
		const angle = (index - Math.floor(totalCards / 2)) * angleIncrement;
		return {
			transform: `rotate(${angle}deg)`,
		};
	};

	return {
		getTransform,
	};
}

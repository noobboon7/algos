//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) => {
  let startTime = startDate.getTime();
	let endDate = new Date(startTime + 1000000000000);
	return endDate;
};
